import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import reportWebVitals from './reportWebVitals';
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="AppDesign">
        <Search />
        <Forecast />
      </div>
      <small>
        <a href="https://github.com/AneteCoding/my-first-app" target="_blank">Open-source code</a>, by  <a href="https://www.linkedin.com/in/anete-bogdanova-a5ba366a/" target="_blank">Anete</a>
      </small>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
