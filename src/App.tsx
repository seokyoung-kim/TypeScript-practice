import React from 'react';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  }

  return (
    // <Greetings name="mark" mark="?" onClick={onClick} />
    <Counter />
  );
}

export default App;
