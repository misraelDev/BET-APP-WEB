import { environment } from 'src/environments/environment';

type ApiError = { status?: number; error?: { detail?: string } };

export function apiErrorMessage(error: unknown, fallback: string): string {
  const apiError = (error ?? {}) as ApiError;
  if (apiError.status === 0) {
    const target = environment.apiUrl || 'el servidor configurado';
    return `No fue posible conectar con el backend en ${target}. Verifica CORS y el despliegue.`;
  }
  return apiError.error?.detail || fallback;
}
