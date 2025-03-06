import React, { Suspense } from 'react'
import './App.css'

const ComponenteA = React.lazy(() => import('./Components/ComponentA'));
const ComponenteB = React.lazy(() => import('./Components/ComponentB'));
function App() {
  return (
    <div>
      <h1>App con Code Splitting</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ComponenteA />
        <ComponenteB />
      </Suspense>
    </div>
  );
};


export default App
