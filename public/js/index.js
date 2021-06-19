window.onload = function () {
  const targetDiv = document.getElementById("iphone");
  document.getElementById("demo").onclick = function () {
    toggle();
  };

  function toggle() {
    console.log("Demo launched.")
    // targetDiv.setAttribute("id", demo-div)
  }
};
