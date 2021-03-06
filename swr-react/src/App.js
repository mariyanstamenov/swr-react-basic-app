import React from 'react';
import useSWR, { mutate } from 'swr';
import JokeComponent from './Components/JokeComponent';

const App = () => {
  const jokeFetcher = () => {
    mutate(randomJokePath);
  };

  const randomJokePath = 'jokes/random';
  const { data, error } = useSWR(randomJokePath);
  if (error) return <div>Something went wrong..</div>;

  return (
    <div className="App">
      <button onClick={jokeFetcher}>Change Jokes</button>
      <JokeComponent joke={data} />
    </div>
  );
}

export default App;
