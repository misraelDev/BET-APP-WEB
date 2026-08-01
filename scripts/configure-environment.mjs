import { writeFile } from 'node:fs/promises';

const rawApiUrl = process.env.API_URL?.trim();

if (!rawApiUrl) {
  console.log('[environment] API_URL no definida; se conserva environment.prod.ts');
  process.exit(0);
}

let apiUrl;
try {
  const parsed = new URL(rawApiUrl);
  if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('Protocolo no válido');
  apiUrl = rawApiUrl.replace(/\/+$/, '');
} catch {
  throw new Error('API_URL debe ser una URL HTTP o HTTPS válida');
}

const source = `import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiUrl: ${JSON.stringify(apiUrl)}
};
`;

await writeFile(new URL('../src/environments/environment.prod.ts', import.meta.url), source, 'utf8');
console.log(`[environment] API_URL de producción configurada: ${apiUrl}`);
