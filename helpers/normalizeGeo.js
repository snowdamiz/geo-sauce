export function normalizeGeo(coordinates) {
  return Array.isArray(coordinates[0])
    ? coordinates
    : coordinates.features.map(feature => feature.geometry.coordinates)
}