import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
  <div>
    <Counter startAt ={6}/>
    <Counter />
    <Counter />
  </div>  
  )
}

export default App;
