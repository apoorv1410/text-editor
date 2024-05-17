import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

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

test('renders learn react link', () => {
  render(
  <App
    showToolbar={options.showToolbar}
    showFloatingToolbar={options.showFloatingToolbar}
    showInsertDropDown={options.showInsertDropDown}
    showUndoRedoButtons={options.showUndoRedoButtons}
    showFontFamilyOptions={options.showFontFamilyOptions}
    showTreeView={options.showTreeView}
  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
