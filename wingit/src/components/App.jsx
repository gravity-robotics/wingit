import React from 'react';
import Header from './Header';
import CategoriesNavbar from './CategoriesNavbar';


// window.onscroll = function () { myFunction() };

//       var categories = document.getElementById("categories");
//       var sticky = categories.offsetTop;

//       function myFunction() {
//         if (window.pageYOffset >= sticky) {
//           categories.classList.add("sticky")
//           categories.classList.remove("categories");
//         } else {
//           categories.classList.add("categories")
//           categories.classList.remove("sticky");
//         }
//       }

function App() {
  return (
    <div className="gradient">
    <Header title="Demo"></Header>
    <CategoriesNavbar/>
    </div>
  );
}

export default App;