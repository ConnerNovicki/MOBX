import React from 'react';
import './App.css';
import StoreProvider from './context';
import Main from './Main';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <Main />
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
