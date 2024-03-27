# React + Vite

En este ejemplo, React.lazy permite importar dinámicamente los componentes ComponenteA y ComponenteB, lo que significa que su código se cargará solo cuando estos componentes se utilicen en la aplicación. El componente Suspense se utiliza para mostrar un mensaje de carga (Loading...) mientras se cargan los componentes.

Es importante tener en cuenta que React.lazy solo funciona con componentes funcionales y que se debe utilizar dentro de un componente de nivel superior (como en el ejemplo anterior) debido a cómo funciona la carga dinámica de módulos en React.

Para ejecutarlo:

-npm install
-npm run dev




