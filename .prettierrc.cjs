/**
 * Configuración de Prettier para BOTANIC STAGE
 * Formato coherente para Next.js + TypeScript + Tailwind CSS v4
 * Prioridad: mínimo número de líneas, máxima compactación horizontal
 */
module.exports = {
  // Ancho de línea: 180 caracteres (maximiza uso horizontal)
  printWidth: 180,

  // Tabulación: 2 espacios (estándar React/Next.js)
  tabWidth: 2,
  useTabs: false,

  // Punto y coma: siempre (más explícito, evita edge cases)
  semi: true,

  // Comillas: simples (más limpio en JSX/React)
  singleQuote: true,

  // Comillas en propiedades de objetos: solo cuando sea necesario
  quoteProps: 'as-needed',

  // Comillas en JSX: dobles (estándar HTML)
  jsxSingleQuote: false,

  // Trailing commas: ES5 (objetos y arrays, no en funciones)
  trailingComma: 'es5',

  // Espacios en objetos: { foo: bar }
  bracketSpacing: true,

  // Bracket en JSX: en la misma línea (reduce líneas)
  bracketSameLine: true,

  // Arrow functions: sin paréntesis cuando sea posible (más compacto)
  arrowParens: 'avoid',

  // Atributos en JSX: mantener en línea cuando quepan (evita saltos verticales)
  singleAttributePerLine: false,

  // Fin de línea: LF (Unix/macOS)
  endOfLine: 'lf',

  // Plugins: ordenar clases de Tailwind automáticamente
  plugins: ['prettier-plugin-tailwindcss'],
};
