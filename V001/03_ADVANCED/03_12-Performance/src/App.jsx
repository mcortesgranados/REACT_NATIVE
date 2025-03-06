import './App.css'

// Componente funcional que muestra un elemento de la lista
const ListItem = ({ item }) => {
  console.log(`Renderizando ListItem para ${item.id}`);
  return <li>{item.name}</li>;
};

// Memoizamos el componente ListItem para evitar re-renderizaciones innecesarias
const MemoizedListItem = React.memo(ListItem);

// Componente funcional que muestra una lista de elementos
const ItemList = ({ items }) => {
  console.log('Renderizando ItemList');
  return (
    <ul>
      {items.map(item => (
        <MemoizedListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

// App de ejemplo con una lista de elementos
const App = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return <ItemList items={items} />;
};

export default App;