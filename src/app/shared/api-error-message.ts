import { environment } from 'src/environments/environment';

export function apiErrorMessage(error: any, fallback: string): string {
  if (error?.status === 0) {
    const target = environment.apiUrl || 'el servidor configurado';
    return `No fue posible conectar con el backend en ${target}. Verifica CORS y el despliegue.`;
  }
  return error?.error?.detail || fallback;
}
