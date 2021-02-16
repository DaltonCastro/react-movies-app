import React from 'react';

function App({ children }) {
  return (
    <main data-testid='main'>
      { children }
    </main>

  );
}

export default App;
