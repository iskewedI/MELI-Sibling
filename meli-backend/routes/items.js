const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const validateQuery = require('../middleware/validateQuery');
const { validatorSearch, validatorId, responseMaker } = require('../models/items');
const { MELI } = require('../config.json').external;

router.get('/', validateQuery(validatorSearch), async ({ query, headers }, res) => {
  const url = `${MELI.baseURL}/sites/MLA/search?q=${query.q}`;

  const search = await axios.get(url);

  const data = {
    ...search.data,
    apiCaller: {
      name: headers.caller_name,
      lastname: headers.caller_lastname,
    },
  };

  res.send(await responseMaker.getItemsBySearch(data));
});

router.get('/:id', validateQuery(validatorId), async ({ params, headers }, res) => {
  const url = `${MELI.baseURL}/items/${params.id}`;

  const result = await axios.get(url);

  const data = {
    item: result.data,
    apiCaller: {
      name: headers.caller_name,
      lastname: headers.caller_lastname,
    },
  };

  const response = await responseMaker.getItemById(data);

  res.send(response);
});

module.exports = router;
