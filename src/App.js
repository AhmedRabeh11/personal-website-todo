import React from "react";
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoWrapper from "./pages/TodoWrapper";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import './index.css';
import Page from "./pages/Page";
import Dropdown from "./components/Dropdown";




function App() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return ( /*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path = "" element = {<Home/>}/>
          <Route path="todo" element={<TodoWrapper />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
*/
    <div className="app">
      <h1>React Dropdown Example</h1>
      <Dropdown
        options={['Option 1', 'Option 2', 'Option 3']}
        onSelect={handleSelect}
      />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default App;
