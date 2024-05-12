## Text Editor

- Tech Stack: HTML, CSS, React, Tailwind, Node
- Packages: @lexical/react

### Setup

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