import React from "react";
import Editor from "./components/common/Editor";
import styled from "styled-components";
import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <main className="container h-screen w-screen flex flex-row">
      <Sidebar/>
      <main className="flex-auto">
        <Editor />
      </main>
    </main>
  );
}

export default App;
