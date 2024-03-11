const ratingText = document.querySelector(".rating");

loadRating();

function loadRating() {
  const rating = localStorage.getItem("rating");

  if (rating != null) {
    ratingText.innerHTML = rating;
    localStorage.clear();
  } else {
    window.location.href = "index.html";
  }
}
