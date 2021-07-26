import React from "react";
import Header from "./Header";
import CategoriesNavbar from "./CategoriesNavbar";
import Category from "./Category";

function App() {
  return (
    <div className="gradient">
      <Header title="Demo"></Header>
      <CategoriesNavbar />
      <main className="container py-2">
        <Category title="Soups" />
        <Category title="Salads" />
        <Category title="Appetizers" />
        <Category title="Pastas" />
        <Category title="Pizzas" />
        <Category title="Main Course" />
        <Category title="Indian Cuisine" />
        <Category title="Chinese Cuisine" />
        <Category title="Side Orders" />
        <Category title="Rice" />
        <Category title="Desserts" />
      </main>
    </div>
  );
}

export default App;