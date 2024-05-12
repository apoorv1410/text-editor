## Text Editor

- Tech Stack: HTML, CSS, React, Tailwind, Node
- Packages: @lexical/react ([Ref](https://lexical.dev/docs/intro))

### How to use this in another ReactJS project
- integrate Lexical in your project: `npm install --save lexical @lexical/react`
- In your existing React project, import both the `public` and `src` files from this projects (Both the TS and CSS files)
- import the `TextEditor` file from src/components and use it wherever you want to add the text editor

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