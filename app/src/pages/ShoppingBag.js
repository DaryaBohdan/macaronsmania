import Header from "../components/Header.js";
import ModalOverlay from "../components/ModalOverlay.js";
import SignInModal from "../components/SignInModal.js";
import SignUpModal from "../components/SignUpModal.js";
import ShoppingBagMenu from "../components/ShoppingBagMenu.js";
import Footer from "../components/Footer.js";
import ConfirmDeleteModal from "../components/ConfrimDeleteModal.js";

const ShoppingBag = {
  id: "shopping",
  title: "Shopping",
  render: () => {
    return /*html*/`
      ${Header.render()}
      ${ShoppingBagMenu.render()}
      ${Footer.render()}
      ${ModalOverlay.render()}
      ${SignInModal.render()}
      ${SignUpModal.render()}
      ${ConfirmDeleteModal.render()}
      
    `;
  }
}

export default ShoppingBag;