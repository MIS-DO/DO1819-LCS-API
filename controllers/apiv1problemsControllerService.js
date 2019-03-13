'use strict'
const longestCommonSubsequence = require("longest-common-subsequence");


module.exports.newProblem = function newProblem(req, res, next) {
  var proReq =  req.problem.value;

  var beginHR = process.hrtime()
  var begin = beginHR[0] * 1000000 + beginHR[1] / 1000;

  //console.log(proReq.problem.subsequence1 , proReq.problem.subsequence2);
  //console.log(JSON.stringify(req.problem.value.problem.subsequence2));

  
  var solutionSubsequence = css(proReq.problem.subsequence1, proReq.problem.subsequence2,0,0);
  var endHR = process.hrtime();
  var end = endHR[0] * 1000000 + endHR[1] / 1000;

  var solutionTime = (end - begin) / 1000;

  proReq.solution = {
    commonSub: solutionSubsequence,
    stats : {
      solvingTime: solutionTime
    }
  };
  
  res.send(proReq);
  
};

function css(cad1, cad2) {    
    return  (longestCommonSubsequence( cad1, cad2));
}