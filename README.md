# Botanic Web

Landing experimental y sistema visual para **Botanic Algeciras**.

Proyecto enfocado en diseño de interfaz, motion sutil y arquitectura frontend limpia, con una estética inspirada en escenarios nocturnos, glassmorphism y tipografía de marca.

---

## ✨ Concepto

Botanic Web no es una landing tradicional, sino un **stage visual**:

- Navegación flotante en las esquinas
- Logo central como elemento protagonista
- Interacciones mínimas pero precisas
- Animaciones suaves y coordinadas
- Jerarquía tipográfica clara y reutilizable

Diseñado para escalar hacia una web completa de club / eventos.

---

## 🧱 Stack tecnológico

- **Next.js 16** (App Router + Turbopack)
- **React + TypeScript**
- **Tailwind CSS v4** (tokens CSS + `@theme inline`)
- **Arquitectura basada en componentes**
- **Animaciones CSS-first** (sin librerías externas)

---

## 🎨 Design system

### Tipografía

- **Montserrat** → identidad de marca (titles, navegación)
- **Barlow Condensed** → impacto / acento
- **Geist Sans** → texto base y legibilidad

### UI & Motion

- Glass buttons con halo radial
- Hover “breathing” sutil
- Animaciones de entrada secuenciales (stagger)
- Transiciones fluidas en resize (clamp + easing)

---

## 🧩 Componentes clave

- `BrandLogo` / `BrandLogoSvg`
- `StageNav`
- `StageLink`
- `StageButton`
- `MainStage`

Todos los componentes están pensados para ser **reutilizables, declarativos y escalables**.

---

## 🚧 Estado del proyecto

🟡 **Work in progress**

Próximos pasos previstos:

- Menú mobile animado
- Secciones internas (programación, eventos, contacto)
- Mejora de accesibilidad
- Optimización de performance y SEO

---

## 🧑‍💻 Desarrollo local

```bash
npm install
npm run dev
```

Abrir en:
👉 http://localhost:3000

---

## 📌 Nota

Este proyecto forma parte de un portfolio frontend, con foco en:

- UI engineering
- Componentización real
- Diseño orientado a producto

No es una plantilla ni un ejemplo básico.

---

## 🔥 Qué estás haciendo bien (y esto es importante)

- Has eliminado el README genérico → ✅
- Estás explicando **concepto**, no solo tecnología → nivel senior
- Refleja exactamente lo que se ve en pantalla
- Sirve para recruiter **y** para cliente

Cuando quieras, en el próximo día podemos:

- Revisarlo como si fuera un **lead frontend**
- Ajustarlo aún más a **LinkedIn / portfolio**
- Añadir GIFs o screenshots más adelante

## 🎨 Referencias visuales y técnicas

Este proyecto se apoya en distintas referencias de diseño y UI engineering que sirven como inspiración y guía conceptual:

- **Gradienty**  
  Fondos con gradientes avanzados y patrones fluidos  
  👉 https://gradienty.codes/pattern-backgrounds

- **Santa Rita Supper Disco**  
  Referencia directa de layout, presencia escénica y navegación minimal  
  👉 https://santaritamalaga.es/

- **FlyonUI – Glassmorphism con Tailwind CSS**  
  Base técnica para efectos glass, blur y capas translúcidas  
  👉 https://flyonui.com/blog/glassmorphism-with-tailwind-css/

- **v0 – Liquid Glass UI template**  
  Inspiración para micro-interacciones, halos y superficies líquidas  
  👉 https://v0.app/templates/liquid-glass-2Tyr62QLwAT

> Estas referencias no se usan como plantillas directas, sino como apoyo conceptual
> para construir una identidad propia y un sistema de componentes reutilizable.
