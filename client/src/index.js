import react from "react";
import { createRoot } from "react-dom/client";

// Import all
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Import the reducers that create
import reducers from "./reducers";

import App from "./App.js";
import './index.css'

// Create a store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById("root");
const root = createRoot(container);

// Wrap my application with the provider component, by setting the app in the middle of the providers
root.render(
    // Specify the store to be equal to store
  <Provider store={store}>
    <App />
  </Provider>
);
