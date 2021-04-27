const Joi = require('joi');
const itemParser = require('./parser');

const validatorSearch = ({ query }) => {
  const { q: querySearch } = query;

  const responseMessages = {
    required: "La propiedad 'query' (q) es requerido como parámetro",
    stringEmpty: "La propiedad 'query' (q) es requerido como parámetro",
  };

  if (!querySearch) return { error: { message: responseMessages.required } };

  const schema = Joi.string().min(2).max(150).required().messages(responseMessages);

  return schema.validate(querySearch);
};

const validatorId = ({ params }) => {
  const responseMessages = {
    required: 'El ID del item es requerido',
    stringEmpty: 'El ID del item es requerido',
  };

  if (!params.id) return { error: { message: responseMessages.required } };

  const schema = Joi.string().min(1).max(150).required().messages(responseMessages);

  return schema.validate(params.id);
};

const responseMaker = (() => {
  const getItemsBySearch = async data => {
    const categories = await itemParser.getCategories(
      data.available_filters,
      data.filters
    );

    return {
      ...itemParser.getAuthor(data.apiCaller),
      ...categories,
      ...itemParser.getResultItems(data.results, 4),
    };
  };

  const getItemById = async data => {
    const item = await itemParser.getSingleItem(data);

    return {
      ...itemParser.getAuthor(data.apiCaller),
      ...item,
    };
  };

  const getItemCategories = async data => {
    const categories = await itemParser.getCategoryNamesById(data.category_id);

    return categories;
  };

  return { getItemsBySearch, getItemById, getItemCategories };
})();

module.exports = {
  validatorSearch,
  validatorId,
  responseMaker,
};
