# Long Common SubSequence

## Overview
This is a Long Common Subsequence API for stress analysis and benchmarking. 

LCS algorithm is taken from [elzzabi]https://www.npmjs.com/package/longest-common-subsequence.

There is a **on-line demo** deployment available at: https://do1819-LCS-api.herokuapp.com


### Running the API using docker

If you have docker, you can use it out of the box: `docker run -p 4819:80 -d ricmercedes/lcs-api` to run the container at port `4819`


### Running the API using node

To run the server, just use:

```
npm install 
npm start
```

Then, if running in localhost, you can check the swagger UI doc portal in: `http://localhost:8080/`

### Using the API

#### Stress request

In order to send a request, you must use GET:

- `GET /api/v1/stress/10000/10` would generate and solve a long common subsequence problem with 10000 items (each of them with a random weight up to 10).
```json
{
  "problem": "LCS",
  "parameters": [
    {
      "id": "subsequence1",
      "value": "10000"
    },
    {
      "id": "subsequence2",
      "value": "10"
    }
  ],
  "info": {
    "initialMemory": 15.607,
    "heapStats": {
      "total_heap_size": 20.113,
      "total_heap_size_executable": 3,
      "total_physical_size": 17.862,
      "total_available_size": 1438.295,
      "used_heap_size": 15.61,
      "heap_size_limit": 1456.175,
      "malloced_memory": 0.008,
      "peak_malloced_memory": 3.28,
      "does_zap_garbage": 0
    }
  },
  "result": {
    "stages": [
      {
        "id": "problemGeneration",
        "duration": 4.728,
        "memory": 0.099
      },
      {
        "id": "problemSolving",
        "duration": 19.976,
        "memory": 0.475
      }
    ],
    "total": {
      "duration": 25.352,
      "memory": 0.574
    }
  }
}
```
#### Knapsack problem solving

In order to solve a given knapsak problem you should send a POST to `/api/v1/problems` endpoint: 

`POST /api/v1/problems`
```json
{
  "id": "string",
  "problem": {
    "subsequence1": "weyrwueyrwiuerbajsbdhabshbdhbajdbsdhbsjd",
    "subsequence2": "kjasduyewurtwyebnchzxgvczxnbcmlksdfpiouuiewuyrue"
  },
  "solution": {
    "commonSub": "string",
    "stats": {
      "solvingTime": 0
    }
  }
}
```
will get: 
```json
{
  "id": "string",
  "problem": {
    "subsequence1": "weyrwueyrwiuerbajsbdhabshbdhbajdbsdhbsjd",
    "subsequence2": "kjasduyewurtwyebnchzxgvczxnbcmlksdfpiouuiewuyrue"
  },
  "solution": {
    "commonSub": "ywurwebhbsd",
    "stats": {
      "solvingTime": 10.923021995544433
    }
  }
}
```

`GET /api/v1/stress/info`
```json
{
  "cpuUsage": 0.19339622641509435,
  "cpuFree": 0.8383233532934131,
  "cpuCount": 8,
  "memInfo": {
    "total": 7804.441,
    "free": 434.723,
    "used": 7369.719,
    "active": 5133.848,
    "available": 2952.809,
    "buffcache": 2235.871,
    "swaptotal": 2047.996,
    "swapused": 0.84,
    "swapfree": 2039.207
  },
  "freemem": 435,
  "totalmem": 7804.441,
  "freememPercentage": 0.055737493224260824,
  "cpuInfo": {
    "manufacturer": "Intel®",
    "brand": "Core™ i7-6700HQ",
    "vendor": "",
    "family": "",
    "model": "",
    "stepping": "",
    "revision": "",
    "voltage": "",
    "speed": "2.60",
    "speedmin": "",
    "speedmax": "",
    "cores": 8,
    "physicalCores": 4,
    "processors": 1,
    "socket": "",
    "cache": {
      "l1d": "",
      "l1i": "",
      "l2": "",
      "l3": ""
    }
  },
  "sysUptime": 116773,
  "processUptime": 252.468626034,
  "loadavgLast1Minute": 0.9404296875,
  "loadavgLast5Minutes": 1.369140625,
  "loadavgLast15Minutes": 1.3876953125,
  "platform": "linux"
}
```
