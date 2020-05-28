# 🌌 Frontend Boilerplate with React, TypeScript

리액트 앱을 처음부터 만들기 위한 최고의 방법!

## 👀 라이브러리

| 라이브러리              | 버전       |
| ----------------------- | ---------- |
| react (with 🎣**Hooks**) | **^16.11** |
| react-dom               | **^16.11** |
| react-router            | **^5.1**   |
| react-scripts           | **3.3**    |
| styled-components       | **^4.4**   |
| typescript              | **3.6**    |

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
`tsconfig.json`에는 `TypeScript`의 컴파일 옵션이 정의되어 있습니다. 기본적으로는 다음 커맨드를 통해 생성할 수 있습니다.
```shell
$ npx tsc --init
```
해당 커맨드로 생성되는 `tsconfig.json`은 다음과 같습니다.

```json
{
  "compilerOptions": {
    /* https://aka.ms/tsconfig.json 를 방문하면 해당 파일에 대한 더 많은 정보를 얻을 수 있습니다. */
    
    // 옵션은 아래와 같은 형식으로 구성되어 있습니다.
    // "모듈 키": 모듈 값                        /* 설명: 사용가능 옵션 (설명이 "~ 여부"인 경우 'true', 'false') */

    /* 기본 옵션 */
    // "incremental": true,                   /* 증분 컴파일 설정 여부 */
    "target": "es5",                          /* 사용할 특정 ECMAScript 버전 설정: 'ES3' (기본), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 혹은 'ESNEXT'. */
    "module": "commonjs",                     /* 모듈을 위한 코드 생성 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* 컴파일에 포함될 라이브러리 파일 목록 */
    // "allowJs": true,                       /* 자바스크립트 파일 컴파일 허용 여부 */
    // "checkJs": true,                       /* .js 파일의 오류 검사 여부 */
    // "jsx": "preserve",                     /* JSX 코드 생성 설정: 'preserve', 'react-native', 혹은 'react'. */
    // "declaration": true,                   /* '.d.ts' 파일 생성 여부. */
    // "declarationMap": true,                /* 각 '.d.ts' 파일의 소스맵 생성 여부. */
    // "sourceMap": true,                     /* '.map' 파일 생성 여부. */
    // "outFile": "./",                       /* 단일 파일로 합쳐서 출력합니다. */
    // "outDir": "./",                        /* 해당 디렉토리로 결과 구조를 보냅니다. */
    // "rootDir": "./",                       /* 입력 파일의 루트 디렉토리(rootDir) 설정으로 --outDir로 결과 디렉토리 구조를 조작할 때 사용됩니다. */
    // "composite": true,                     /* 프로젝트 컴파일 여부 */
    // "tsBuildInfoFile": "./",               /* 증분 컴파일 정보를 저장할 파일 */
    // "removeComments": true,                /* 주석 삭제 여부 */
    // "noEmit": true,                        /* 결과 파일 내보낼지 여부 */
    // "importHelpers": true,                 /* 'tslib'에서 헬퍼를 가져올 지 여부 */
    // "downlevelIteration": true,            /* 타겟이 'ES5', 'ES3'일 때에도 'for-of', spread 그리고 destructuring 문법 모두 지원 */
    // "isolatedModules": true,               /* 각 파일을 분리된 모듈로 트랜스파일 ('ts.transpileModule'과 비슷합니다). */

    /* 엄격한 타입-확인 옵션 */
    "strict": true,                           /* 모든 엄격한 타입-체킹 옵션 활성화 여부 */
    // "noImplicitAny": true,                 /* 'any' 타입으로 구현된 표현식 혹은 정의 에러처리 여부 */
    // "strictNullChecks": true,              /* 엄격한 null 확인 여부 */
    // "strictFunctionTypes": true,           /* 함수 타입에 대한 엄격한 확인 여부 */
    // "strictBindCallApply": true,           /* 함수에 엄격한 'bind', 'call' 그리고 'apply' 메소드 사용 여부 */
    // "strictPropertyInitialization": true,  /* 클래스의 값 초기화에 엄격한 확인 여부 */
    // "noImplicitThis": true,                /* 'any' 타입으로 구현된 'this' 표현식 에러처리 여부 */
    // "alwaysStrict": true,                  /* strict mode로 분석하고 모든 소스 파일에 "use strict"를 추가할 지 여부 */

    /* 추가적인 확인 */
    // "noUnusedLocals": true,                /* 사용되지 않은 지역 변수에 대한 에러보고 여부 */
    // "noUnusedParameters": true,            /* 사용되지 않은 파라미터에 대한 에러보고 여부 */
    // "noImplicitReturns": true,             /* 함수에서 코드의 모든 경로가 값을 반환하지 않을 시 에러보고 여부 */
    // "noFallthroughCasesInSwitch": true,    /* switch문에서 fallthrough 케이스에 대한 에러보고 여부 */

    /* 모듈 해석 옵션 */
    // "moduleResolution": "node",            /* 모듈 해석 방법 설정: 'node' (Node.js) 혹은 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* non-absolute한 모듈 이름을 처리할 기준 디렉토리 */
    // "paths": {},                           /* 'baseUrl'를 기준으로 불러올 모듈의 위치를 재지정하는 엔트리 시리즈 */
    // "rootDirs": [],                        /* 결합된 컨텐츠가 런타임에서의 프로젝트 구조를 나타내는 루트 폴더들의 목록 */
    // "typeRoots": [],                       /* 타입 정의를 포함할 폴더 목록, 설정 안 할 시 기본적으로 ./node_modules/@types로 설정 */
    // "types": [],                           /* 컴파일중 포함될 타입 정의 파일 목록 */
    // "allowSyntheticDefaultImports": true,  /* default export이 아닌 모듈에서도 default import가 가능하게 할 지 여부, 해당 설정은 코드 추출에 영향은 주지 않고, 타입확인에만 영향을 줍니다. */
    "esModuleInterop": true,                  /* 모든 imports에 대한 namespace 생성을 통해 CommonJS와 ES Modules 간의 상호 운용성이 생기게할 지 여부,  'allowSyntheticDefaultImports'를 암시적으로 승인합니다. */
    // "preserveSymlinks": true,              /* symlik의 실제 경로를 처리하지 않을 지 여부 */
    // "allowUmdGlobalAccess": true,          /* UMD 전역을 모듈에서 접근할 수 있는 지 여부 */

    /* 소스 맵 옵션 */
    // "sourceRoot": "",                      /* 소스 위치 대신 디버거가 알아야 할 TypeScript 파일이 위치할 곳 */
    // "mapRoot": "",                         /* 생성된 위치 대신 디버거가 알아야 할 맵 파일이 위치할 곳 */
    // "inlineSourceMap": true,               /* 분리된 파일을 가지고 있는 대신, 단일 파일을 소스 맵과 가지고 있을 지 여부 */
    // "inlineSources": true,                 /* 소스맵과 나란히 소스를 단일 파일로 내보낼 지 여부, '--inlineSourceMap' 혹은 '--sourceMap'가 설정되어 있어야 한다. */

    /* 실험적 옵션 */
    // "experimentalDecorators": true,        /* ES7의 decorators에 대한 실험적 지원 여부 */
    // "emitDecoratorMetadata": true,         /* decorator를 위한 타입 메타데이터를 내보내는 것에 대한 실험적 지원 여부 */

    /* 추가적 옵션 */
    "skipLibCheck": true,                     /* 정의 파일의 타입 확인을 건너 뛸 지 여부 */
    "forceConsistentCasingInFileNames": true  /* 같은 파일에 대한 일관되지 않은 참조를 허용하지 않을 지 여부 */
  }
}
```

해당 프로젝트에서는 수정된 `tsconfig.json`를 사용합니다.
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
