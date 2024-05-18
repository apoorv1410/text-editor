## Text Editor

- Tech Stack: HTML, CSS, React, Tailwind, Node
- Packages: @lexical/react ([Ref](https://lexical.dev/docs/intro))

### How to use this in another ReactJS project
- install the `lexical-text-editor` library in your code
    - `npm i -D lexical-text-editor`
- import the library in your required componet
    - `import { TextEditor } from 'lexical-text-editor';`
- import the text-editor CSS file in your `App.css` file
    - `@import url('lexical-text-editor/TextEditor.css');`
- Connfigurations:
    - Show/Hide some parts of the text editor:
    ```
    <TextEditor
        showToolbar={true}
        showFloatingToolbar={true}
        showInsertDropDown={false}
        showUndoRedoButtons={true}
        showFontFamilyOptions={true}
        showTreeView={false}
    ></TextEditor>
    ```

### Setup from scratch

- setup node version: `nvm use 20`
- setup ReactJS + Typescript: `npx create-react-app text-editor --template typescript`
- move to the app: `cd text-editor`
- setup tailwind:
    - `npm install -D tailwindcss postcss autoprefixer`
    - npx tailwindcss init -p (`p` flag will purge any unused CSS)
    - add `'./src/**/*.{js,jsx,ts,tsx}'` to the content array config inside tailwind.config.js
    - Add following code block to src/index.css
        ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
- integrate Lexical: `npm install --save lexical @lexical/react`
- start the project: `npm start`
- Open in broswer: `http://localhost:3000/`