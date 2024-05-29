document.addEventListener("DOMContentLoaded", function () {
  const delayedSection = document.querySelector(".delay");
  const delayTime = 1320000; // Adjust the delay time in milliseconds

  if (delayedSection) {
    delayedSection.style.opacity = 0;
    setTimeout(() => {
      delayedSection.style.transition = "opacity 1s";
      delayedSection.style.opacity = 1;
    }, delayTime);
  }
});
