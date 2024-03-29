import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import { createStore, combineReducers } from "redux";
// import { Provider } from "react-redux";
// import { persistStore, persistReducer } from "redux-persist";
// import reportData from "./store/reducers/reportData";
// import { PersistGate } from "redux-persist/integration/react";
// import storage from "redux-persist/lib/storage";
import { BrowserRouter } from "react-router-dom";
import "../public/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "simplebar/dist/simplebar.min.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducers = combineReducers({
//   repData: reportData,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducers);

// const store = createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// let persistor = persistStore(store);

// store.subscribe(() => {
//   console.log(store.getState().lastAction);
// });

const loader = document.querySelector(".loader");
const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => loader.classList.add("loader--hide");

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
      <App tab="home" hideLoader={hideLoader} showLoader={showLoader} />
      {/* </PersistGate>
      </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
