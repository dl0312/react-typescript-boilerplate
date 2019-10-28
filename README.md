# 🌌 Frontend Boilerplate with React, TypeScript

Ideal method for creating React apps from beginning

## 👀 Contains

| Library                  | Version    |
| ------------------------ | ---------- |
| react (with 🎣**Hooks**) | **^16.11** |
| react-dom                | **^16.11** |
| react-router             | **^5.1**   |
| react-scripts            | **3.2**    |
| styled-components        | **^4.4**   |
| typescript               | **3.6**    |

## 🔧 Config files

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
$ yarn
```

## Running

```
$ yarn start
```

## Build

```
$ yarn build
```

## Reference

- [CRA(Create React App)에 tslint, eslint, prettier 적용하기](https://milooy.wordpress.com/2019/09/21/cracreate-react-app%ec%97%90-tslint-eslint-prettier-%ec%a0%81%ec%9a%a9%ed%95%98%ea%b8%b0/comment-page-1/#comment-2044)

# License

MIT
