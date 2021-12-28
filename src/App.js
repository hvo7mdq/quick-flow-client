import Home from "./pages/Home/Home"
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="App">
        <MainLayout>
        <Home />
        </MainLayout>     
    </div>
  );
}

export default App;
