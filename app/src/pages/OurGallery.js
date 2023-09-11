import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Gallery from "../components/Gallery.js";
import ModalOverlay from "../components/ModalOverlay.js";
import SignInModal from "../components/SignInModal.js";
import SignUpModal from "../components/SignUpModal.js";

const OurGallery = {
  id: "gallery",
  title: "Gallery",
  render: () => {
    return /*html*/ `
${Header.render()}
${Gallery.render("Меню")}
${Footer.render("Меню")}
${ModalOverlay.render()}
${SignInModal.render()}
${SignUpModal.render()}
`;
  }
}

export default OurGallery;