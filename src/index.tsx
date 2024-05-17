import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type Options = {
  showToolbar: Boolean,
  showFloatingToolbar: Boolean,
  showInsertDropDown: Boolean,
  showUndoRedoButtons: Boolean,
  showFontFamilyOptions: Boolean,
  showTreeView: Boolean
}

const options: Options = {
    showToolbar: true,
    showFloatingToolbar: true,
    showInsertDropDown: true,
    showUndoRedoButtons: true,
    showFontFamilyOptions: true,
    showTreeView: true
}
root.render(
  <React.StrictMode>
    <App
      showToolbar={options.showToolbar}
      showFloatingToolbar={options.showFloatingToolbar}
      showInsertDropDown={options.showInsertDropDown}
      showUndoRedoButtons={options.showUndoRedoButtons}
      showFontFamilyOptions={options.showFontFamilyOptions}
      showTreeView={options.showTreeView}
    />
  </React.StrictMode>
);

export { default as TextEditor } from './App';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
