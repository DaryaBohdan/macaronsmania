import Card from './components/Card.js';
import ShoppingCartItem from './components/ShoppingCartItem.js';
import Review from './components/Review.js';

function View() {
  let _routes = null; // 
  let _container = null;
  let _signInModal = null;
  let _signUpModal = null;
  let _overlayModal = null;
  let _macaronsMenu = null;
  let _setsMenu = null;
  let _spanUsername = null;
  let _loginLink = null;
  let _logoutLink = null;
  let _shoppingLink = null;
  let _shoppingCartWrapper = null;
  let _shoppingCartTotal = null;
  let _profileContainer = null;
  let _confirmDeleteModal = null;
  let _updateProfileModal = null;
  let _addReviewModal = null;
  let _reviewsContainer = null;

  this.init = function(container, routes) {
    _container = container;
    _routes = routes; 
  }

  this.renderMacarons = function(macarons) {
    if (_macaronsMenu && macarons.length > 0) {
      for(let macaron of macarons) {
        _macaronsMenu.innerHTML += Card.render(macaron.id, macaron.name, macaron.price, macaron.imageSrc);
      }
    }

    new Swiper('#macarons-menu', {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      direction: 'horizontal',
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  this.renderSets = function(sets) {
    if (_setsMenu && sets.length > 0) {
      for(let set of sets) {
        _setsMenu.innerHTML += Card.render(set.id, set.name, set.price, set.imageSrc);
        _setsMenu.innerHTML += Card.render(set.id, set.name, set.price, set.imageSrc);
      }
    }

    new Swiper('#macarons-sets', {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      direction: 'horizontal',
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  this.renderReviews = function(reviews) {
    
    if (_reviewsContainer) {
      _reviewsContainer.innerHTML = '';
      for(let review of reviews) {
        _reviewsContainer.innerHTML += Review.render(review.name, review.description);
      }
    }

    new Swiper("#review", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }); 
  }

  this.setUsername = function(username) {
    _spanUsername.classList.remove('hidden');
    _spanUsername.textContent = username;
    _loginLink.classList.add('hidden');
    _logoutLink.classList.remove('hidden');
    _shoppingLink.classList.remove('hidden');
  }

  this.unsetUsername = function() {
    _spanUsername.classList.add('hidden');
    _loginLink.classList.remove('hidden');
    _logoutLink.classList.add('hidden');
    _shoppingLink.classList.add('hidden');
  }

  this.likeMacaron = function(macaronId) {
    if (_macaronsMenu || _setsMenu) { 
      const heart = _container.querySelector(`#${macaronId}-heart`);
      heart.classList.add('third-section-menu-box-fill-heart');
    }
  }

  this.dislikeMacaron = function(macaronId) {
    const heart = _container.querySelector(`#${macaronId}-heart`);
    heart.classList.remove('third-section-menu-box-fill-heart');
  }

  this.renderShoppingCart = function(cart, macarons) {
    if (_shoppingCartWrapper) {
      _shoppingCartWrapper.innerHTML = '';
      for(let item of cart) {
        const macaron = macarons.find(m => m.id === item.macaronId);
        _shoppingCartWrapper.innerHTML += ShoppingCartItem.render(macaron.id, macaron.imageSrc, macaron.name, macaron.price * item.quantity, item.quantity);
      }
    }
  }

  this.renderShoppingCartTotal = function(total) {
    if (_shoppingCartTotal) {
      _shoppingCartTotal.textContent = `Итого: ${total}BYN`;
    }
  }

  this.renderUpdatedShoppingCartItem = function(macaronId, quantity, price) {
    if (_shoppingCartWrapper) {
      const quantityContainer = _shoppingCartWrapper.querySelector(`#${macaronId}-quantity`);
      quantityContainer.textContent = quantity;

      const priceContainer = _shoppingCartWrapper.querySelector(`#${macaronId}-price`);
      priceContainer.textContent = `${price} BYN`;
    }
  }

  this.deleteShoppingCartItem = function(macaronId) {
    if (_shoppingCartWrapper) {
      const itemToDelete = _shoppingCartWrapper.querySelector(`#${macaronId}-cart-item`);
      _shoppingCartWrapper.removeChild(itemToDelete);
    }
  }

  this.renderEmptyShoppingCart = function() {
    if (_shoppingCartWrapper) {
      _shoppingCartWrapper.innerHTML = '';
    }
  }

  this.renderProfile = function(user) {
    if (_profileContainer) {
      const lastNameSpan = _profileContainer.querySelector('#lastname');
      lastNameSpan.textContent = user.lastName;

      const fisrtNameSpan = _profileContainer.querySelector('#firstname');
      fisrtNameSpan.textContent = user.firstName;

      const phoneSpan = _profileContainer.querySelector('#phone');
      phoneSpan.textContent = user.phone;

      const emailSpan = _profileContainer.querySelector('#email');
      emailSpan.textContent = user.email;

      const citySpan = _profileContainer.querySelector('#city');
      citySpan.textContent = user.city;

      const streetSpan = _profileContainer.querySelector('#street');
      streetSpan.textContent = user.street;

      const flatSpan = _profileContainer.querySelector('#flat');
      flatSpan.textContent = user.flat;

      const entranceSpan = _profileContainer.querySelector('#entrance');
      entranceSpan.textContent = user.entrance;
    }
  }

  this.fillOutUpdateProfileModal = function(profile) {
    if (_updateProfileModal) {
      const lastNameInput = _updateProfileModal.querySelector('#lastname');
      lastNameInput.value = profile.lastName;

      const fisrtNameInput = _updateProfileModal.querySelector('#firstname');
      fisrtNameInput.value = profile.firstName;

      const phoneInput = _updateProfileModal.querySelector('#phone');
      phoneInput.value = profile.phone;

      const emailInput = _updateProfileModal.querySelector('#email');
      emailInput.value = profile.email;

      const cityInput = _updateProfileModal.querySelector('#city');
      cityInput.value = profile.city;

      const streetInput = _updateProfileModal.querySelector('#street');
      streetInput.value = profile.street;

      const flatInput = _updateProfileModal.querySelector('#flat');
      flatInput.value = profile.flat;

      const entranceInput = _updateProfileModal.querySelector('#entrance');
      entranceInput.value = profile.entrance;
    }
  }

  this.renderPage = function(hash, username) {
    const path = hash in _routes ? hash : 'default';  
    _container.innerHTML = _routes[path].render(username);

    _signInModal = _container.querySelector('#signin-modal');
    _signUpModal = _container.querySelector('#signup-modal');
    _overlayModal = _container.querySelector('#modal-overlay');
    _updateProfileModal = _container.querySelector('#update-profile-modal');
    _macaronsMenu = _container.querySelector('#macarons-menu .swiper-wrapper');
    _setsMenu = _container.querySelector('#macarons-sets .swiper-wrapper');
    _spanUsername = _container.querySelector('.header__first-section-username');
    _loginLink = _container.querySelector('.header__first-section-login');
    _logoutLink = _container.querySelector('.header__first-section-logout');
    _shoppingLink = _container.querySelector('.header__first-section-shopping-bag-wrapper');
    _shoppingCartWrapper = _container.querySelector('.header__shopping-bag-items-wrapper');
    _shoppingCartTotal = _container.querySelector('.header__shoppimg-bag-total-price p');
    _profileContainer = _container.querySelector('.main__personal-area-wrapper');
    _confirmDeleteModal = _container.querySelector('.main__delete-modal-wrapper');
    _addReviewModal = _container.querySelector('.main__review-modal-wrapper');
    _reviewsContainer = _container.querySelector('.main__review-wrapper');



    const wow = new WOW({
      boxClass: 'wow', /* класс, который необходим для работы wow.js */
      animateClass: 'animate__animated', /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */
      offset: 30, /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */
      mobile: true, /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */
      live: true /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */
    });

    wow.init(); 
  }

  this.displaySignInModal = function(display) {
    this.display(_signInModal, display);
    this.display(_overlayModal, display);
    if (!display) {
      this.clearForm('signin-modal');
    }
  }

  this.displaySignUpModal = function(display) {
    this.display(_signUpModal, display);
    this.display(_overlayModal, display);
    if (!display) {
      this.clearForm('signup-modal');
    }
  }

  this.displayConfirmDeleteModal = function(display) {
    this.display(_confirmDeleteModal, display);
    this.display(_overlayModal, display);
  }

  this.displayUpdateProfileModal = function(display) {
    this.display(_updateProfileModal, display);
    this.display(_overlayModal, display);
  }

  this.displayAddReviewModal = function(display) {
    this.display(_overlayModal, display);
    this.display(_addReviewModal, display);
  }

  this.clearAddReviewModalForm = function() {
    this.clearForm('add-review-modal');
  }

  this.showValidationErrors = function(containerId, error) {
    this.clearValidationMessages(containerId);
    for (var key in error) {
      const input = _container.querySelector(`#${containerId} #${key}`);
      input.classList.add('form-error');

      const span = _container.querySelector(`#${containerId} #${key}-error`);
      span.classList.remove('hidden');
      span.textContent = error[key];
    } 
  }

  this.showAddReviewValidationErrors = function(error) {
    this.showValidationErrors('add-review-modal', error);
  }

  this.showSignUpValidationErrors = function(error) {
    this.showValidationErrors('signup-modal', error);
  }

  this.showSignInValidationErrors = function(error) {
    this.showValidationErrors('signin-modal', error);
  }

  this.toggleMenu = function() {
    const menu = _container.querySelector('.header__first-section-nav-wrapper');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }

  this.enableMenu = function() {
    const menu = _container.querySelector('.header__first-section-nav-wrapper');
    menu.classList.remove('hidden');
  }

  this.disableMenu = function() {
    const menu = _container.querySelector('.header__first-section-nav-wrapper');
    menu.classList.add('hidden');
  }

  this.display = function(element, display) {
    if (display) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  }

  this.clearForm = function(formName) {
    const inputs = _container.querySelectorAll(`#${formName} input`);
    const textAreas = _container.querySelectorAll(`#${formName} textarea`);
    const errorTexts = _container.querySelectorAll(`#${formName} .form-error-text`);
    inputs.forEach(input => input.classList.remove('form-error'));
    inputs.forEach(input => input.value = '');
    textAreas.forEach(textArea => textArea.value = '');
    textAreas.forEach(textArea => textArea.classList.remove('form-error'));
    errorTexts.forEach(span => span.classList.add('hidden'));
  }

  this.clearValidationMessages = function(formName) {
    const inputs = _container.querySelectorAll(`#${formName} input`);
    const textAreas = _container.querySelectorAll(`#${formName} textarea`);
    const errorTexts = _container.querySelectorAll(`#${formName} .form-error-text`);
    inputs.forEach(input => input.classList.remove('form-error'));
    textAreas.forEach(textArea => textArea.classList.remove('form-error'));
    errorTexts.forEach(span => span.classList.add('hidden'));
  }

  this.showItemAddedMessage = function() {
    Toastify({
      text: "Добавлено в корзину",
      duration: 2000,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  }

  this.showItemDeletedMessage = function() {
    Toastify({
      text: "Товар удален из корзины",
      duration: 2000,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  }
}

export default View;