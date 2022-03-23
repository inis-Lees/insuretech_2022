import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import InputTest from "./components/InputTest";
import ListComponents from "./components/ListComponents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header title="리엑트 테스트" />}></Route>
        <Route path="/test" element={<InputTest />}></Route>
        <Route path="/test2" element={<ListComponents />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
