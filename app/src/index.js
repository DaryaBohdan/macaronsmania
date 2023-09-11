import Header from "./components/Header.js";
import Welcome from "./components/Welcome.js";
import ModalOverlay from "./components/ModalOverlay.js";
import SignInModal from "./components/SignInModal.js";
import SignUpModal from "./components/SignUpModal.js";
import Main from "./pages/Main.js";
import Controller from "./controller.js";
import Model from "./model.js";
import View from "./view.js";
import WhyWe from "./components/WhyWe.js";
import MacaronsMenu from "./components/MacaronsMenu.js";
import Gallery from "./components/Gallery.js";
import Footer from "./components/Footer.js";
import ShoppingBag from "./pages/ShoppingBag.js";
import PersonalAreaPage from "./pages/PersonalAreaPage.js";
import OurGallery from "./pages/OurGallery.js";

const components = {
  header: Header,
  welcome: Welcome,
  signInModal: SignInModal,
  signUpModal: SignUpModal,
  modalOverlay : ModalOverlay,
  gallery : Gallery,
  whyWe : WhyWe,
  macaronsMenu : MacaronsMenu,
  shoppingBag: ShoppingBag,
  footer : Footer,
  
  // // navbar: NavBar,
  // content: Content,
  // footer: Footer,
};   //обект со списком элементов, ключ и компонент (обэект , который рендер возвр кусок верстки)

const routes = {
  main: Main,
  gallery: OurGallery,
  shopping: ShoppingBag,
  personal: PersonalAreaPage,
  default: Main
} // обюект у которого есть пара(это якорь) и значение (обекты страниц)

const spa = (function() {
  return {
    init: function({ container, routes, components }) {
      this.renderComponents(container, components);

      const view = new View();
      const model = new Model();
      const controller = new Controller();

      // add init() calls if needed
      view.init(document.getElementById(container), routes);
      model.init(view);
      controller.init(document.getElementById(container), model);
    },
    renderComponents: function(container, components) {
      const root = document.getElementById(container);
      const componentsList = Object.keys(components);  // отдает все клбчи обекта   , массив строк
      for (let item of componentsList) {
        root.innerHTML += components[item].render();
      }
    },
  }
}());  //самовызываюш функция ,которая сразу же вызывается ,возвращает два метода(инит и рендер)

/*** --- init module --- ***/
document.addEventListener("DOMContentLoaded", spa.init({
  container: "app",
  routes: routes,
  components: components
}));
