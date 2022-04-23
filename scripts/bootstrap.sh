#!/bin/zsh

yarn init

npm install react react-dom typescript @types/react @types/react-dom
npm install babel-loader @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react @babel/preset-typescript --save-dev
npm install webpack webpack-cli webpack-dev-server webpack-hot-middleware terser-webpack-plugin webpack-node-externals webpack-merge @types/webpack @types/webpack-dev-middleware @types/webpack-hot-middleware --save-dev
npm install @loadable/component @loadable/server
npm install @loadable/babel-plugin @loadable/webpack-plugin @types/loadable__component @types/loadable__server --save-dev
npm install npm-run-all nodemon --save-dev

