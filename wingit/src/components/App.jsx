import React from "react";
import Header from "./Header";
import CategoriesNavbar from "./CategoriesNavbar";
import Menu from "./Menu";

function App() {
  return (
    <div className="gradient">
      <Header title="Demo" />
      <CategoriesNavbar />
      <main className="container py-2">
        <Menu />
      </main>
    </div>
  );
}

export default App;
