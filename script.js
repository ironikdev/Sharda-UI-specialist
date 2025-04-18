// Movie Data
const movies = [
    { title: "Inception", genre: "sci-fi", image: "https://th.bing.com/th/id/OIP.fYLXgLBnnbp3N8JCRuUIGAHaLH?w=125&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7", description: "A mind-bending thriller." },
    { title: "The Dark Knight", genre: "action", image: "https://th.bing.com/th/id/OIP.Egeen5rNkVwHDKyJEx-Q-AHaK-?pid=ImgDet&w=176&h=260&c=7&dpr=1.5",description:"saviour of Gotham city " },
    { title: "Forrest Gump", genre: "drama", image: "https://th.bing.com/th/id/OIP.SoTin_IJWjPr74_PiZq6ZwHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", description: "A tale of life's journey." },
    { title: "The Avengers", genre: "action", image: "https://th.bing.com/th/id/OIP.f6Et8CDwVX2XrCfNUMpQiAHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", description: "Avengers assmble" },
    { title: "The Hangover", genre: "comedy", image: "https://th.bing.com/th/id/OIP.ADRHzS8-UMpMuSTWlvxAuwHaJ4?w=118&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", description: "A hilarious bachelor party." },
    { title: "Interstellar", genre: "sci-fi", image: "https://th.bing.com/th/id/OIP.n-lW5hhF0w9CCmLzfl6aRAHaK-?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", description: "Exploring the cosmos." },
  ];
  
  // DOM Elements
  const movieList = document.getElementById("movieList");
  const searchBar = document.getElementById("searchBar");
  const genreFilter = document.getElementById("genreFilter");
  
  // Function to Display Movies
  function displayMovies(filterGenre = "all", searchQuery = "") {
    movieList.innerHTML = ""; // Clear existing movies
    const filteredMovies = movies.filter(movie => {
      const matchesGenre = filterGenre === "all" || movie.genre === filterGenre;
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  
    if (filteredMovies.length === 0) {
      movieList.innerHTML = `<p>No movies found.</p>`;
      return;
    }
  
    filteredMovies.forEach(movie => {
      const movieCard = document.createElement("div");
      movieCard.className = "movie";
      movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
      `;
      movieList.appendChild(movieCard);
    });
  }
  
  // Event Listeners
  searchBar.addEventListener("input", () => {
    const searchQuery = searchBar.value;
    const filterGenre = genreFilter.value;
    displayMovies(filterGenre, searchQuery);
  });
  
  genreFilter.addEventListener("change", () => {
    const filterGenre = genreFilter.value;
    const searchQuery = searchBar.value;
    displayMovies(filterGenre, searchQuery);
  });
  
  // Initial Display
  displayMovies();

  // Theme Toggle
const toggleThemeButton = document.createElement("button");
toggleThemeButton.id = "toggleTheme";
toggleThemeButton.innerHTML = "🌙"; // Default to dark mode

// Add the button to the header
document.querySelector("header").appendChild(toggleThemeButton);

// Event listener to toggle light/dark mode
toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  toggleThemeButton.innerHTML = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});
