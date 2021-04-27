const axios = require('axios').default;
const _ = require('lodash');

const { MELI } = require('../config.json').external;

const itemParser = (() => {
  const Constants = {
    author: {
      key: 'author',
      properties: {
        name: 'name',
        lastname: 'lastname',
      },
    },
    categories: {
      key: 'categories',
      filterId: 'category',
    },
    items: {
      key: 'items',
      properties: {
        id: 'id',
        title: 'title',
        price: {
          key: 'price',
          properties: {
            currency: 'currency',
            amount: 'amount',
            decimals: 'decimals',
          },
        },
        picture: 'picture',
        condition: 'condition',
        freeShipping: 'free_shipping',
        soldQuantity: 'sold_quantity',
        description: 'description',
      },
    },
  };

  const getAuthor = apiCaller => {
    const { key, properties } = Constants.author;

    return {
      [key]: {
        [properties.name]: apiCaller.name,
        [properties.lastname]: apiCaller.lastname,
      },
    };
  };

  const getCategoryNames = async filter => {
    const { filterId } = Constants.categories;

    const categoryFilterIndex = filter.findIndex(filter => filter.id === filterId);

    const categoriesFilter = filter[categoryFilterIndex];

    const mostResultsCategoryId = categoriesFilter.values[0].id;

    const url = `https://api.mercadolibre.com/categories/${mostResultsCategoryId}`;

    const result = await axios.get(url);

    const categoryNames = result.data.path_from_root.map(path => path.name);

    return categoryNames;
  };

  const getCategories = async (availableFilters, filters) => {
    const { key } = Constants.categories;

    let categoryNames;

    if (filters.length > 0) {
      categoryNames = await getCategoryNames(filters);
    } else {
      categoryNames = await getCategoryNames(availableFilters, 'results', 'desc');
    }

    return {
      [key]: categoryNames,
    };
  };

  const getItemPrice = itemData => {
    const { key, properties } = Constants.items.properties.price;

    const price = {
      [properties.currency]: itemData.currency_id,
      [properties.amount]: itemData.available_quantity,
      [properties.decimals]: itemData.price,
    };

    return { [key]: price };
  };

  const getItemDescription = async item => {
    const url = `${MELI.baseURL}/items/${item.id}/description`;

    const result = await axios.get(url);

    return result.data.plain_text;
  };

  const getSingleItem = async item => {
    const { key, properties } = Constants.items;

    const {
      id,
      title,
      picture,
      condition,
      freeShipping,
      soldQuantity,
      description,
    } = properties;

    const parsedItem = {
      [id]: item.id,
      [title]: item.title,
      ...getItemPrice(item),
      [picture]: item.thumbnail,
      [condition]: item.condition,
      [freeShipping]: item.shipping.free_shipping,
      [soldQuantity]: item.sold_quantity,
      [description]: await getItemDescription(item),
    };

    return { [key]: parsedItem };
  };

  const getResultItems = (items, count = null) => {
    const { key, properties } = Constants.items;

    const { id, title, picture, condition, freeShipping } = properties;

    const parsedItems = items.map(result => ({
      [id]: result.id,
      [title]: result.title,
      ...getItemPrice(result),
      [picture]: result.thumbnail,
      [condition]: result.condition,
      [freeShipping]: result.shipping.free_shipping,
    }));

    return { [key]: count ? parsedItems.splice(0, count) : parsedItems };
  };

  return {
    getAuthor,
    getCategories,
    getSingleItem,
    getResultItems,
  };
})();

module.exports = itemParser;
