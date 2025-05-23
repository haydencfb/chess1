import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ChessBoard from './chessBoard';

function App() {

  return (
    <>
      <div>
        <h1 className="h1">Welcome to Chess!</h1>
        <ChessBoard />
      </div>
    </>
  );
}

export default App;
