import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Story from "./components/Story";
// horseman company

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="story1" element={<Story/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
