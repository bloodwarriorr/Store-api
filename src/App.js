import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./Main";
import StoreCard from "./StoreCard";
import DeleteStore from "./DeleteStore";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/StoreCard" element={<StoreCard />} />
            <Route path="/DeleteStore" element={<DeleteStore />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
