# react-feb-demo

Project Developer using react framework
Demo project fetching data from api using axios, redux, react-hooks and completely responsive application

## Running locally

Install `nvm` or `n` package manager to manage node versions

Install node version 16
`n 16.13.1` or `nvm use 16.13.1`

`npm i` to install dependencies

`npm run build` to run production build

`npm start` to start dev server which launches on http://localhost:3000/

### Instructions to start local app

1. Checkout [react-feb-demo](https://github.com/HiJaiArora/react-feb-demo).
2. Follow UI steps above , and `npm run start`.
3. This will start the UI dev server at http://localhost:3000.

### Instructions to run component test cases using react-testing-library

1. Checkout [react-feb-demo](https://github.com/HiJaiArora/react-feb-demo).
2. Run npm test

$ npm run test App.test.js

> react-ci-cd@0.1.0 test
> react-scripts test "App.test.js"

PASS src/App.test.js (5.428 s)
App without data
√ should renders heading (211 ms)
√ should renders loading when data is not loaded (54 ms)
App with data
√ should renders heading (55 ms)
√ should renders movie heading (41 ms)
√ should renders correct option in select dropdown (30 ms)
√ should renders card (20 ms)
√ should renders card (19 ms)
√ should renders movie metadata and title on click of card (74 ms)

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.
Test Suites: 1 passed, 1 total
Tests: 8 passed, 8 total
Snapshots: 0 total
Time: 8.067 s
Ran all test suites matching /App.test.js/i.
