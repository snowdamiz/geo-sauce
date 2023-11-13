import { normalizeGeo } from './normalizeGeo.js'

// Get the distance between two points
export function distance(point1, point2) {
  const [x1, y1] = point1
  const [x2, y2] = point2
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

// Get most center coordinate
export function calculateCentroid(coords) {
  const normalizedCoordinates = normalizeGeo(coords)

  const sum = normalizedCoordinates.reduce((acc, [x, y]) => [acc[0] + x, acc[1] + y], [0, 0])
  return [sum[0] / normalizedCoordinates.length, sum[1] / normalizedCoordinates.length]
}

// Get the radial distance
export function computeRadialDistance(centroid, [x, y]) {
  const [cx, cy] = centroid
  return Math.atan2(y - cy, x - cx)
}

// Get the furthest pair of coordinates
export function getFurthestPair(coordinates) {
  let maxDist = 0
  let pair = [coordinates[0], coordinates[1]]

  for (let i = 0; i < coordinates.length; i++) {
    for (let j = i + 1; j < coordinates.length; j++) {
      const dist = distance(coordinates[i], coordinates[j])

      if (dist > maxDist) {
        maxDist = dist
        pair = [coordinates[i], coordinates[j]]
      }
    }
  }

  return pair
}

export function routeDistance(route) {
  let total = 0

  for (let i = 1; i < route.length; i++) {
    total += distance(route[i - 1], route[i])
  }

  return total
}

export function nearestNeighborRoute(startCoord, coordinates) {
  const route = [startCoord]
  let remainingCoords = coordinates.filter(coord => coord[0] !== startCoord[0] || coord[1] !== startCoord[1])

  while (remainingCoords.length > 0) {
    const lastCoord = route[route.length - 1]
    const nearestCoord = findNearest(lastCoord, remainingCoords)
    route.push(nearestCoord)
    remainingCoords = remainingCoords.filter(coord => coord[0] !== nearestCoord[0] || coord[1] !== nearestCoord[1])
  }

  return route
}

function findNearest(coord, remainingCoords) {
  let nearest = remainingCoords[0]
  let minDist = distance(coord, nearest)

  for (let i = 1; i < remainingCoords.length; i++) {
    const currentDist = distance(coord, remainingCoords[i])

    if (currentDist < minDist) {
      minDist = currentDist
      nearest = remainingCoords[i]
    }
  }

  return nearest
}