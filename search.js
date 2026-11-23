// Search interaction

// Search input
const searchInput = document.querySelector("#search-input");

// Search panel elements
const searchToggle = document.getElementById("search-toggle");
const searchPanel = document.getElementById("search-panel");
const searchClose = document.getElementById("search-close");

// Search state
let searchText = "";

// Search panel state
let searchOpen = false;

// Render search
function render() {
  searchPanel.hidden = !searchOpen;
  console.log(searchText);
}

// Open search panel
searchToggle.addEventListener("click", () => {
  searchOpen = true;
  render();
});

// Close search panel
searchClose.addEventListener("click", () => {
  searchOpen = false;
  render();
});

// Update search state
searchInput.addEventListener("input", (event) => {
  searchText = event.target.value;
  render();
});