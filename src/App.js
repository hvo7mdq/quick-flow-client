import MainLayout from "./layout/MainLayout";
import { Routes } from "./router/Router";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
        <MainLayout>
           <Routes/>
        </MainLayout>
    </div>
    </Router>
  );
}

export default App;
