import "./swiper";
import "../style/style.scss";
import "./back-color";

document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target;

   if (targetElement.closest(".icon-menu")) {
      document.documentElement.classList.toggle("menu-open");
   }
}
