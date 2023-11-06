import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  HomePage,
  SimpleFormPage,
  ConnectWithExternalApiPage,
  ReactKonvaPage,
} from "./Pages";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SimpleFormPage" element={<SimpleFormPage />} />
        <Route path="/ConnectWithExternalApiPage" element={<ConnectWithExternalApiPage />} />
        <Route path="/ReactKonvaPage" element={<ReactKonvaPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
