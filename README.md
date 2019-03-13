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

