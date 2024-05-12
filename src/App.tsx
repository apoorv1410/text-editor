import React from 'react';
import './App.css';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <div className="App p-4 editor-shell">
      <TextEditor></TextEditor>
    </div>
  );
}

export default App;
