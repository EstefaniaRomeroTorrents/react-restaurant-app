function scrollWidthOffset(el) {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -60;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "instant" });
}

export { scrollWidthOffset, scrollToTop };
