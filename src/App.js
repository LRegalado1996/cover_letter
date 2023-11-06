import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  HomePage,
  SimpleFormPage,
  ConnectWithExternalApiPage,
  ReactKonvaPage,
} from "./Pages";

import { Header } from "./Components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SimpleFormPage" element={<SimpleFormPage />} />
          <Route
            path="/ConnectWithExternalApiPage"
            element={<ConnectWithExternalApiPage />}
          />
          <Route path="/ReactKonvaPage" element={<ReactKonvaPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
