import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./Main";
import IngrediantCard from "./IngrediantCard";
import DeleteIngrediant from "./DeleteIngrediant";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/IngrediantCard" element={<IngrediantCard />} />
            <Route path="/DeleteIngrediant" element={<DeleteIngrediant />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
