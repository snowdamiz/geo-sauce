# Geo Sauce
Route clustering and route optimization.

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
      - [Clustering](#clustering)
        - [Clustering Options](#clustering-options)
        - [Default Clustering Options](#default-clustering-options)
      - [Optimize Routes](#optimize-routes)
        - [Route Optimization Options](#route-optimization-options)
        - [Default Route Optimization Options](#default-route-optimization-options)
  - [License](#license)

## Installation
```npm install geo-sauce```

## Usage

### Clustering
Import clustering function

```import { radialKMeansClustering } from 'geo-sauce'```

Call radialKMeansClustering with an array of coordinate pairs `[[lat, lng]]` or `geojson` and optionally pass in options

```const routes = radialKMeansClustering(coordinates, options)```

This will return an array of optimized routes through the clustered coordinates.

#### Clustering Options
```const options = Number```

#### Default Clustering Options
```const options = 8```


### Optimize Routes
Import route optimization function
  
```import { optimizeRoute } from 'geo-sauce'```

Call the optimizeRoute function with an array of coordinate pairs `[[lat, lng]]` or `geojson` and optionally pass in options

```const optimizedRoute = optimizeRoute(coordinates, options)```

This will return an optimized route.

**numberOfClusters:** The number of clusters to generate. Must be a positive integer.


#### Route Optimization Options
```
const options = {
  generations: Number,
  populationSize: Number,
  mutationRate: Number,
  elitismRate: Number,
  maxGenerationsWithoutImprovement: Number,
  showLogs: Boolean,
  tournamentSize: Number,
}
```

#### Default Route Optimization Options
```
const options = {
  generations: 1000,
  populationSize: 100, 
  mutationRate: 0.1,
  elitismRate: 0.15,
  maxGenerationsWithoutImprovement: 200,
  showLogs: false,
  tournamentSize: 10
}
```

**generateRoutes:** Generate optimized routes through the clusters.

**generations:** Number of generations for the genetic algorithm.

**populationSize:** Number of routes per generation.

**mutationRate:** Chance of mutation per gene in a route.

**elitismRate:** Percentage of top routes automatically carried to next generation.

**maxGenerationsWithoutImprovement:** Maximum generations without improvement before algorithm terminates.

**showLogs:** Logs the progress of the genetic algorithm if true.

**tournamentSize:** Number of routes selected for tournament selection in genetic algorithm.

## License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
