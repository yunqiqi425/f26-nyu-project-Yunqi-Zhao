// Search interaction

// Search input
const searchInput = document.querySelector("#search-input");

// Log search input
searchInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});