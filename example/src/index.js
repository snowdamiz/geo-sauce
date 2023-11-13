import { geoSauce } from 'geo-sauce'
import { coordinates } from './data/coords.js'

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

const clusters = geoSauce(coordinates, options)
console.log(clusters)