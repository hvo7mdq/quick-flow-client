import MainLayout from "./layout/MainLayout";
import { Router } from "./router/Router";

function App() {
  return (
    <div className="App">
        <MainLayout>
        <Router />
        </MainLayout>
    </div>
  );
}

export default App;
