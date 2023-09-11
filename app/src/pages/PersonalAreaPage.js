import Header from "../components/Header.js";
import PersonalArea from "../components/Personal-Area.js";
import Footer from "../components/Footer.js";
import ModalOverlay from "../components/ModalOverlay.js";
import SignInModal from "../components/SignInModal.js";
import SignUpModal from "../components/SignUpModal.js";
import UpdateProfileModal from "../components/UpdateProfileModal.js";

const PersonalAreaPage = {
  id: "personal",
  title: "личный кабинет",
  render: () => {
    return /*html*/`
      ${Header.render()}
      ${PersonalArea.render()}
      ${Footer.render()}
      ${ModalOverlay.render()}
      ${SignInModal.render()}
      ${SignUpModal.render()}
      ${UpdateProfileModal.render()}
    `;
  }
}

export default PersonalAreaPage;