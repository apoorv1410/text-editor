import './App.css';
import TextEditor from './components/TextEditor';

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

function App() {
  return (
    <div className="App p-4 editor-shell">
      <TextEditor
        showToolbar={options.showToolbar}
        showFloatingToolbar={options.showFloatingToolbar}
        showInsertDropDown={options.showInsertDropDown}
        showUndoRedoButtons={options.showUndoRedoButtons}
        showFontFamilyOptions={options.showFontFamilyOptions}
        showTreeView={options.showTreeView}
      ></TextEditor>
    </div>
  );
}

export default App;
