window.addEventListener("scroll", () => {
  const header = document.getElementById("primaryMenu");
  const scrollPos = window.pageYOffset;

  if (300 <= scrollPos) {
    header.classList.add("fixed");
  }

  if (0 >= scrollPos) {
    header.classList.remove("fixed");
  }
});

const show_side = document.querySelector("#side_btn"),
  close = document.querySelector(".side-close");

show_side.addEventListener("click", () => {
  const side = document.querySelector("#side");
  const side_bar = document.querySelector(".side-bar");
  setTimeout(() => {
    side.classList.add("show");
  }, 200);

  side_bar.classList.add("show-side-bar");
});

close.addEventListener("click", () => {
  const side = document.querySelector("#side");
  const side_bar = document.querySelector(".side-bar");
  side.classList.remove("show");
  side_bar.classList.remove("show-side-bar");
});

const aList = document.querySelectorAll(".nav-link");
aList.forEach((aLink) => {
  // console.log(aLink);
});

const gallery = document.querySelectorAll(".grid .grid-item"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".close"),
  currentImg = previewBox.querySelector(".current"),
  shadow = document.querySelector(".shadow"),
  totalImg = previewBox.querySelector(".total");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length;
    let newIndex = i;
    let clickImgIndex;
    gallery[i].onclick = () => {
      clickImgIndex = newIndex;
      console.log(i);
      function preview() {
        currentImg.textContent = newIndex + 1;
        let selectImgUrl = gallery[newIndex].querySelector("img").src;

        // console.log(selectImgUrl.querySelector("img").src)
        previewImg.src = selectImgUrl;
      }
      const prevBtn = document.querySelector(".prev");
      const nxtBtn = document.querySelector(".nxt");

      if (newIndex == 0) {
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) {
        nxtBtn.style.display = "none";
      }

      prevBtn.onclick = () => {
        newIndex--;
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none !important";
        } else {
          preview();
          nxtBtn.style.display = "block";
        }
      };
      nxtBtn.onclick = () => {
        newIndex++;
        if (newIndex >= gallery.length - 1) {
          preview();
          nxtBtn.style.display = "none !important";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };

      preview();
      previewBox.classList.add("show");
      shadow.style.display = "block";

      closeIcon.onclick = () => {
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nxtBtn.style.display = "block";
        shadow.style.display = "none";
        previewBox.classList.remove("show");
      };
    };
  }
};

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    slideTransition: `linear`,
    dots: false,
  });
});
