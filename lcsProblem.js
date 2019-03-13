const v8 = require('v8')
var longestCommonSubsequence = require("longest-common-subsequence")

function css(cant1, cant2) {

    var text1 = '';
    var text2 = '';

    var initialMemUsed = process.memoryUsage().heapUsed / 1024 / 1024;

    var totalBeginHR = process.hrtime();
    var totalBegin = totalBeginHR[0] * 1000000 + totalBeginHR[1] / 1000;

    var heapStats = v8.getHeapStatistics();

    // Round stats to MB
    var roundedHeapStats = Object.getOwnPropertyNames(heapStats).reduce(function (map, stat) {
        map[stat] = Math.round((heapStats[stat] / 1024 / 1024) * 1000) / 1000;
        return map;
    }, {});



    var stressResponse = {
        "info": {
            "initialMemory": Math.round((initialMemUsed) * 1000) / 1000,
            "heapStats": roundedHeapStats
        },
        "result": {
            "stages": [{
                "id": "problemGeneration",
                "duration": -1,
                "memory": -1
            },
            {
                "id": "problemSolving",
                "duration": -1,
                "memory": -1
            }
            ],
            "total": {
                "duration": -1,
                "memory": -1
            }
        }
    };


    var stagesMap = stressResponse.result.stages.reduce(function (map, obj) {
        map[obj.id] = {
            "duration": obj.duration,
            "memory": obj.memory
        };
        return map;
    }, {});

    ///////////////// GENERATION ///////////////////

    var beginHR = process.hrtime()
    var begin = beginHR[0] * 1000000 + beginHR[1] / 1000;

    //console.time(problem+"-"+phase+"-C"); 
    var possible = "abcdefghijklmnopqrstuvwxyz"; /*******/
    for (let index = 0; index < cant1; index++) { /*******/
        text1 += possible.charAt(Math.floor(Math.random() * possible.length)); /*******/
    } /*******/
    // console.log(text1);
    for (let index = 0; index < cant2; index++) { /*******/
        text2 += possible.charAt(Math.floor(Math.random() * possible.length)); /*******/
    }      /*******/
    //console.timeEnd(problem+"-"+phase+"-C"); 

    var endHR = process.hrtime()
    var end = endHR[0] * 1000000 + endHR[1] / 1000;
    var duration = (end - begin) / 1000;
    var roundedDuration = Math.round(duration * 1000) / 1000;


    stagesMap["problemGeneration"].duration = roundedDuration;

    /////////////////////////////////////////////////

    const genMemUsed = process.memoryUsage().heapUsed / 1024 / 1024;

    stagesMap["problemGeneration"].memory = Math.round((genMemUsed - initialMemUsed) * 1000) / 1000;



    ///////////////////// SOLVING /////////////////
    var phase = "solving";
    var beginHR = process.hrtime()
    var begin = beginHR[0] * 1000000 + beginHR[1] / 1000;


    console.log(longestCommonSubsequence(text1, text2)); /*******/

    var endHR = process.hrtime()
    var end = endHR[0] * 1000000 + endHR[1] / 1000;
    var duration = (end - begin) / 1000;
    var roundedDuration = Math.round(duration * 1000) / 1000;

    stagesMap["problemSolving"].duration = roundedDuration;

    var finalMemUsed = process.memoryUsage().heapUsed / 1024 / 1024;

    stagesMap["problemSolving"].memory = Math.round((finalMemUsed - genMemUsed) * 1000) / 1000;

    /////////////////////////////////////////////////

    var totalEndHR = process.hrtime()
    var totalEnd = totalEndHR[0] * 1000000 + totalEndHR[1] / 1000;
    var totalDuration = (totalEnd - totalBegin) / 1000;
    var roundedDuration = Math.round(totalDuration * 1000) / 1000;

    stressResponse.result.total.duration = roundedDuration;
    stressResponse.result.total.memory = Math.round((finalMemUsed - initialMemUsed) * 1000) / 1000;

    stressResponse.result.stages = Object.getOwnPropertyNames(stagesMap).map(stageId => {
        return {
            "id": stageId,
            "duration": stagesMap[stageId].duration,
            "memory": stagesMap[stageId].memory
        };
    });

    return stressResponse;
}

// css('', '', 10, 10); 

module.exports.lcs = css;