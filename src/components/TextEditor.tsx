/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {ClearEditorPlugin} from '@lexical/react/LexicalClearEditorPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {useEffect, useState} from 'react';
import {ListPlugin} from '@lexical/react/LexicalListPlugin';
import {CheckListPlugin} from '@lexical/react/LexicalCheckListPlugin';
import LexicalClickableLinkPlugin from '@lexical/react/LexicalClickableLinkPlugin';
import {HorizontalRulePlugin} from '@lexical/react/LexicalHorizontalRulePlugin';
import ImagesPlugin from './Images';
import {TablePlugin} from '@lexical/react/LexicalTablePlugin';
import TableCellActionMenu from './TableActionMenu';
import TableCellResizer from './TableCellResizer';
import Link from './Link';

import Nodes from '../nodes/Nodes';
import Toolbar from './Toobar';
import Placeholder from './Placeholder';
import FloatingLinkEditor from './FloatingLinkEditor';
import FloatingTextFormatToolbar from './FloatingTextToolbar';
import TreeView from './TreeView';
import PageBreak from './PageBreak';
import './TextEditor.css'
import PlaygroundEditorTheme from '../themes/PlaygroundEditorTheme';


const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [...Nodes],
  // Handling of errors during update
  onError(error: Error) {
    throw error;
  },
  theme: PlaygroundEditorTheme,
};

export default function App() {
  const placeHolderText = "Enter Some Rich Text!"
  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);
  const [isSmallWidthViewport, setIsSmallWidthViewport] = useState<boolean>(false);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);


  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };


  useEffect(() => {
    const updateViewPortWidth = () => {
      const isNextSmallWidthViewport =
        window.matchMedia('(max-width: 1025px)').matches;

      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        setIsSmallWidthViewport(isNextSmallWidthViewport);
      }
    };
    updateViewPortWidth();
    window.addEventListener('resize', updateViewPortWidth);

    return () => {
      window.removeEventListener('resize', updateViewPortWidth);
    };
  }, [isSmallWidthViewport]);

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <Toolbar />
        <div className="bg-white relative">
          <RichTextPlugin
            contentEditable={
              <div className="editor-scroller">
                <div className="editor py-2 px-7" ref={onRef}>
                  <ContentEditable className='h-full outline-0' />
                </div>
              </div>
            }
            placeholder={<Placeholder>{placeHolderText}</Placeholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <ListPlugin />
          <CheckListPlugin />
          <LexicalClickableLinkPlugin />
          <HorizontalRulePlugin />
          <PageBreak />
          <ImagesPlugin />
          <TableCellResizer />
          <HistoryPlugin />
          <Link />
          <AutoFocusPlugin />
          <ClearEditorPlugin />
          <TreeView />
          <TablePlugin />
          {floatingAnchorElem && !isSmallWidthViewport && (
              <>
                <TableCellActionMenu
                  anchorElem={floatingAnchorElem}
                  cellMerge={true}
                />
                <FloatingLinkEditor
                  anchorElem={floatingAnchorElem}
                  isLinkEditMode={isLinkEditMode}
                  setIsLinkEditMode={setIsLinkEditMode}
                />
                <FloatingTextFormatToolbar
                  anchorElem={floatingAnchorElem}
                  setIsLinkEditMode={setIsLinkEditMode}
                />
              </>
            )}
        </div>
      </div>
    </LexicalComposer>
  );
}
