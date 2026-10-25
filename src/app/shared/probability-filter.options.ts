export const PROBABILITY_FILTER_OPTIONS = [0, 50, 55, 60, 65, 70, 75, 80].map((value) => ({
  value,
  label: value ? `≥ ${value}%` : 'Cualquier porcentaje'
}));
