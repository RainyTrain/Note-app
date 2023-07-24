import { useState } from 'react';
import cls from './app.module.scss';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>('');

  return (
    <div className="app">
      <h1 className={cls.test}>HELLO</h1>
      <div className="div">yo</div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <input value={input} onChange={(event: any) => setInput(event.target.value)} />
    </div>
  );
};

export default App;
