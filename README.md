# Geo Sauce
Route clustering and route optimization.

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
      - [Radial KMean Clustering](#radial-kmean-clustering)
        - [Radial KMean Clustering Options](#clustering-options)
        - [Default Radial KMean Clustering Options](#default-clustering-options)
      - [Balanced Clustering](#balanced-clustering)
        - [Balanced Clustering Options](#clustering-options)
        - [Default Balanced Clustering Options](#default-clustering-options)
      - [Optimize Routes](#optimize-routes)
        - [Route Optimization Options](#route-optimization-options)
        - [Default Route Optimization Options](#default-route-optimization-options)
      - [Calculate Centroid](#calculate-centroid)
  - [License](#license)

## Installation
```npm install geo-sauce```

## Usage

### Radial KMean Clustering
Import function

```import { radialKMeansClustering } from 'geo-sauce'```

Call radialKMeansClustering with an array of coordinate pairs `[[lat, lng]]` or `geojson` and optionally pass in options

```const routes = radialKMeansClustering(coordinates, options)```

#### Radial KMean Clustering Options
```const options = Number```

#### Default Radial KMean Clustering
```const options = 8```

### Balanced Clustering
Import function

```import { balancedClustering } from 'geo-sauce'```

Call balancedClustering with an array of coordinate pairs `[[lat, lng]]` or `geojson` and optionally pass in options

```const routes = balancedClustering(coordinates, options)```

#### Balanced Clustering Options
```const options = Number```

#### Default Balanced Clustering Options
```const options = 8```

### Optimize Routes
Import function
  
```import { optimizeRoute } from 'geo-sauce'```

Call the optimizeRoute function with an array of coordinate pairs `[[lat, lng]]` or `geojson` and optionally pass in options

```const optimizedRoute = optimizeRoute(coordinates, options)```

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

### Calculate Center Point
Import function
  
```import { calculateCentroid } from 'geo-sauce'```

Call the calculateCentroid function with an array of coordinate pairs `[[lat, lng]]` or `geojson`

```const optimizedRoute = calculateCentroid(coordinates)```

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
