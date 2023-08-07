import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import MainPage from "./page/MainPage";
import ListPage from "./page/ListPage";
import DeveloperPage from "./page/DeveloperPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>

      <div className="center-container">
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/developer" element={<DeveloperPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
    </Provider>
    
  );
}

export default App;