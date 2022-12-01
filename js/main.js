// var elUl = document.querySelector("[data-ul]");
// var imgUrl = "https://image.tmdb.org/t/p/w500";
// var elForm = document.querySelector("[data-form]");
// var elImgUrl = document.querySelector("[data-form-img-url]");
// var elInputTitle = document.querySelector("[data-form-title]");

// renderMovies();

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   var movie = {
//     title: null,
//     poster_path: null,
//   };

//   movie.title = elInputTitle.value;
//   movie.poster_path = elImgUrl.value;

//   movies.unshift(movie);

//   renderMovies();
// });

// function renderMovies() {
//   elUl.innerHTML = "";
//   for (var i = 0; i < movies.length; i++) {
//     var movie = movies[i];
//     var elLi = document.createElement("li");
//     var elImg = document.createElement("img");
//     var elSpan = document.createElement("span");

//     elImg.src = `${imgUrl}${movie.poster_path}`;
//     elImg.width = 100;
//     elImg.height = 200;
//     elSpan.textContent = movie.title;

//     elLi.appendChild(elImg);
//     elLi.appendChild(elSpan);

//     elUl.appendChild(elLi);
//   }
// }

// var elUl = document.querySelector("[data-ul]");
// var imgUrl = "https://image.tmdb.org/t/p/w500";
// var elForm = document.querySelector("[data-form]");
// var elImgUrl = document.querySelector("[data-form-img-url]");
// var elInputTitle = document.querySelector("[data-form-title]");

// renderMovies();

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   var movie = {
//     title: null,
//     poster_path: null,
//   };

//   movie.title = elInputTitle.value;
//   movie.poster_path = elImgUrl.value;

//   movies.unshift(movie);

//   elUl.prepend(createLi(movie));
// });

// function renderMovies() {
//   elUl.innerHTML = "";
//   for (var i = 0; i < movies.length; i++) {
//     var movie = movies[i];

//     elUl.appendChild(createLi(movie));
//   }
// }
// function createLi(movie) {
//   var elLi = document.createElement("li");
//   var elImg = document.createElement("img");
//   var elSpan = document.createElement("span");

//   elImg.src = `${imgUrl}${movie.poster_path}`;
//   elImg.width = 100;
//   elImg.height = 200;
//   elSpan.textContent = movie.title;

//   elLi.appendChild(elImg);
//   elLi.appendChild(elSpan);
//   return elLi;
// }
