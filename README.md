# 🌌 Frontend Boilerplate with React, TypeScript

Ideal method for creating React apps from beginning

## 👀 Contains

| Library                 | Version    |
| ----------------------- | ---------- |
| react (with 🎣**Hooks**) | **^16.11** |
| react-dom               | **^16.11** |
| react-router            | **^5.1**   |
| react-scripts           | **3.3**    |
| styled-components       | **^4.4**   |
| typescript              | **3.6**    |

## 🔧 Config files

### 🖋 title
타이틀 수정을 위해서는 [index.html](/public/index.html)에서 현재 `React-TypeScript-Boilerplate`로 되어있는 부분들을 고쳐야합니다.
```html
<meta
  name="apple-mobile-web-app-title"
  content="React-TypeScript-Boilerplate"
/>
```
```html
<title>React-TypeScript-Boilerplate</title>
```

### 🦞 favicon
파비콘 수정을 위해서는 [asset](/public/asset)에 있는 기존의 이미지 파일들을 대체해야합니다. (현재는 🦞 이모지로 되어있습니다.)

[FAVIC-O-MATIC](https://favicomatic.com/)에 접속하여 `Every damm size,sir!`를 선택하고 `Upload Your Image` 버튼을 클릭하여 필요한 이미지 파일이 들어있는 압축파일을 받습니다.

### 📄 .eslintrc.json

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "env": {
    "browser": true,
    "jasmine": true,
    "jest": true
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "parser": "@typescript-eslint/parser"
}
```

### 📄 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "noImplicitAny": false,
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": ["src"]
}
```

### 📄 tslint.json

```json
{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {
    "quotemark": false,
    "ordered-imports": false
  },
  "rulesDirectory": []
}
```

### 📄 .prettierrc

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "always",
  "orderedImports": true
}
```

## Installation

```
$ npm install 
```

## Running

```
$ npm run start
```

## Build

```
$ npm run build
```

## Reference

- [CRA(Create React App)에 tslint, eslint, prettier 적용하기](https://milooy.wordpress.com/2019/09/21/cracreate-react-app%ec%97%90-tslint-eslint-prettier-%ec%a0%81%ec%9a%a9%ed%95%98%ea%b8%b0/comment-page-1/#comment-2044)

# License

MIT
