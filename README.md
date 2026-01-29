# Botanic Web

Sistema visual y frontend para Botanic Algeciras.

Proyecto enfocado en UI engineering, arquitectura frontend limpia y diseño orientado a producto, con una estética nocturna, elegante y controlada.

No es una landing tradicional: es una base sólida para una web completa de club / music bar / eventos.

## ✨ Concepto

Botanic Web se construye como un sistema de experiencia, no como páginas aisladas:

- Home con presencia escénica y navegación propia
- Layout independiente para páginas internas
- Menú overlay reutilizable en todo el site
- Jerarquía clara entre contenido, navegación y marca
- Diseño mobile-first con refinamiento en desktop

La Home actúa como escenario principal, mientras que el resto de páginas comparten una estructura clara y consistente.

## 🧱 Stack tecnológico

- **Next.js 16** (App Router)
- **React + TypeScript**
- **Tailwind CSS v4** (tokens vía CSS, @theme)
- **Arquitectura por dominio de página**
- **Data centralizada** para navegación y metadata
- **CSS-first** (sin librerías de animación externas)

## 🗂️ Arquitectura del proyecto

El proyecto prioriza claridad y mantenibilidad frente a reutilización prematura.

### Routing y layouts

- **(home)** → layout exclusivo para la página de inicio
- **(site)** → layout compartido para el resto de páginas
- Route groups usados solo para organización, sin afectar URLs

Cada layout representa una decisión de experiencia, no una abstracción técnica.

### Componentes

Los componentes se organizan por dominio real de uso:

- `components/home` → componentes exclusivos de la Home
- `components/navigation` → navegación global y menú overlay
- `components/brand` → identidad visual
- `components/icons` → SVGs como componentes
- `components/actions` → CTAs y acciones transversales

Si un componente solo se usa en una página, vive en el dominio de esa página.

### Data como fuente única de verdad

Toda la información estructural del site vive en `src/data`:

- Navegación
- Páginas (títulos, descripciones)
- Redes sociales
- Nombre del site y branding textual

Las páginas y layouts no contienen strings editoriales ni SEO hardcodeadas.

## 🧠 Metadata y SEO

- Todas las metadatas se definen en `src/data`
- `generateMetadata` es compartido y declarativo
- Las páginas solo declaran qué sección son
- Preparado para escalar a OpenGraph, i18n o CMS

## 🎨 Diseño y UI

### Tipografía

- **Montserrat** → identidad de marca (navegación, títulos)
- **Barlow Condensed** → acento y presencia
- **Geist Sans** → texto base y legibilidad

### UI

- Estética oscura y sobria
- Glassmorphism controlado
- Micro-interacciones sutiles
- Hover y focus coherentes en todo el sistema
- Ritmo vertical y espaciado consistente

## 🚧 Estado del proyecto

🟡 Work in progress, con la base estructural ya cerrada.

Próximos pasos:

- Construcción de páginas internas (Programación, Noticias, Contacto)
- Motion y transiciones entre layouts
- Revisión SEO fina
- Accesibilidad básica
- Performance y refinamiento final

## 🧑‍💻 Desarrollo local

```bash
npm install
npm run dev
```

Abrir en:
👉 http://localhost:3000

## 📌 Nota

Este proyecto forma parte de un portfolio frontend, con foco en:

- Arquitectura de componentes
- UI engineering
- Decisiones de diseño orientadas a producto
- Código mantenible y escalable

No es una plantilla ni un ejemplo básico.

## 🎨 Referencias

Inspiración conceptual y técnica (no plantillas):

- **Santa Rita Supper Disco**  
  https://santaritamalaga.es/

- **Gradienty**  
  https://gradienty.codes/pattern-backgrounds

- **FlyonUI – Glassmorphism**  
  https://flyonui.com/blog/glassmorphism-with-tailwind-css/

- **v0 – Liquid Glass UI**  
  https://v0.app/templates/liquid-glass-2Tyr62QLwAT

> Estas referencias no se usan como plantillas directas, sino como apoyo conceptual
> para construir una identidad propia y un sistema de componentes reutilizable.
