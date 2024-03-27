# React + Vite

Vite es una herramienta de construcción de aplicaciones web extremadamente rápida y flexible para proyectos basados en JavaScript y TypeScript. Está diseñado para ser utilizado con frameworks modernos como React, Vue.js, y Svelte. Vite se destaca por su capacidad para proporcionar un entorno de desarrollo extremadamente rápido y eficiente, así como por su capacidad para generar código optimizado para producción.

Algunas de las ventajas de usar Vite incluyen:

Desarrollo rápido: Vite ofrece un entorno de desarrollo instantáneo que permite una experiencia de desarrollo fluida y sin problemas. Gracias a su arquitectura basada en ESM (ECMAScript Modules), Vite puede proporcionar tiempos de compilación y recarga en caliente casi instantáneos, lo que acelera significativamente el ciclo de desarrollo.

Optimización de producción: Para la construcción de aplicaciones para producción, Vite genera un código optimizado que aprovecha las características del navegador moderno, como el árbol de módulos nativo (Native ES Module Tree Shaking) y la importación bajo demanda (On-Demand Module Importing), lo que resulta en un tamaño de bundle más pequeño y un mejor rendimiento de la aplicación.

Soporte para múltiples frameworks: Vite es compatible con varios frameworks populares, como React, Vue.js y Svelte, lo que lo hace versátil y adecuado para una amplia gama de proyectos web.

HMR (Hot Module Replacement) mejorado: Vite ofrece una experiencia de recarga en caliente (HMR) mejorada, lo que significa que los cambios que realices en tu código se reflejarán de manera instantánea en la aplicación en ejecución, sin necesidad de recargar la página.

Configuración mínima: Vite requiere una configuración mínima para comenzar, lo que facilita la configuración inicial de un proyecto y reduce la complejidad de la configuración de la herramienta de construcción.

Para crear un proyecto de vite basta con tener npm instalado en la máquina:

-npm create vite@latest nombre-de-mi-app

Debes seleccionar el framework con el cual deseas trabajar entre las siguientes opciones (React en este caso) y posteriormente el lenguaje en que lo quieres trabajar:

√ Package name: ... 03-11-viteframework
? Select a framework: » - Use arrow-keys. Return to submit.
? Select a framework: » - Use arrow-keys. Return to submit.
? Select a framework: » - Use arrow-keys. Return to submit.
    Vanilla
    Vue
>   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others

√ Select a framework: » React
? Select a variant: » - Use arrow-keys. Return to submit.
    TypeScript
    TypeScript + SWC
>   JavaScript
    JavaScript + SWC
    Remix ↗

