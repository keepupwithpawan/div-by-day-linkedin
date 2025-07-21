const searchInput = document.getElementById('searchInput');
const recents = document.getElementById('recents');
const searchBarWrapper = document.getElementById('search-bar');

function expandSearchBar() {
  searchInput.style.width = "90%";
  searchInput.style.transform = "translateY(-20px)";
  recents.classList.add('active');
}

document.addEventListener('click', function (event) {
  const isClickInside = searchBarWrapper.contains(event.target);

  if (!isClickInside) {
    collapseSearchBar();
  }
});

function collapseSearchBar() {
    searchInput.style.transform = "translateY(0)";
    searchInput.style.width = "75%";
  recents.classList.remove('active');
}
