import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AppRouter from './AppRouter';
import Main from "./pages/Main"

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
