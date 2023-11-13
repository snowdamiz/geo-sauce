import { geneticAlgorithm } from './geneticAlgorithm.js';
import { normalizeGeo } from '../helpers/normalizeGeo.js';

const defaultOptions = {
  generations: 1000,
  populationSize: 100,
  mutationRate: 0.1,
  elitismRate: 0.15,
  maxGenerationsWithoutImprovement: 200,
  showLogs: false,
  tournamentSize: 10,
}

// Optimize Route
export function optimizeRoute(coords, options = defaultOptions) {
  const normalizedCoordinates = normalizeGeo(coords)
  return geneticAlgorithm(normalizedCoordinates, options)
}