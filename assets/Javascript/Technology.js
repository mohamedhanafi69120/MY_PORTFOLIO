document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const container = document.querySelector(".carousel-container");
  const trackWidth = track.scrollWidth;
  const containerWidth = container.clientWidth;

  if (trackWidth > containerWidth) {
    track.style.animation = "scroll 10s linear infinite";
  }
});
