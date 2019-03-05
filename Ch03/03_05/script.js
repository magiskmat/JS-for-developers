(function() {
"use strict";

document.getElementById("cart-hplus").addEventListener("submit", estimateTotal);

function estimateTotal(event) {
  event.preventDefault();

 console.log("You submittet the form.");
}

})();