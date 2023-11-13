# Geo Sauce
Route clustering and route optimization.

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
      - [Options](#options)
      - [Default Options](#default-options)
  - [License](#license)

## Installation
```npm install geo-sauce```

## Usage
Import the main geoSauce function

```import { geoSauce } from 'geo-sauce'```

Call geoSauce with an array of coordinate pairs [[lat, lng]] and optionally pass in options:

```const optimizedRoutes = geoSauce(coordinates, options)```

This will return an array of optimized routes through the clustered coordinates.
If you only want clustering without route optimization, pass `generateRoutes: false` in the options.

#### Options
Geo Sauce accepts the following options:

```
const options = {
  numberOfClusters: 8,
  generateRoutes: true,
  generateRouteOptions: {
    generations: 1000,
    populationSize: 100,
    mutationRate: 0.1,
    elitismRate: 0.15,
    maxGenerationsWithoutImprovement: 200,
    showLogs: true,
    tournamentSize: 10,
  }
}
```

**numberOfClusters:** The number of clusters to generate. Must be a positive integer.
**generateRoutes:** Generate optimized routes through the clusters. Defaults to true. Set to false for just clustering.
**generations:** Number of generations for the genetic algorithm.
**populationSize:** Number of routes per generation.
**mutationRate:** Chance of mutation per gene in a route.
**elitismRate:** Percentage of top routes automatically carried to next generation.
**maxGenerationsWithoutImprovement:** Maximum generations without improvement before algorithm terminates.
**showLogs:** Logs the progress of the genetic algorithm if true.
**tournamentSize:** Number of routes selected for tournament selection in genetic algorithm.

#### Default Options
If no options are passed, Geo Sauce will use these defaults:

```
{
  numberOfClusters: 8,
  generateRoutes: true,
  generateRouteOptions: {
    generations: 1000,
    populationSize: 100, 
    mutationRate: 0.1,
    elitismRate: 0.15,
    maxGenerationsWithoutImprovement: 200,
    showLogs: false,
    tournamentSize: 10
  }
}
```

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