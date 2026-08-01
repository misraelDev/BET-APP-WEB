# Convención de commits de BET Analytics Web

Este documento define cómo registrar cambios en el frontend Angular de BET Analytics. El objetivo es mantener un historial claro, revisable y útil para entender la evolución del dashboard deportivo.

## Regla principal

Cada commit debe:

- Representar un solo cambio lógico.
- Estar escrito en español.
- Utilizar Conventional Commits.
- Explicar por qué se realizó y para qué sirve.
- Evitar trailers automáticos no solicitados.

Los comandos Git no deben ejecutarse automáticamente. El desarrollador revisará y ejecutará los comandos manualmente.

## Formato obligatorio

```text
<tipo>(<ámbito>): <título breve>

por qué: <problema, necesidad o contexto>
para qué: <resultado o beneficio esperado>
```

Ejemplo:

```powershell
git commit -m "feat(tenis): agregar filtro por probabilidad" `
  -m "por qué: la tabla mostraba todas las señales sin un umbral configurable" `
  -m "para qué: permitir consultar mercados con una probabilidad mínima"
```

## Tipos permitidos

| Tipo | Uso |
| --- | --- |
| `feat` | Nueva funcionalidad visible o capacidad nueva |
| `fix` | Corrección de un error |
| `docs` | Documentación |
| `style` | Formato visual o de código sin cambiar lógica |
| `refactor` | Reorganización interna sin cambiar comportamiento |
| `perf` | Mejora de rendimiento |
| `test` | Pruebas nuevas o corregidas |
| `chore` | Mantenimiento interno |
| `ci` | Integración o despliegue continuo |
| `build` | Build, dependencias o configuración de compilación |

## Ámbitos del proyecto

Utiliza el ámbito que mejor identifique el módulo afectado:

| Ámbito | Contenido |
| --- | --- |
| `beisbol` | Feature de béisbol |
| `futbol` | Feature de fútbol |
| `tenis` | Feature de tenis |
| `basquetbol` | Feature de básquetbol |
| `dashboard` | Resumen, estadísticas y gráficas |
| `layout` | Sidebar, topbar, breadcrumb y shell |
| `ui` | Componentes visuales compartidos |
| `api` | Servicios HTTP y contratos con FastAPI |
| `modelos` | Interfaces y tipos TypeScript |
| `rutas` | Router y navegación |
| `config` | Environments y configuración general |
| `deps` | Dependencias de npm |
| `docs` | README y documentación del repositorio |

## Reglas de redacción

1. Escribir el título en imperativo: `agregar`, `corregir`, `eliminar`, `actualizar`.
2. Limitar el título a 72 caracteres.
3. No terminar el título con punto.
4. Usar minúsculas en tipo y ámbito.
5. Incluir siempre `por qué` y `para qué`.
6. No mezclar frontend, documentación y dependencias sin una razón técnica inseparable.
7. No usar mensajes genéricos como `cambios`, `actualización`, `fix` o `WIP`.
8. No incluir secretos, credenciales ni contenido generado de `dist`, `.angular` u `out-tsc`.

## Commits atómicos

Un commit debe poder revisarse y revertirse sin afectar funcionalidades independientes.

Ejemplo de separación correcta:

1. Componente reutilizable de selector.
2. Integración del selector en tenis.
3. Documentación de los filtros.

No debe hacerse un único commit que mezcle:

- Una nueva feature deportiva.
- Un rediseño completo del layout.
- Una actualización de dependencias.
- Cambios de documentación no relacionados.

## Ejemplos del proyecto

### Nueva funcionalidad

```powershell
git add src/app/features/basketball
git commit -m "feat(basquetbol): agregar vistas de predicciones" `
  -m "por qué: el frontend no permitía operar predicciones de básquetbol" `
  -m "para qué: generar, consultar y actualizar resultados desde Angular"
```

### Corrección de error

```powershell
git add src/app/features/tennis
git commit -m "fix(tenis): evitar registros duplicados en la tabla" `
  -m "por qué: una misma identidad podía mostrarse más de una vez" `
  -m "para qué: mantener resultados únicos y una paginación consistente"
```

### Componente compartido

```powershell
git add src/app/components/ui/market-status
git commit -m "refactor(ui): reutilizar estados de mercados" `
  -m "por qué: cada deporte representaba los resultados de forma distinta" `
  -m "para qué: unificar estados ganados, perdidos, push y pendientes"
```

### Environment

```powershell
git add src/environments
git commit -m "config(api): actualizar URL del backend de producción" `
  -m "por qué: el frontend debía conectarse al dominio público de FastAPI" `
  -m "para qué: habilitar las peticiones HTTP en el despliegue productivo"
```

### Documentación

```powershell
git add README.md COMMITS.md
git commit -m "docs(proyecto): documentar instalación y contribución" `
  -m "por qué: la documentación anterior describía la plantilla original" `
  -m "para qué: facilitar el desarrollo y mantenimiento de BET Analytics"
```

## Flujo recomendado

### 1. Revisar cambios

```powershell
git status
git diff
```

### 2. Validar el proyecto

```powershell
npm run lint
npm test
npm run build
```

Si la versión global de Node no es compatible con Angular 22:

```powershell
npx -y node@24.15.0 node_modules\@angular\cli\bin\ng.js build
```

### 3. Agregar únicamente los archivos del cambio

```powershell
git add <archivos-relacionados>
```

Evita `git add .` cuando existan cambios de varias funcionalidades.

### 4. Crear el commit

```powershell
git commit -m "tipo(ámbito): título" `
  -m "por qué: motivo" `
  -m "para qué: objetivo"
```

### 5. Revisar el commit

```powershell
git show --stat
git log -1 --format=full
```

### 6. Subir la rama de trabajo

```powershell
git push origin <nombre-rama>
```

No se define una rama fija en esta guía. Deben respetarse las reglas de protección configuradas en el repositorio remoto y utilizar Pull Requests para ramas protegidas.

## Cambios incompatibles

Si un cambio rompe un contrato utilizado por el backend o modifica una ruta pública, debe declararse:

```powershell
git commit -m "feat(api): cambiar contrato de predicciones" `
  -m "por qué: los mercados necesitaban una estructura uniforme" `
  -m "para qué: simplificar el consumo dinámico desde las tablas" `
  -m "BREAKING CHANGE: cambia la estructura de markets en la respuesta"
```

## Codificación UTF-8 en Windows

Para conservar correctamente los acentos:

```powershell
git config --global core.quotepath false
git config --global i18n.commitencoding utf-8
git config --global i18n.logoutputencoding utf-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$env:LANG = "es_ES.UTF-8"
```

Verificación:

```powershell
git config --global --get i18n.commitencoding
git config --global --get i18n.logoutputencoding
```

## Archivos generados

No incluir manualmente en commits:

```text
node_modules/
dist/
.angular/
out-tsc/
*.log
```

Estos elementos deben permanecer en `.gitignore`.

## Lista de comprobación

Antes de crear un commit confirma:

- [ ] El cambio tiene un único objetivo.
- [ ] El título está en español y en imperativo.
- [ ] El título no supera 72 caracteres.
- [ ] Se incluyeron `por qué` y `para qué`.
- [ ] No hay credenciales ni archivos generados.
- [ ] Los archivos agregados pertenecen al mismo cambio.
- [ ] El proyecto fue validado.
- [ ] La rama de destino es correcta.

Un buen commit debe responder claramente: qué cambió, por qué cambió y para qué sirve.
