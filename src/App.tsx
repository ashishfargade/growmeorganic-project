import { Form } from "./components/Form";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SecondPage } from "./components/SecondPage";
import { useState } from "react";

function App() {
  const [invalidTry, setInvalidTry] = useState<boolean>(false);
  // if user tries to access 2nd page without entering details, 
  // redirect to first page with error message


  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Form invalidTry={invalidTry} />
            }
          />
          <Route
            path="/secondPage"
            element={
              <SecondPage
                setInvalidTry={setInvalidTry}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
