import { s as styleInject, L as LexicalComposerContext, c as createLexicalComposerContext, j as jsxRuntimeExports, C as ContentEditable, _ as __assign, a as calculateZoomLevel, u as useLexicalNodeSelection, b as useLexicalComposerContext, $ as $isNodeSelection, d as $getSelection, e as $getNodeByKey, f as $isImageNode, g as $setSelection, h as $isRangeSelection, m as mergeRegister, S as SELECTION_CHANGE_COMMAND, i as COMMAND_PRIORITY_LOW, k as CLICK_COMMAND, D as DRAGSTART_COMMAND, K as KEY_DELETE_COMMAND, l as KEY_BACKSPACE_COMMAND, n as KEY_ENTER_COMMAND, o as KEY_ESCAPE_COMMAND, A as AutoFocusPlugin, p as LinkPlugin, R as RichTextPlugin, P as Placeholder, q as LexicalErrorBoundary, r as createCommand } from './index-R66-M8SE.js';
import * as React from 'react';
import { createContext, useContext, useRef, useMemo, useEffect, useState, useCallback, Suspense } from 'react';
import 'react-dom';

var css_248z$1 = ".ImageNode__contentEditable{border:0;caret-color:#050505;cursor:text;display:block;font-size:12px;min-height:20px;outline:0;padding:10px;position:relative;resize:none;-webkit-user-select:text;user-select:text;white-space:pre-wrap;width:calc(100% - 20px);word-break:break-word}.ImageNode__placeholder{color:#888;display:inline-block;font-size:12px;left:10px;overflow:hidden;pointer-events:none;position:absolute;text-overflow:ellipsis;top:10px;-webkit-user-select:none;user-select:none;white-space:nowrap}.image-control-wrapper--resizing{touch-action:none}";
styleInject(css_248z$1);

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const entries = [['Cat', 'rgb(125, 50, 0)'], ['Dog', 'rgb(100, 0, 0)'], ['Rabbit', 'rgb(150, 0, 0)'], ['Frog', 'rgb(200, 0, 0)'], ['Fox', 'rgb(200, 75, 0)'], ['Hedgehog', 'rgb(0, 75, 0)'], ['Pigeon', 'rgb(0, 125, 0)'], ['Squirrel', 'rgb(75, 100, 0)'], ['Bear', 'rgb(125, 100, 0)'], ['Tiger', 'rgb(0, 0, 150)'], ['Leopard', 'rgb(0, 0, 200)'], ['Zebra', 'rgb(0, 0, 250)'], ['Wolf', 'rgb(0, 100, 150)'], ['Owl', 'rgb(0, 100, 100)'], ['Gull', 'rgb(100, 0, 100)'], ['Squid', 'rgb(150, 0, 150)']];
const randomEntry = entries[Math.floor(Math.random() * entries.length)];
const CollaborationContext = /*#__PURE__*/createContext({
  clientID: 0,
  color: randomEntry[1],
  isCollabActive: false,
  name: randomEntry[0],
  yjsDocMap: new Map()
});
function useCollaborationContext$1(username, color) {
  const collabContext = useContext(CollaborationContext);
  if (username != null) {
    collabContext.name = username;
  }
  if (color != null) {
    collabContext.color = color;
  }
  return collabContext;
}

var modDev$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CollaborationContext: CollaborationContext,
  useCollaborationContext: useCollaborationContext$1
});

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const o=[["Cat","rgb(125, 50, 0)"],["Dog","rgb(100, 0, 0)"],["Rabbit","rgb(150, 0, 0)"],["Frog","rgb(200, 0, 0)"],["Fox","rgb(200, 75, 0)"],["Hedgehog","rgb(0, 75, 0)"],["Pigeon","rgb(0, 125, 0)"],["Squirrel","rgb(75, 100, 0)"],["Bear","rgb(125, 100, 0)"],["Tiger","rgb(0, 0, 150)"],["Leopard","rgb(0, 0, 200)"],["Zebra","rgb(0, 0, 250)"],["Wolf","rgb(0, 100, 150)"],["Owl","rgb(0, 100, 100)"],["Gull","rgb(100, 0, 100)"],["Squid","rgb(150, 0, 150)"]],b=o[Math.floor(Math.random()*o.length)],e=createContext({clientID:0,color:b[1],isCollabActive:!1,name:b[0],yjsDocMap:new Map});function l(r,o){const b=useContext(e);return null!=r&&(b.name=r),null!=o&&(b.color=o),b}

var modProd$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CollaborationContext: e,
  useCollaborationContext: l
});

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const mod$1 = process.env.NODE_ENV === 'development' ? modDev$1 : modProd$1;
const useCollaborationContext = mod$1.useCollaborationContext;

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function getTransformSetFromKlass(klass) {
  const transform = klass.transform();
  return transform !== null ? new Set([transform]) : new Set();
}
function LexicalNestedComposer$1({
  initialEditor,
  children,
  initialNodes,
  initialTheme,
  skipCollabChecks
}) {
  const wasCollabPreviouslyReadyRef = useRef(false);
  const parentContext = useContext(LexicalComposerContext);
  if (parentContext == null) {
    {
      throw Error(`Unexpected parent context null on a nested composer`);
    }
  }
  const [parentEditor, {
    getTheme: getParentTheme
  }] = parentContext;
  const composerContext = useMemo(() => {
    const composerTheme = initialTheme || getParentTheme() || undefined;
    const context = createLexicalComposerContext(parentContext, composerTheme);
    if (composerTheme !== undefined) {
      initialEditor._config.theme = composerTheme;
    }
    initialEditor._parentEditor = parentEditor;
    if (!initialNodes) {
      const parentNodes = initialEditor._nodes = new Map(parentEditor._nodes);
      for (const [type, entry] of parentNodes) {
        initialEditor._nodes.set(type, {
          exportDOM: entry.exportDOM,
          klass: entry.klass,
          replace: entry.replace,
          replaceWithKlass: entry.replaceWithKlass,
          transforms: getTransformSetFromKlass(entry.klass)
        });
      }
    } else {
      for (let klass of initialNodes) {
        let replace = null;
        let replaceWithKlass = null;
        if (typeof klass !== 'function') {
          const options = klass;
          klass = options.replace;
          replace = options.with;
          replaceWithKlass = options.withKlass || null;
        }
        const registeredKlass = initialEditor._nodes.get(klass.getType());
        initialEditor._nodes.set(klass.getType(), {
          exportDOM: registeredKlass ? registeredKlass.exportDOM : undefined,
          klass,
          replace,
          replaceWithKlass,
          transforms: getTransformSetFromKlass(klass)
        });
      }
    }
    initialEditor._config.namespace = parentEditor._config.namespace;
    initialEditor._editable = parentEditor._editable;
    return [initialEditor, context];
  },
  // We only do this for init
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  // If collaboration is enabled, make sure we don't render the children until the collaboration subdocument is ready.
  const {
    isCollabActive,
    yjsDocMap
  } = useCollaborationContext();
  const isCollabReady = skipCollabChecks || wasCollabPreviouslyReadyRef.current || yjsDocMap.has(initialEditor.getKey());
  useEffect(() => {
    if (isCollabReady) {
      wasCollabPreviouslyReadyRef.current = true;
    }
  }, [isCollabReady]);

  // Update `isEditable` state of nested editor in response to the same change on parent editor.
  useEffect(() => {
    return parentEditor.registerEditableListener(editable => {
      initialEditor.setEditable(editable);
    });
  }, [initialEditor, parentEditor]);
  return /*#__PURE__*/React.createElement(LexicalComposerContext.Provider, {
    value: composerContext
  }, !isCollabActive || isCollabReady ? children : null);
}

var modDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LexicalNestedComposer: LexicalNestedComposer$1
});

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c=s((function(e){const t=new URLSearchParams;t.append("code",e);for(let e=1;e<arguments.length;e++)t.append("v",arguments[e]);throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)}));function p(e){const t=e.transform();return null!==t?new Set([t]):new Set}function f({initialEditor:s,children:f,initialNodes:d,initialTheme:u,skipCollabChecks:m}){const h=useRef(!1),x=useContext(LexicalComposerContext);null==x&&c(9);const[_,{getTheme:g}]=x,v=useMemo((()=>{const e=u||g()||void 0,t=createLexicalComposerContext(x,e);if(void 0!==e&&(s._config.theme=e),s._parentEditor=_,d)for(let e of d){let t=null,r=null;if("function"!=typeof e){const o=e;e=o.replace,t=o.with,r=o.withKlass||null;}const o=s._nodes.get(e.getType());s._nodes.set(e.getType(),{exportDOM:o?o.exportDOM:void 0,klass:e,replace:t,replaceWithKlass:r,transforms:p(e)});}else {const e=s._nodes=new Map(_._nodes);for(const[t,r]of e)s._nodes.set(t,{exportDOM:r.exportDOM,klass:r.klass,replace:r.replace,replaceWithKlass:r.replaceWithKlass,transforms:p(r.klass)});}return s._config.namespace=_._config.namespace,s._editable=_._editable,[s,t]}),[]),{isCollabActive:w,yjsDocMap:b}=useCollaborationContext(),M=m||h.current||b.has(s.getKey());return useEffect((()=>{M&&(h.current=!0);}),[M]),useEffect((()=>_.registerEditableListener((e=>{s.setEditable(e);}))),[s,_]),React.createElement(LexicalComposerContext.Provider,{value:v},!w||M?f:null)}

var modProd = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LexicalNestedComposer: f
});

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const mod = process.env.NODE_ENV === 'development' ? modDev : modProd;
const LexicalNestedComposer = mod.LexicalNestedComposer;

var css_248z = ".ContentEditable__root{border:0;display:block;font-size:15px;min-height:150px;outline:0;padding:8px 28px 40px;position:relative}@media (max-width:1025px){.ContentEditable__root{padding-left:8px;padding-right:8px}}";
styleInject(css_248z);

function LexicalContentEditable(_a) {
    var className = _a.className;
    return jsxRuntimeExports.jsx(ContentEditable, { className: className || 'ContentEditable__root' });
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
var Direction = {
    east: 1 << 0,
    north: 1 << 3,
    south: 1 << 1,
    west: 1 << 2,
};
function ImageResizer(_a) {
    var onResizeStart = _a.onResizeStart, onResizeEnd = _a.onResizeEnd, buttonRef = _a.buttonRef, imageRef = _a.imageRef, maxWidth = _a.maxWidth, editor = _a.editor, showCaption = _a.showCaption, setShowCaption = _a.setShowCaption, captionsEnabled = _a.captionsEnabled;
    var controlWrapperRef = useRef(null);
    var userSelect = useRef({
        priority: '',
        value: 'default',
    });
    var positioningRef = useRef({
        currentHeight: 0,
        currentWidth: 0,
        direction: 0,
        isResizing: false,
        ratio: 0,
        startHeight: 0,
        startWidth: 0,
        startX: 0,
        startY: 0,
    });
    var editorRootElement = editor.getRootElement();
    // Find max width, accounting for editor padding.
    var maxWidthContainer = maxWidth
        ? maxWidth
        : editorRootElement !== null
            ? editorRootElement.getBoundingClientRect().width - 20
            : 100;
    var maxHeightContainer = editorRootElement !== null
        ? editorRootElement.getBoundingClientRect().height - 20
        : 100;
    var minWidth = 100;
    var minHeight = 100;
    var setStartCursor = function (direction) {
        var ew = direction === Direction.east || direction === Direction.west;
        var ns = direction === Direction.north || direction === Direction.south;
        var nwse = (direction & Direction.north && direction & Direction.west) ||
            (direction & Direction.south && direction & Direction.east);
        var cursorDir = ew ? 'ew' : ns ? 'ns' : nwse ? 'nwse' : 'nesw';
        if (editorRootElement !== null) {
            editorRootElement.style.setProperty('cursor', "".concat(cursorDir, "-resize"), 'important');
        }
        if (document.body !== null) {
            document.body.style.setProperty('cursor', "".concat(cursorDir, "-resize"), 'important');
            userSelect.current.value = document.body.style.getPropertyValue('-webkit-user-select');
            userSelect.current.priority = document.body.style.getPropertyPriority('-webkit-user-select');
            document.body.style.setProperty('-webkit-user-select', "none", 'important');
        }
    };
    var setEndCursor = function () {
        if (editorRootElement !== null) {
            editorRootElement.style.setProperty('cursor', 'text');
        }
        if (document.body !== null) {
            document.body.style.setProperty('cursor', 'default');
            document.body.style.setProperty('-webkit-user-select', userSelect.current.value, userSelect.current.priority);
        }
    };
    var handlePointerDown = function (event, direction) {
        if (!editor.isEditable()) {
            return;
        }
        var image = imageRef.current;
        var controlWrapper = controlWrapperRef.current;
        if (image !== null && controlWrapper !== null) {
            event.preventDefault();
            var _a = image.getBoundingClientRect(), width = _a.width, height = _a.height;
            var zoom = calculateZoomLevel(image);
            var positioning = positioningRef.current;
            positioning.startWidth = width;
            positioning.startHeight = height;
            positioning.ratio = width / height;
            positioning.currentWidth = width;
            positioning.currentHeight = height;
            positioning.startX = event.clientX / zoom;
            positioning.startY = event.clientY / zoom;
            positioning.isResizing = true;
            positioning.direction = direction;
            setStartCursor(direction);
            onResizeStart();
            controlWrapper.classList.add('image-control-wrapper--resizing');
            image.style.height = "".concat(height, "px");
            image.style.width = "".concat(width, "px");
            document.addEventListener('pointermove', handlePointerMove);
            document.addEventListener('pointerup', handlePointerUp);
        }
    };
    var handlePointerMove = function (event) {
        var image = imageRef.current;
        var positioning = positioningRef.current;
        var isHorizontal = positioning.direction & (Direction.east | Direction.west);
        var isVertical = positioning.direction & (Direction.south | Direction.north);
        if (image !== null && positioning.isResizing) {
            var zoom = calculateZoomLevel(image);
            // Corner cursor
            if (isHorizontal && isVertical) {
                var diff = Math.floor(positioning.startX - event.clientX / zoom);
                diff = positioning.direction & Direction.east ? -diff : diff;
                var width = clamp(positioning.startWidth + diff, minWidth, maxWidthContainer);
                var height = width / positioning.ratio;
                image.style.width = "".concat(width, "px");
                image.style.height = "".concat(height, "px");
                positioning.currentHeight = height;
                positioning.currentWidth = width;
            }
            else if (isVertical) {
                var diff = Math.floor(positioning.startY - event.clientY / zoom);
                diff = positioning.direction & Direction.south ? -diff : diff;
                var height = clamp(positioning.startHeight + diff, minHeight, maxHeightContainer);
                image.style.height = "".concat(height, "px");
                positioning.currentHeight = height;
            }
            else {
                var diff = Math.floor(positioning.startX - event.clientX / zoom);
                diff = positioning.direction & Direction.east ? -diff : diff;
                var width = clamp(positioning.startWidth + diff, minWidth, maxWidthContainer);
                image.style.width = "".concat(width, "px");
                positioning.currentWidth = width;
            }
        }
    };
    var handlePointerUp = function () {
        var image = imageRef.current;
        var positioning = positioningRef.current;
        var controlWrapper = controlWrapperRef.current;
        if (image !== null && controlWrapper !== null && positioning.isResizing) {
            var width = positioning.currentWidth;
            var height = positioning.currentHeight;
            positioning.startWidth = 0;
            positioning.startHeight = 0;
            positioning.ratio = 0;
            positioning.startX = 0;
            positioning.startY = 0;
            positioning.currentWidth = 0;
            positioning.currentHeight = 0;
            positioning.isResizing = false;
            controlWrapper.classList.remove('image-control-wrapper--resizing');
            setEndCursor();
            onResizeEnd(width, height);
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        }
    };
    return (jsxRuntimeExports.jsxs("div", __assign({ ref: controlWrapperRef }, { children: [!showCaption && captionsEnabled && (jsxRuntimeExports.jsx("button", __assign({ className: "image-caption-button", ref: buttonRef, onClick: function () {
                    setShowCaption(!showCaption);
                } }, { children: "Add Caption" }))), jsxRuntimeExports.jsx("div", { className: "image-resizer image-resizer-n", onPointerDown: function (event) {
                    handlePointerDown(event, Direction.north);
                } }), jsxRuntimeExports.jsx("div", { className: "image-resizer image-resizer-ne", onPointerDown: function (event) {
                    handlePointerDown(event, Direction.north | Direction.east);
                } }), jsxRuntimeExports.jsx("div", { className: "image-resizer image-resizer-e", onPointerDown: function (event) {
                    handlePointerDown(event, Direction.east);
                } }), jsxRuntimeExports.jsx("div", { className: "image-resizer image-resizer-se", onPointerDown: function (event) {
                    handlePointerDown(event, Direction.south | Direction.east);
                } }), jsxRuntimeExports.jsx("div", { className: "image-resizer image-resizer-s", onPointerDown: function (event) {
                    handlePointerDown(event, Direction.south);
                } }), jsxRuntimeExports.jsx("div", { className: "image-resizer image-resizer-sw", onPointerDown: function (event) {
                    handlePointerDown(event, Direction.south | Direction.west);
                } }), jsxRuntimeExports.jsx("div", { className: "image-resizer image-resizer-w", onPointerDown: function (event) {
                    handlePointerDown(event, Direction.west);
                } }), jsxRuntimeExports.jsx("div", { className: "image-resizer image-resizer-nw", onPointerDown: function (event) {
                    handlePointerDown(event, Direction.north | Direction.west);
                } })] })));
}

var imageCache = new Set();
var RIGHT_CLICK_IMAGE_COMMAND = createCommand('RIGHT_CLICK_IMAGE_COMMAND');
function useSuspenseImage(src) {
    if (!imageCache.has(src)) {
        throw new Promise(function (resolve) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                imageCache.add(src);
                resolve(null);
            };
        });
    }
}
function LazyImage(_a) {
    var altText = _a.altText, className = _a.className, imageRef = _a.imageRef, src = _a.src, width = _a.width, height = _a.height, maxWidth = _a.maxWidth;
    useSuspenseImage(src);
    return (jsxRuntimeExports.jsx("img", { className: className || undefined, src: src, alt: altText, ref: imageRef, style: {
            height: height,
            maxWidth: maxWidth,
            width: width,
        }, draggable: "false" }));
}
function ImageComponent(_a) {
    var src = _a.src, altText = _a.altText, nodeKey = _a.nodeKey, width = _a.width, height = _a.height, maxWidth = _a.maxWidth, resizable = _a.resizable, showCaption = _a.showCaption, caption = _a.caption, captionsEnabled = _a.captionsEnabled;
    var imageRef = useRef(null);
    var buttonRef = useRef(null);
    var _b = useLexicalNodeSelection(nodeKey), isSelected = _b[0], setSelected = _b[1], clearSelection = _b[2];
    var _c = useState(false), isResizing = _c[0], setIsResizing = _c[1];
    var editor = useLexicalComposerContext()[0];
    var _d = useState(null), selection = _d[0], setSelection = _d[1];
    var activeEditorRef = useRef(null);
    var $onDelete = useCallback(function (payload) {
        if (isSelected && $isNodeSelection($getSelection())) {
            var event_1 = payload;
            event_1.preventDefault();
            var node = $getNodeByKey(nodeKey);
            if ($isImageNode(node)) {
                node.remove();
                return true;
            }
        }
        return false;
    }, [isSelected, nodeKey]);
    var $onEnter = useCallback(function (event) {
        var latestSelection = $getSelection();
        var buttonElem = buttonRef.current;
        if (isSelected &&
            $isNodeSelection(latestSelection) &&
            latestSelection.getNodes().length === 1) {
            if (showCaption) {
                // Move focus into nested editor
                $setSelection(null);
                event.preventDefault();
                caption.focus();
                return true;
            }
            else if (buttonElem !== null &&
                buttonElem !== document.activeElement) {
                event.preventDefault();
                buttonElem.focus();
                return true;
            }
        }
        return false;
    }, [caption, isSelected, showCaption]);
    var $onEscape = useCallback(function (event) {
        if (activeEditorRef.current === caption ||
            buttonRef.current === event.target) {
            $setSelection(null);
            editor.update(function () {
                setSelected(true);
                var parentRootElement = editor.getRootElement();
                if (parentRootElement !== null) {
                    parentRootElement.focus();
                }
            });
            return true;
        }
        return false;
    }, [caption, editor, setSelected]);
    var onClick = useCallback(function (payload) {
        var event = payload;
        if (isResizing) {
            return true;
        }
        if (event.target === imageRef.current) {
            if (event.shiftKey) {
                setSelected(!isSelected);
            }
            else {
                clearSelection();
                setSelected(true);
            }
            return true;
        }
        return false;
    }, [isResizing, isSelected, setSelected, clearSelection]);
    var onRightClick = useCallback(function (event) {
        editor.getEditorState().read(function () {
            var latestSelection = $getSelection();
            var domElement = event.target;
            if (domElement.tagName === 'IMG' &&
                $isRangeSelection(latestSelection) &&
                latestSelection.getNodes().length === 1) {
                editor.dispatchCommand(RIGHT_CLICK_IMAGE_COMMAND, event);
            }
        });
    }, [editor]);
    useEffect(function () {
        var isMounted = true;
        var rootElement = editor.getRootElement();
        var unregister = mergeRegister(editor.registerUpdateListener(function (_a) {
            var editorState = _a.editorState;
            if (isMounted) {
                setSelection(editorState.read(function () { return $getSelection(); }));
            }
        }), editor.registerCommand(SELECTION_CHANGE_COMMAND, function (_, activeEditor) {
            activeEditorRef.current = activeEditor;
            return false;
        }, COMMAND_PRIORITY_LOW), editor.registerCommand(CLICK_COMMAND, onClick, COMMAND_PRIORITY_LOW), editor.registerCommand(RIGHT_CLICK_IMAGE_COMMAND, onClick, COMMAND_PRIORITY_LOW), editor.registerCommand(DRAGSTART_COMMAND, function (event) {
            if (event.target === imageRef.current) {
                // TODO This is just a temporary workaround for FF to behave like other browsers.
                // Ideally, this handles drag & drop too (and all browsers).
                event.preventDefault();
                return true;
            }
            return false;
        }, COMMAND_PRIORITY_LOW), editor.registerCommand(KEY_DELETE_COMMAND, $onDelete, COMMAND_PRIORITY_LOW), editor.registerCommand(KEY_BACKSPACE_COMMAND, $onDelete, COMMAND_PRIORITY_LOW), editor.registerCommand(KEY_ENTER_COMMAND, $onEnter, COMMAND_PRIORITY_LOW), editor.registerCommand(KEY_ESCAPE_COMMAND, $onEscape, COMMAND_PRIORITY_LOW));
        rootElement === null || rootElement === void 0 ? void 0 : rootElement.addEventListener('contextmenu', onRightClick);
        return function () {
            isMounted = false;
            unregister();
            rootElement === null || rootElement === void 0 ? void 0 : rootElement.removeEventListener('contextmenu', onRightClick);
        };
    }, [
        clearSelection,
        editor,
        isResizing,
        isSelected,
        nodeKey,
        $onDelete,
        $onEnter,
        $onEscape,
        onClick,
        onRightClick,
        setSelected,
    ]);
    var setShowCaption = function () {
        editor.update(function () {
            var node = $getNodeByKey(nodeKey);
            if ($isImageNode(node)) {
                node.setShowCaption(true);
            }
        });
    };
    var onResizeEnd = function (nextWidth, nextHeight) {
        // Delay hiding the resize bars for click case
        setTimeout(function () {
            setIsResizing(false);
        }, 200);
        editor.update(function () {
            var node = $getNodeByKey(nodeKey);
            if ($isImageNode(node)) {
                node.setWidthAndHeight(nextWidth, nextHeight);
            }
        });
    };
    var onResizeStart = function () {
        setIsResizing(true);
    };
    var draggable = isSelected && $isNodeSelection(selection) && !isResizing;
    var isFocused = isSelected || isResizing;
    return (jsxRuntimeExports.jsx(Suspense, __assign({ fallback: null }, { children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("div", __assign({ draggable: draggable }, { children: jsxRuntimeExports.jsx(LazyImage, { className: isFocused
                            ? "focused ".concat($isNodeSelection(selection) ? 'draggable' : '')
                            : null, src: src, altText: altText, imageRef: imageRef, width: width, height: height, maxWidth: maxWidth }) })), showCaption && (jsxRuntimeExports.jsx("div", __assign({ className: "image-caption-container" }, { children: jsxRuntimeExports.jsxs(LexicalNestedComposer, __assign({ initialEditor: caption }, { children: [jsxRuntimeExports.jsx(AutoFocusPlugin, {}), jsxRuntimeExports.jsx(LinkPlugin, {}), jsxRuntimeExports.jsx(RichTextPlugin, { contentEditable: jsxRuntimeExports.jsx(LexicalContentEditable, { className: "ImageNode__contentEditable" }), placeholder: jsxRuntimeExports.jsx(Placeholder, __assign({ className: "ImageNode__placeholder" }, { children: "Enter a caption..." })), ErrorBoundary: LexicalErrorBoundary })] })) }))), resizable && $isNodeSelection(selection) && isFocused && (jsxRuntimeExports.jsx(ImageResizer, { showCaption: showCaption, setShowCaption: setShowCaption, editor: editor, buttonRef: buttonRef, imageRef: imageRef, maxWidth: maxWidth, onResizeStart: onResizeStart, onResizeEnd: onResizeEnd, captionsEnabled: captionsEnabled }))] }) })));
}

export { RIGHT_CLICK_IMAGE_COMMAND, ImageComponent as default };
//# sourceMappingURL=ImageComponent-DZxXitza.js.map
