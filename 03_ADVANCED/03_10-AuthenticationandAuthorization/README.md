# React + Vite

Configuración del Backend (ficticio): Supongamos que tienes un backend ficticio que proporciona endpoints para iniciar sesión y verificar la autenticación. El backend devuelve un token JWT (JSON Web Token) cuando un usuario inicia sesión correctamente.

En este ejemplo, el componente Login se encarga de enviar las credenciales de inicio de sesión al backend y, si la autenticación es exitosa, guarda el token JWT en el estado de la aplicación. El componente App comprueba si hay un token en el estado y muestra el componente Login si no hay un token, o muestra un mensaje de bienvenida y un botón para cerrar sesión si hay un token.


C:\Users\msi\Documents\react_native\03_ADVANCED>npm create vite@latest 03_11-ViteFramework     
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
