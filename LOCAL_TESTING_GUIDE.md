# Guía para Probar next-auth Localmente

## 📦 Instalación Completada ✅

Las dependencias ya están instaladas con Node 22.21.0

## 🧪 Métodos para Probar el Paquete Localmente

### Método 1: Ejecutar Tests (Recomendado para desarrollo)

```bash
# Ejecutar todos los tests
pnpm test

# Ejecutar tests con cobertura
pnpm test:coverage

# Ejecutar tests end-to-end
pnpm test:e2e

# Ejecutar tests en modo watch
pnpm test:e2e:watch
```

### Método 2: Construir el Paquete

```bash
# Construir todos los paquetes
pnpm build

# Construir solo next-auth y los adaptadores @auth/*
pnpm build

# Construir la aplicación de desarrollo
pnpm build:app

# Construir la documentación
pnpm build:docs
```

### Método 3: Usar el Entorno de Desarrollo

⚠️ **Importante**: La app de desarrollo requiere configuración. Si ves errores `MissingSecret`, necesitas crear el archivo `.env.local`:

```bash
# Configurar el entorno (solo la primera vez)
cd apps/dev/nextjs
cp .env.local.example .env.local

# Editar .env.local y establecer al menos:
# AUTH_SECRET=<genera uno con: openssl rand -hex 32>
```

```bash
# Iniciar el servidor de desarrollo con Next.js
pnpm dev

# O específicamente:
pnpm dev:next

# Otros entornos disponibles:
pnpm dev:sveltekit
pnpm dev:express
pnpm dev:qwik
```

### Método 4: pnpm link (Para Usar en Otro Proyecto)

Si quieres probar next-auth en otro proyecto:

```bash
# 1. En el directorio de next-auth, construye el paquete
cd /Users/rodrigosauceda/Documents/GitHub/next-auth
pnpm build

# 2. Ve al paquete específico que quieres linkear
cd packages/next-auth
pnpm link --global

# 3. En tu proyecto de prueba
cd /ruta/a/tu/proyecto
pnpm link --global next-auth

# Para desconectar cuando termines:
pnpm unlink --global next-auth
```

### Método 5: Usar directamente desde el monorepo

Puedes usar las aplicaciones de ejemplo incluidas:

```bash
# Apps de desarrollo (en apps/dev/):
cd apps/dev/nextjs
pnpm dev

# Apps de ejemplo (en apps/examples/):
cd apps/examples/nextjs
pnpm dev
```

## 🔍 Verificación de Código

Antes de probar, verifica que tu código esté limpio:

```bash
# Verificar linting
pnpm lint

# Arreglar problemas de linting automáticamente
pnpm lint:fix

# Verificar formato
pnpm format

# Arreglar formato automáticamente
pnpm format:write

# Verificar tipos TypeScript
pnpm type-check
```

## 📊 Comandos de Testing Específicos

```bash
# Test solo los paquetes modificados (basado en git)
pnpm test

# Test con UI interactiva
pnpm test:e2e:watch

# Limpiar caché y builds
pnpm clean
```

## 🎯 Probar un Adaptador Específico

Si estás trabajando en un adaptador específico:

```bash
# Ejemplo: Probar el adaptador de Prisma
cd packages/adapter-prisma
pnpm test

# O construirlo
pnpm build
```

## 🌐 Probar con una Aplicación Real

La mejor manera de probar es usar las aplicaciones de desarrollo:

1. **Next.js (Más usado)**

   ```bash
   pnpm dev:next
   # Abre http://localhost:3000
   ```

2. **Con base de datos**
   ```bash
   pnpm dev:db
   # Inicia todos los servicios necesarios incluyendo BD
   ```

## 📝 Notas Importantes

- **Turbo**: El proyecto usa Turborepo para builds incrementales y caching
- **Monorepo**: Los cambios en `packages/core` afectan todos los frameworks
- **Hot Reload**: Los cambios en desarrollo se reflejan automáticamente
- **Tests**: Solo se ejecutan los tests de paquetes modificados por defecto

## 🐛 Debugging

Si encuentras problemas:

```bash
# Limpiar todo y reinstalar
pnpm clean
rm -rf node_modules
pnpm install

# Ver logs detallados
pnpm test --verbose

# Verificar errores
pnpm lint
pnpm type-check
```

## 📦 Estructura de Paquetes

```
packages/
  next-auth/          # Paquete principal para Next.js
  core/               # Lógica central compartida
  adapter-*/          # Adaptadores de bases de datos
  frameworks-*/       # Integraciones con frameworks
```

## 🚀 Flujo de Trabajo Recomendado

1. **Hacer cambios** en el código
2. **Verificar tipos**: `pnpm type-check`
3. **Verificar linting**: `pnpm lint:fix`
4. **Ejecutar tests**: `pnpm test`
5. **Probar en dev**: `pnpm dev:next`
6. **Construir**: `pnpm build`

## 🔗 Enlaces Útiles

- Documentación: `pnpm dev:docs` → http://localhost:3001
- App de desarrollo: `pnpm dev:next` → http://localhost:3000
- Servidor de email fake: `pnpm email` (para testing de emails)

---

¡Listo para desarrollar! 🎉
