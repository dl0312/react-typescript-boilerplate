# 🌌 Frontend Boilerplate with React, TypeScript

리액트 앱을 처음부터 만들기 위한 최고의 방법!

## 👀 라이브러리

| 라이브러리               | 버전       |
| ------------------------ | ---------- |
| react (with 🎣**Hooks**) | **^16.11** |
| react-dom                | **^16.11** |
| react-router             | **^5.1**   |
| react-scripts            | **3.3**    |
| styled-components        | **^4.4**   |
| typescript               | **3.6**    |
| antd                     | **4.1.5**  |

## 🔧 설정 파일들

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

`tsconfig.json`에는 `TypeScript`의 [컴파일러 옵션](https://typescript-kr.github.io/pages/compiler-options.html)이 정의되어 있습니다.

다음 커맨드를 통해 가장 기본적인 `tsconfig.json`를 생성할 수 있습니다.

```shell
$ npx tsc --init
```

해당 프로젝트에서는 기본 옵션에서 수정된 `tsconfig.json`를 사용합니다.

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
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "member-access": false
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
