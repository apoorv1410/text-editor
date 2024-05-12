/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {Klass, LexicalNode} from 'lexical';

import {CodeHighlightNode, CodeNode} from '@lexical/code';
import {HashtagNode} from '@lexical/hashtag';
import {AutoLinkNode, LinkNode} from '@lexical/link';
import {ListItemNode, ListNode} from '@lexical/list';
import {MarkNode} from '@lexical/mark';
import {HorizontalRuleNode} from '@lexical/react/LexicalHorizontalRuleNode';
import {HeadingNode, QuoteNode} from '@lexical/rich-text';
import {TableCellNode, TableNode, TableRowNode} from '@lexical/table';
import {ImageNode} from './ImageNode';

const PlaygroundNodes: Array<Klass<LexicalNode>> = [
    CodeHighlightNode,
    HashtagNode,
    AutoLinkNode,
    LinkNode,
    HeadingNode,
    ListNode,
    MarkNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    HorizontalRuleNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    ImageNode
];

export default PlaygroundNodes;