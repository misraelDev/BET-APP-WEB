export const HOUR_FILTER_OPTIONS = [
  { value: 'all', label: 'Cualquier hora' },
  ...Array.from({ length: 24 }, (_, hour) => ({
    value: String(hour),
    label: `${String(hour).padStart(2, '0')}:00–${String(hour).padStart(2, '0')}:59`
  }))
];
