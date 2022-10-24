console.log(
  "%cStop! %c\nThis is a browser feature intended for developers. ",
  "-webkit-text-fill-color:red; -webkit-text-stroke: 1px #333; font-size:40px;",
  "color:#000; font-size:20px"
);

// scroll to top fucntion
const scroolBtn = document.querySelector(".to-top-butotn");
window.onscroll = function () {
  if (window.scrollY >= 623) {
    scroolBtn.style.cssText = "display:block;right: 20px;";
  }
  if (window.scrollY <= 623) {
    scroolBtn.style.display = "none";
  }

  scroolBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      right: 4,
      behavior: "smooth",
    });
  };
};

// email validate
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
submit.onclick = (e) => {
  if (
    email.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return true;
  } else {
    e.preventDefault();
  }
};
//  increace year copyright per year auto
const copyrightYear = new Date().getFullYear();
document.querySelector(".copyright-year").textContent = copyrightYear;
