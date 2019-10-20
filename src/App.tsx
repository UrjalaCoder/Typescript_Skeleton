import * as React from 'react';
import Counter from './components/Counter';

type Props = {
  text: string;
};


const App: React.FC<Props> = (p: Props) => {
  return (
    <div>
      <h1>{p.text}</h1>
      <Counter text="RESET ME!"/>
    </div>
  );
};

export default App;
