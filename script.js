document.addEventListener("DOMContentLoaded", function() {
    var modoBtn = document.getElementById("modoBtn");
    modoBtn.addEventListener("click", toggleModo);
  });
  
  function toggleModo() {
    var body = document.body;
  
    body.classList.toggle("dark-mode");
  }