import { distance, calculateCentroid } from '../helpers/geometry.js'
import { normalizeGeo } from '../helpers/normalizeGeo.js'

export function balancedClustering(coordinates, numberOfClusters) {
  const normalizedCoordinates = normalizeGeo(coordinates)

  let clusters = new Array(numberOfClusters).fill(null).map(() => [])
  let clusterCenters = normalizedCoordinates.slice(0, numberOfClusters)

  let assignments = []
  let oldAssignments = []

  do {
    oldAssignments = [...assignments]
    assignments = []

    normalizedCoordinates.forEach(point => {
      let bestClusterIndex = 0
      let minDistance = Infinity

      clusterCenters.forEach((center, index) => {
        let dist = distance(point, center)
        let sizeFactor = clusters[index].length / normalizedCoordinates.length

        let adjustedDistance = dist * (1 + sizeFactor)

        if (adjustedDistance < minDistance) {
          minDistance = adjustedDistance
          bestClusterIndex = index
        }
      })

      assignments.push(bestClusterIndex)
      clusters[bestClusterIndex].push(point)
    })

    clusterCenters = clusters.map(cluster => {
      return cluster.length > 0
        ? calculateCentroid(cluster)
        : [0, 0]
    })

    clusters = new Array(numberOfClusters)
      .fill(null)
      .map(() => [])

  } while (!isStable(oldAssignments, assignments))

  normalizedCoordinates.forEach((point, i) => {
    clusters[assignments[i]].push(point)
  })

  return clusters
}

function isStable(oldAssignments, newAssignments) {
  return JSON.stringify(oldAssignments) === JSON.stringify(newAssignments)
}
