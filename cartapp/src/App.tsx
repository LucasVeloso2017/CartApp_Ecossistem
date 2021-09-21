import React from "react";
import Routes from "./routes/index.routes";
import Global from "./styles/global";
import {BrowserRouter as Router} from 'react-router-dom'
import AppProvider from "./hooks";

const App: React.FC = () => {
  return(
    <Router>
      <Global/>
      <AppProvider>
        <Routes/>
      </AppProvider>
    </Router>
  )
};

export default App;
