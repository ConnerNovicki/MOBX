import React, { useState } from 'react'
import { useRootData } from './useStore';
import { observer } from 'mobx-react-lite';

const MainView: React.FC = () => {
  const [city, setCity] = useState();
  const { allCities, removeCity, addCity } = useRootData(store => store);

  return (
    <div>
      {allCities.map(c => <div>{c}</div>)}
      <button onClick={removeCity}>remove</button>
      <input value={city} onChange={e => setCity(e.target.value)} />
      <button onClick={() => addCity}>add</button>
    </div>
  )
}

export default observer(MainView);
