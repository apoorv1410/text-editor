/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';

import Nodes from '../nodes/Nodes';
import Toolbar from './Toobar';
import TreeView from './TreeView';
import PageBreak from './PageBreak';
import './TextEditor.css'

// function to show the placeholder text in empty editor
function Placeholder() {
  return <div className="editor-placeholder text-slate-400">Enter some rich text...</div>;
}

const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [...Nodes],
  // Handling of errors during update
  onError(error: Error) {
    throw error;
  }
};

export default function App() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <Toolbar />
        <div className="bg-white relative">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input py-4 px-2 outline-none" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <PageBreak />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <TreeView />
        </div>
      </div>
    </LexicalComposer>
  );
}
