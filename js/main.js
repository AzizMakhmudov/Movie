var elUl = document.querySelector("[data-ul]");
var imgUrl = "https://image.tmdb.org/t/p/w500";
var elForm = document.querySelector("[data-form]");
var elInputTitle = document.querySelector("[data-input-title]");
var elInputImg = document.querySelector("[data-input-img]");

renderMovie();

elForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  var movie = {
    title: null,
    poster_path: null,
  };
  elLi.textContent = elInputTitle.value;
  elSpan.textContent = elInputImg.value;
  elInputTitle.value = movie.title;
  elInputImg.value = movie.poster_path;
  movies.unshift(movie);
  elUl.prepend(createLi());
});

function renderMovie() {
  for (i = 0; i <= movies.length; i++) {
    movie = movies[i];
    elUl.appendChild(createLi(movie));
  }
  return elLi;
}

function createLi(movie) {
  var elLi = document.createElement("li");
  var elImg = document.createElement("img");
  var elSpan = document.createElement("span");

  elSpan.textContent = `${movie.title} - ${movie.vote_average}`;
  elImg.src = `${imgUrl}${movie.poster_path}`;
  elLi.appendChild(elSpan);
  elLi.appendChild(elImg);
  elUl.appendChild(elLi);

  return elLi;
}
