import Header from "../components/Header.js";
import Welcome from "../components/Welcome.js";
import ModalOverlay from "../components/ModalOverlay.js";
import SignInModal from "../components/SignInModal.js";
import SignUpModal from "../components/SignUpModal.js";
import WhyWe from "../components/WhyWe.js";
import MacaronsMenu from "../components/MacaronsMenu.js";
import MacaronsSets from "../components/MacaronsSets.js";
import Footer from "../components/Footer.js";
import AddReviewModal from "../components/AddReviewModal.js";
import ReviewsContainer from "../components/ReviewsContainer.js";

const Main = {
  id: "main",
  title: "Главная страница",
  render: () => {
    return /*html*/ `
${Header.render()}
${Welcome.render("Добро пожаловать")}
${WhyWe.render()}
${MacaronsMenu.render()}
${ReviewsContainer.render()}
${MacaronsSets.render()}
${Footer.render()}
${ModalOverlay.render()}
${SignInModal.render()}
${SignUpModal.render()}
${AddReviewModal.render()}
`;
  }
}

export default Main;