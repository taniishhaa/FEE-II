const image = document.querySelector("img");

function imageToggler() {
  let isTrue = false;

  setInterval(() => {
    if (isTrue) {
      image.setAttribute(
        "src",
        "https://static.vecteezy.com/system/resources/thumbnails/002/099/443/small_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg"
      );
    } else {
      image.setAttribute(
        "src",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc93G-imIa1bod1o14Uk10KhQ2CRExJ4DYuw&s"
      );
    }
    isTrue = !isTrue;
  }, 1000);
}
imageToggler();