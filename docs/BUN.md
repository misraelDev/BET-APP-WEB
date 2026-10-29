# Bun en BET-APP-WEB

El proyecto usa **Bun como runtime y gestor de dependencias**. No requiere Node
ni otro gestor: Angular CLI 22 se ejecuta con Bun, que reporta una versión de
Node compatible (`v26.3.0`) y satisface el requisito del CLI.

## Requisito

- Bun `1.4+` (probado con `1.4.3`).

```powershell
bun --version
```

## Instalación de Bun

En una PowerShell normal (instala en el perfil del usuario, sin permisos de
administrador):

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Si ya está instalado, actualízalo:

```powershell
bun upgrade
```

También puedes instalarlo con winget. El ámbito `machine` requiere PowerShell
como administrador; sin `--scope machine` se instala para el usuario actual:

```powershell
winget install --id Oven-sh.Bun --accept-package-agreements --accept-source-agreements
```

## PowerShell como Administrador

La mayoría de los comandos **no** necesitan elevación. Ejecuta como
administrador solo si vas a instalar Bun para todos los usuarios o a retirar
Node del sistema.

```powershell
# 1. Opcional: Bun para todos los usuarios
winget install --id Oven-sh.Bun --scope machine --accept-package-agreements --accept-source-agreements

# 2. Opcional: quitar Node del sistema (ya no se usa en este proyecto)
winget uninstall --id OpenJS.NodeJS --accept-source-agreements

# 3. Opcional: eliminar restos de la instalación anterior de Node
Remove-Item "C:\Program Files\nodejs" -Recurse -Force -ErrorAction SilentlyContinue
```

Después de instalar o retirar algo, cierra y reabre la terminal y confirma:

```powershell
where.exe bun
bun --version
```

> Retirar Node afecta a otros proyectos de la máquina que aún lo usen. Si
> conviven proyectos con Node, omite el paso 2 y usa Bun solo aquí.

Los siguientes comandos se ejecutan en PowerShell **sin** elevación:

```powershell
bun install
bun run start
bun run build
bun run lint
```

## Puesta en marcha

```powershell
cd C:\Users\Misrael\Documents\WEBS\BET\BET-APP-WEB
bun install
bun run start
```

Abre `http://localhost:4200`.

Para una instalación reproducible (CI o despliegue):

```powershell
bun install --frozen-lockfile
```

## Scripts

`package.json` invoca Angular CLI con Bun de forma explícita:

```json
"start": "bun node_modules/@angular/cli/bin/ng.js serve",
"build": "bun node_modules/@angular/cli/bin/ng.js build",
"build-prod": "bun node_modules/@angular/cli/bin/ng.js build --configuration production --base-href /angular/free/",
"lint": "bun node_modules/@angular/cli/bin/ng.js lint"
```

| Comando | Uso |
| --- | --- |
| `bun run start` | Servidor de desarrollo en `4200`. |
| `bun run build` | Compilación de desarrollo. |
| `bun run build-prod` | Compilación de producción. |
| `bun run watch` | Compilación continua. |
| `bun run lint` | ESLint. |
| `bun run prettier` | Formatea `src`. |

El proyecto no tiene target `test` en `angular.json` ni archivos `*.spec.ts`, así
que no existe un script de pruebas.

### Por qué no se usa `bunx ng` ni el binario `ng`

En Windows, el ejecutable `ng` es un lanzador que arranca con el Node del
sistema. Si esa versión no cumple el mínimo de Angular 22, el CLI falla aunque
se invoque desde Bun. Por eso los scripts llaman directamente a
`node_modules/@angular/cli/bin/ng.js` con el runtime de Bun.

`angular.json` declara el gestor para que el CLI no intente detectar otro:

```json
"cli": {
  "packageManager": "bun"
}
```

## Verificación

```powershell
bun run ng -- version
```

Salida esperada (resumen):

```text
Angular CLI       : 22.0.0
Angular           : 22.0.0
Node.js           : 26.3.0
Package Manager   : bun 1.4.3
```

Compilación comprobada:

```powershell
bun run build
```

Genera `dist/` sin usar Node del sistema. Comprobado en este proyecto: exit `0`
y `Application bundle generation complete` en ~11 s.

Lint:

```powershell
bun run lint
```

Salida esperada: `All files pass linting.`

### ESLint con @angular-eslint 22

`@angular-eslint` 22 ya no publica configuraciones heredables
(`plugin:@angular-eslint/recommended`), por lo que `eslint.config.mjs` usa la
configuración plana del paquete `angular-eslint`:

```js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

export default tseslint.config({
  files: ['**/*.ts'],
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...angular.configs.tsRecommended],
  processor: angular.processInlineTemplates
});
```

`angular-eslint` debe permanecer en `devDependencies`; sin él, el lint falla con
`Failed to load config "plugin:@angular-eslint/recommended" to extend from`.

## CI y despliegue

GitHub Actions (`.github/workflows/prod.yml`):

```yaml
- uses: oven-sh/setup-bun@v2
  with:
    bun-version: '1.4.3'
- run: bun install --frozen-lockfile
- run: bun run build-prod
```

Netlify (`netlify.toml`):

```toml
[build]
  command = "bun run build"
  publish = "dist/browser"

[build.environment]
  BUN_VERSION = "1.4.3"
```

## Migración desde otro gestor

El repositorio conserva un único lockfile: `bun.lock`. Si aparecen lockfiles de
otros gestores (`package-lock.json`, `yarn.lock`) o `.yarnrc.yml`, elimínalos
para que no se mezclen resoluciones de dependencias:

```powershell
Remove-Item package-lock.json, yarn.lock, .yarnrc.yml -Force -ErrorAction SilentlyContinue
bun install
```

## Problemas frecuentes

| Problema | Solución |
| --- | --- |
| `configured to use 'yarn'` | Confirma `"packageManager": "bun"` dentro de `cli` en `angular.json`. |
| `could not determine executable to run` | No uses `bunx node@...`; Bun no es un gestor de versiones de Node. |
| `corrupted node_modules directory` | `bun install --force`. |
| Cambios o estilos cacheados | Borra `.angular/cache` y `dist`, y recompila. |
| `undefined is not an object (evaluating 'ajv.opts.code')` | Bun hoistea `ajv@6` (requerido por ESLint) en la raíz y `@angular-devkit/core` lo resuelve. `ajv@8.20.0` está fijado en `devDependencies` para que la raíz use la versión 8; no lo quites. |
| Puerto 4200 ocupado | `bun run start -- --port 4201`. |
| Una herramienta exige Node | Instala Node solo para esa herramienta; este proyecto no lo necesita. |
