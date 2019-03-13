'use strict'

var varapiv1stressController = require('./apiv1stressControllerService');

module.exports.getStress = function getStress(req, res, next) {

  var stressRequest = {
    "problem": "LCS",
    "parameters": [
      {
        "id": "subsequence1",
        "value": req.swagger.params.subsequence1.value
      },
      {
        "id": "subsequenc2",
        "value": req.swagger.params.subsequence2.value
      }
    ],
    "config": {
      "maxMemory": -1,
      "maxTime": -1
    }
  };
  req.swagger.params.stressRequest = {
    "value": stressRequest
  };

  varapiv1stressController.getStress(req.swagger.params, res, next);
};

module.exports.getStressInfo = function getStressInfo(req, res, next) {
  varapiv1stressController.getStressInfo(req.swagger.params, res, next);
};