import { calculateCentroid, computeRadialDistance } from '../helpers/geometry.js'
import { chunkArray } from '../helpers/arrayManipulation.js'
import { normalizeGeo } from '../helpers/normalizeGeo.js'

// RKM clustering
export function radialKMeansClustering(coords, numClusters = 8) {
  const normalizedCoordinates = normalizeGeo(coords)

  const centroid = calculateCentroid(normalizedCoordinates)

  const coordsWithRadialDist = normalizedCoordinates.map(coord => ({
    coord,
    radialDistance: computeRadialDistance(centroid, coord)
  }))

  const sortedCoordsWithRadialDist = coordsWithRadialDist.sort((a, b) => a.radialDistance - b.radialDistance)
  const sortedCoords = sortedCoordsWithRadialDist.map(item => item.coord)

  const clusterSize = Math.ceil(normalizedCoordinates.length / numClusters)
  const clusters = chunkArray(sortedCoords, clusterSize)

  return clusters
}