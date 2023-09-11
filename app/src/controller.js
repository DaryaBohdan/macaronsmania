function Controller() {
  let _model = null;
  let _container = null;

  function onShowSignInModal(event) {
    event.preventDefault();
    _model.displaySignInModal(true);
  }

  function onCloseSignInModal() {
    _model.displaySignInModal(false);
  }

  function onCloseSignUpModal() {
    _model.displaySignUpModal(false);
  }

  function onRedirectToSignUp() {
    _model.displaySignInModal(false);
    _model.displaySignUpModal(true);
  }

  function onRedirectToSignIn() {
    _model.displaySignUpModal(false);
    _model.displaySignInModal(true);
  }

  async function onShowUpdateProfileModal() {
    await _model.openUpdateProfileModal();
  }

  function onCloseUpdateProfileModal() {
    _model.closeUpdateProfileModal();
  }

  function onShowAddReviewModal() {
    _model.displayAddReviewModal(true);
  }

  function onHideAddReviewModal() {
    _model.clearAddReviewModalForm();
    _model.displayAddReviewModal(false);
  }

  async function onUpdateProfile() {
    const firstName = _container.querySelector('#update-profile-modal #firstname').value;
    const lastName = _container.querySelector('#update-profile-modal #lastname').value;
    const phone = _container.querySelector('#update-profile-modal #phone').value;
    const email = _container.querySelector('#update-profile-modal #email').value;
    const city = _container.querySelector('#update-profile-modal #city').value;
    const street = _container.querySelector('#update-profile-modal #street').value;
    const flat = _container.querySelector('#update-profile-modal #flat').value;
    const entrance = _container.querySelector('#update-profile-modal #entrance').value;
    _model.updateProfile(firstName, lastName, phone, city, street, flat, entrance, email);
  } 

  async function onAddProductToCart(event) {
    const id = event.currentTarget.id;  
    const macaronId = id.split('-')[0]; // macaron1-button -> [macaron1, button] -> macaron1  //строка и режет на массивы
    await _model.addToCart(macaronId);
  }

  async function onLikeProduct(event) {
    const id = event.currentTarget.id;
    const macaronId = id.split('-')[0];
    await _model.likeMacaron(macaronId);
  }

  async function onDecreaseQuantity(event) {
    const id = event.currentTarget.id;
    const macaronId = id.split('-')[0];
    await _model.decreaseQuantity(macaronId);
  }

  async function onIncreaseQuantity(event) {
    const id = event.currentTarget.id;
    const macaronId = id.split('-')[0];
    await _model.increaseQuantity(macaronId);
  }

  async function onDeleteShoppingCartItem(event) {
    const id = event.currentTarget.id;
    const macaronId = id.split('-')[0];
    await _model.deleteShoppingCartItem(macaronId);
  }

  async function onCancelDeleteCartItemModal() {
    _model.cancelDeleteShoppingCartItem();
  }

  async function onConfrimDeleteShoppingCartItem() {
    await _model.confirmDeleteShoppingCartItem();
  }

  async function onClearShoppingCart() {
    await _model.clearShoppingCart();
  }

  async function onAddReview() {
    const name = document.querySelector('#add-review-modal input').value;
    const description = document.querySelector('#add-review-modal textarea').value;
    await _model.addReview(name, description);
  }

  function onSignUp() {
    const name = document.querySelector("#signup-modal #name").value;
    const email = document.querySelector("#signup-modal #email").value;
    const password = document.querySelector("#signup-modal #password").value;
    const confirmPassword = document.querySelector("#signup-modal #confirm").value;
    _model.signUp(name, email, password, confirmPassword);
  }

  function onSignIn() {
    const name = document.querySelector("#signin-modal #name").value;
    const password = document.querySelector("#signin-modal #password").value;
    _model.signIn(name, password);
  }

  function onToggleMenu() {
    _model.toggleMenu();
  }

  function setMenuOnWidth() {
    _model.setMenuOnWidth();
  }

  function onLogout() {
    _model.logout();
  }

  async function updateState() {
    const hash = location.hash.slice(1).toLowerCase();

    _model.updateState(hash);
    _model.setUsernameIfLoggedIn();
    await _model.loadMacarons();
    await _model.loadSets();
    await _model.loadLikes();
    await _model.loadReviews();
    
    if (hash === 'shopping') {
      await _model.loadShoppingCart();
    }

    if (hash === 'personal') {
      await _model.loadProfile();
    }
   
    const showSignInModalButton = _container.querySelector('.header__first-section-login');
    showSignInModalButton.onclick = onShowSignInModal;

    const redirectToSignUpButton = _container.querySelector('#signin-modal a');
    redirectToSignUpButton.onclick = onRedirectToSignUp;

    const redirectToSignInButton = _container.querySelector('#signup-modal a');
    redirectToSignInButton.onclick = onRedirectToSignIn;

    const closeSignInModalButton = _container.querySelector('#signin-modal .close-one');
    closeSignInModalButton.onclick = onCloseSignInModal;

    const closeSignUpModalButton = _container.querySelector('#signup-modal .close-one');
    closeSignUpModalButton.onclick = onCloseSignUpModal;

    const breadcrumb = _container.querySelector('.header__menu-breadcrumb');
    breadcrumb.onclick = onToggleMenu;

    const signUpButton = _container.querySelector("#signup-modal .header__first-section-form-button");
    signUpButton.onclick = onSignUp; // зарегестрироваться

    const signInButton = _container.querySelector("#signin-modal .header__first-section-form-button");
    signInButton.onclick = onSignIn;

    const logoutButton = _container.querySelector('.header__first-section-logout');
    logoutButton.onclick = onLogout;

    const addProductButtons = _container.querySelectorAll('.third-section-menu-box-button');
    addProductButtons.forEach(button => button.onclick = onAddProductToCart);

    const likeProductButtons = _container.querySelectorAll('.third-section-menu-box-heart');
    likeProductButtons.forEach(button => button.onclick = onLikeProduct);

    const decreaseQuantityButtons = _container.querySelectorAll('.header__shopping-bag-button-minus');
    decreaseQuantityButtons.forEach(button => button.onclick = onDecreaseQuantity);

    const increaseQuantityButtons = _container.querySelectorAll('.header__shopping-bag-button-plus');
    increaseQuantityButtons.forEach(button => button.onclick = onIncreaseQuantity);

    const deleteShoppingCartItemButtons = _container.querySelectorAll('.header__shopping-bag-trash');
    deleteShoppingCartItemButtons.forEach(button => button.onclick = onDeleteShoppingCartItem);

    const closeDeleteShoppingCardItemModalButton = _container.querySelector('.main__delete-modal-wrapper .close-one');
    closeDeleteShoppingCardItemModalButton && (closeDeleteShoppingCardItemModalButton.onclick = onCancelDeleteCartItemModal);

    const cancelDeleteShoppingCardItemButton = _container.querySelector('.main__delete-modal-title-cancel');
    cancelDeleteShoppingCardItemButton && (cancelDeleteShoppingCardItemButton.onclick = onCancelDeleteCartItemModal);

    const confirmDeleteShoppingCardItemButton = _container.querySelector('.main__delete-modal-title-delete');
    confirmDeleteShoppingCardItemButton && (confirmDeleteShoppingCardItemButton.onclick = onConfrimDeleteShoppingCartItem);

    const clearShoppingCartButton = _container.querySelector('.header__shopping-bag-remove-cart-button');
    clearShoppingCartButton && (clearShoppingCartButton.onclick = onClearShoppingCart);

    const showUpdateProfileModalButton = _container.querySelector('.main__personal-area-info-button');
    showUpdateProfileModalButton && (showUpdateProfileModalButton.onclick = onShowUpdateProfileModal);

    const closeUpdateProfileModalButton = _container.querySelector('#update-profile-modal .close-one');
    closeUpdateProfileModalButton && (closeUpdateProfileModalButton.onclick = onCloseUpdateProfileModal);

    const cancelUpdateProfileModalButton = _container.querySelector('#update-profile-modal .main__profile-modal-title-cancel');
    cancelUpdateProfileModalButton && (cancelUpdateProfileModalButton.onclick = onCloseUpdateProfileModal);

    const confirmUpdateProfileModalButton = _container.querySelector('#update-profile-modal .main__profile-modal-title-safe');
    confirmUpdateProfileModalButton && (confirmUpdateProfileModalButton.onclick = onUpdateProfile);

    const openAddReviewModalButton = _container.querySelector('.main__review-button');
    openAddReviewModalButton && (openAddReviewModalButton.onclick = onShowAddReviewModal);

    const cancelAddReviewModalButton = _container.querySelector('#add-review-modal .main__profile-modal-title-cancel');
    cancelAddReviewModalButton && (cancelAddReviewModalButton.onclick = onHideAddReviewModal);

    const closeAddReviewModalButton = _container.querySelector('#add-review-modal .close-one');
    closeAddReviewModalButton && (closeAddReviewModalButton.onclick = onHideAddReviewModal);

    const confrimAddReviewModalButton = _container.querySelector('#add-review-modal .main__profile-modal-title-safe');
    confrimAddReviewModalButton && (confrimAddReviewModalButton.onclick = onAddReview);
  }

  return {
    init: function(container, model) {
      _model = model;
      _container = container;

      window.addEventListener("hashchange", updateState);
      window.addEventListener("resize", setMenuOnWidth);
      window.addEventListener("load", setMenuOnWidth);
      updateState();
    } 
  }  
}

export default Controller;
