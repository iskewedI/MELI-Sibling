const Joi = require('joi');
const itemParser = require('./parser');

const validatorSearch = ({ query }) => {
  const { q: querySearch } = query;

  const responseMessages = {
    required: "La propiedad 'query' (q) es requerido como parámetro",
    stringEmpty: "La propiedad 'query' (q) es requerido como parámetro",
  };

  if (!querySearch) return { error: { message: responseMessages.required } };

  const schema = Joi.string()
    .min(5)
    .max(150)
    .required()
    .messages(responseMessages);

  return schema.validate(querySearch);
};

const validatorId = ({ params }) => {
  const responseMessages = {
    required: 'El ID del item es requerido',
    stringEmpty: 'El ID del item es requerido',
  };

  if (!params.id) return { error: { message: responseMessages.required } };

  const schema = Joi.string()
    .min(1)
    .max(150)
    .required()
    .messages(responseMessages);

  return schema.validate(params.id);
};

const responseMaker = (() => {
  const getItemsBySearch = (data) => ({
    ...itemParser.getAuthor(data.apiCaller),
    ...itemParser.getCategories(data.available_filters),
    ...itemParser.getResultItems(data.results, 4),
  });

  const getItemById = async (data) => {
    const item = await itemParser.getSingleItem(data.item);

    return {
      ...itemParser.getAuthor(data.apiCaller),
      ...item,
    };
  };

  return { getItemsBySearch, getItemById };
})();

module.exports = {
  validatorSearch,
  validatorId,
  responseMaker,
};
