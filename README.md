# BET Analytics Web

Frontend Angular para consultar, generar y actualizar predicciones deportivas. La aplicación consume el backend FastAPI de BET Analytics y presenta probabilidades, mercados, estados y balances históricos.

## Deportes disponibles

- Fútbol
- Béisbol
- Tenis
- Básquetbol

Cada deporte dispone de vistas para:

- Generar y guardar predicciones.
- Consultar predicciones almacenadas.
- Actualizar resultados finalizados.

## Tecnologías

- Angular 22
- TypeScript 6
- Tailwind CSS 4
- RxJS
- Lucide Angular
- ApexCharts
- Bun 1.4+

## Requisitos

- Bun `1.4+` (runtime y gestor de dependencias)
- Backend FastAPI ejecutándose en `http://127.0.0.1:8000`

Comprueba la versión instalada:

```powershell
bun --version
```

Guía de instalación, migración y ejecución: [Bun en BET-APP-WEB](docs/BUN.md).

## Instalación

Desde la carpeta del frontend:

```powershell
cd C:\Users\misra\Documents\BET\BET-APP-WEB
bun install
```

## Ejecución local

Primero inicia el backend en otra terminal:

```powershell
cd C:\Users\misra\Documents\BET\football_api
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Después inicia Angular:

```powershell
cd C:\Users\misra\Documents\BET\BET-APP-WEB
bun run start
```

Abre:

```text
http://localhost:4200
```

Documentación interactiva del backend:

```text
http://127.0.0.1:8000/docs
```

## Environments

Los environments indican a Angular dónde se encuentra el backend.

### Desarrollo

Archivo: `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000'
};
```

Se utiliza con `bun run start`.

### Producción

Archivo: `src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  apiUrl: ''
};
```

Un `apiUrl` vacío genera peticiones relativas como `/api/v1/tennis/results`. Esta configuración es adecuada cuando frontend y backend se publican bajo el mismo dominio mediante un proxy.

Si el backend está en otro dominio, configura su URL pública:

```typescript
apiUrl: 'https://api.ejemplo.com'
```

En Netlify no es necesario editar el archivo. Configura esta variable:

```text
API_URL=https://tu-backend-publico.com
```

El script `prebuild` ejecuta `scripts/configure-environment.mjs` y escribe la URL en `environment.prod.ts` antes de compilar. Si `API_URL` no está definida, conserva el valor existente del archivo.

No guardes contraseñas, claves privadas ni credenciales de MongoDB en los environments. Su contenido queda visible en el JavaScript del navegador.

## Rutas principales

| Deporte | Generar | Consultar | Actualizar |
| --- | --- | --- | --- |
| Béisbol | `/sports/baseball/generate` | `/sports/baseball/results` | `/sports/baseball/update` |
| Fútbol | `/sports/football/generate` | `/sports/football/results` | `/sports/football/update` |
| Tenis | `/sports/tennis/generate` | `/sports/tennis/results` | `/sports/tennis/update` |
| Básquetbol | `/sports/basketball/generate` | `/sports/basketball/results` | `/sports/basketball/update` |

## Flujo de datos

1. Un componente Angular solicita una operación al servicio de su deporte.
2. El servicio usa `HttpClient` para consumir `environment.apiUrl`.
3. FastAPI obtiene información pública, ejecuta el modelo predictivo y persiste los resultados en MongoDB.
4. Angular recibe la respuesta y actualiza tablas, probabilidades, estados y paginación.

Ejemplo del servicio de básquetbol:

```typescript
private readonly baseUrl = `${environment.apiUrl}/api/v1/nba`;
```

## Estructura relevante

```text
src/
├── app/
│   ├── components/
│   │   ├── layout/          # Sidebar, topbar, breadcrumb y shell
│   │   └── ui/              # Select, paginación, estados y probabilidades
│   ├── features/
│   │   ├── baseball/
│   │   ├── basketball/
│   │   ├── football/
│   │   └── tennis/
│   ├── shared/              # Modelos y opciones reutilizables
│   └── app-routing.module.ts
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
└── styles.css
```

Cada feature contiene normalmente:

```text
deporte.component.ts       # Estado y comportamiento de la pantalla
deporte.component.html     # Interfaz
deporte-api.service.ts     # Peticiones HTTP
deporte.models.ts          # Contratos TypeScript
```

## Scripts

```powershell
bun run start          # Servidor de desarrollo
bun run build          # Compilación
bun run build-prod     # Compilación con configuración de producción del template
bun run watch          # Compilación continua
bun run lint           # ESLint
bun run prettier       # Formatea src
```

## Compilación de producción

```powershell
bun run build
```

El resultado se genera en:

```text
dist/
```

Las carpetas `.angular`, `dist` y `out-tsc` contienen archivos generados. No deben editarse manualmente.

## Solución de problemas

### El backend no está disponible

Comprueba:

```text
http://127.0.0.1:8000/health
```

Si no responde, inicia Uvicorn antes de usar el frontend.

### Angular no refleja los cambios

Detén `ng serve` con `Ctrl+C`, vuelve a iniciarlo y realiza una recarga forzada del navegador con `Ctrl+F5`.

### Bun no está instalado o está desactualizado

Verifica con `bun --version`. Si falta o es anterior a `1.4`, sigue la guía
[Bun en BET-APP-WEB](docs/BUN.md).

### El puerto 4200 está ocupado

Usa otro puerto:

```powershell
bun run start -- --port 4201
```

## Licencia

La interfaz partió de Mantis Free Angular Admin Template, distribuida bajo licencia MIT, y fue adaptada para BET Analytics.
