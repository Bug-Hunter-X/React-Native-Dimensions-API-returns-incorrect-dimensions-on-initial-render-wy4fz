# React Native Dimensions API - Incorrect Dimensions on Initial Render

This repository demonstrates a common issue when using the `Dimensions` API in React Native to get screen dimensions.  The problem is that the dimensions are not always immediately available when the component mounts, leading to incorrect layout calculations.

This example shows how to properly handle the asynchronous nature of getting dimensions and ensures a smooth user experience.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.
4. Observe that initially, the dimensions are incorrect.  After a short delay, they are corrected.

## Solution

The solution provided in `bugSolution.js` uses the `useEffect` hook to handle the asynchronous nature of the `Dimensions` API. We use the `LayoutAnimation` API for improved transition between the updates.