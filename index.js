import { radialKMeansClustering } from './helpers/clustering.js'
import { geneticAlgorithm } from './algorithms/geneticAlgorithm.js'

const defaultOptions = {
  numberOfClusters: 8,
  generateRoutes: false,
  generateRouteOptions: {
    generations: 1000,
    populationSize: 100,
    mutationRate: 0.1,
    elitismRate: 0.15,
    maxGenerationsWithoutImprovement: 200,
    showLogs: false,
    tournamentSize: 10,
  }
}

// Main Call
function geoSauce(coordinates, options = defaultOptions) {
  const clusters = radialKMeansClustering(coordinates, options.numberOfClusters)
  if (!options.generateRoutes) return clusters

  const optimizedRoutes = []
  for (const cluster of clusters) {
    const optimizedRoute = geneticAlgorithm(cluster, options.generateRouteOptions)[0]
    optimizedRoutes.push(optimizedRoute)
  }

  return optimizedRoutes
}

export { geoSauce }