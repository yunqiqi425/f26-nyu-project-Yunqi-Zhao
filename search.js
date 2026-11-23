// Search interaction

// Search input
const searchInput = document.querySelector("#search-input");

// Search panel elements
const searchToggle = document.getElementById("search-toggle");
const searchPanel = document.getElementById("search-panel");
const searchClose = document.getElementById("search-close");

// Search form
const searchForm = document.getElementById("search-form");

// Search message element
const searchMessage = document.getElementById("search-message");

// Search state
let searchText = "";

// Search panel state
let searchOpen = false;
let searchInvalid = false;

// Check search input
function hasSearchText(text) {
  return text.trim().length > 0;
}

// Render search
function render() {
  searchPanel.hidden = !searchOpen;
  searchPanel.classList.toggle("has-search", hasSearchText(searchText));
  searchMessage.hidden = !searchInvalid;
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
  searchInvalid = false;
  render();
});

// Check search submission
searchForm.addEventListener("submit", (event) => {
  if (!hasSearchText(searchText)) {
    event.preventDefault();
    searchInvalid = true;
    render();
  }
});