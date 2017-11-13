# Typescript definitions for [lightdm-webkit2](https://github.com/Antergos/web-greeter)

![](https://img.shields.io/badge/webkit2--version-v2.2.5-blue.svg?style=flat-square)
![](https://img.shields.io/badge/build-working-green.svg?style=flat-square)

This package delivers typescript definitions for [lightdm-webkit2](https://github.com/Antergos/web-greeter)'s javascript [API](https://doclets.io/Antergos/web-greeter/stable). The intention is to make developing themes for [lightdm-webkit2](https://github.com/Antergos/web-greeter) a breeze with included type specifications and helpers with linting.

## Installation

Use `npm install --save-dev lightdm-webkit2-typescript` to install this definition as a dev dependency, and then define a `tsconfig.json` according to [Typescriptlang.org](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

One example for a `tsconfig.json` that will work well for lightdm-webkit2 developing is:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "lib": [
      "DOM",
      "ES2015",
      "ES2016",
      "ES2017",
      "ES2015.Iterable"
    ],
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules/lightdm-webkit2-typescript"
    ],
    "outFile": "./greeter.js"
  },
  "include": [
    "./**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

In the config above the important part to notice is `typeRoots`, which has to be defined with the path to this node module.

- `typeRoots` defines the files that will compiled as `.d.ts`-library files.
- `outFile` defines the file that will be the result of the _typescript_-compilation.
- `include` defines the files that will be compiled to the results (_currently a glob which specifies all .ts files in project directory_)

[See _tsconfig.json_ documentation here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
