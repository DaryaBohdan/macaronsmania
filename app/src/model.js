import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, set, push, child, get } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBC4DYOr6H0rom0JKxlPkQQDnov_FywyLA",
  authDomain: "macaroon-9a213.firebaseapp.com",
  databaseURL: "https://macaroon-9a213-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "macaroon-9a213",
  storageBucket: "macaroon-9a213.appspot.com",
  messagingSenderId: "313774946374",
  appId: "1:313774946374:web:74211fb58540f263ff7247"
};

const app = initializeApp(firebaseConfig); 
const db = getDatabase(app);

function Model() {
  let _view = null;

  this.init = function(view) {
    _view = view;
  }

  this.updateState = function(hash) {
    _view.renderPage(hash);
  }

  this.displaySignInModal = function(display) {
    _view.displaySignInModal(display);
  }

  this.displaySignUpModal = function(display) {
    _view.displaySignUpModal(display);
  }

  this.displayConfirmDeleteModal = function(display) {
    _view.displayConfirmDeleteModal(display);
  }

  this.displayAddReviewModal = function(display) {
    _view.displayAddReviewModal(display);
  }

  this.clearAddReviewModalForm = function() {
    _view.clearAddReviewModalForm();
  }

  this.openUpdateProfileModal = async function() {
    const username = localStorage.getItem('username');
    const snapshot = await get(child(ref(db), `users/${username}/profile`));
    const profile = snapshot.val();
    _view.displayUpdateProfileModal(true);
    _view.fillOutUpdateProfileModal(profile);
  }

  this.closeUpdateProfileModal = function() {
    _view.displayUpdateProfileModal(false);
  }

  this.addReview = async function(name, description) {
    const error = {};
    if (name.length === 0) {
      error.name = "Имя не может быть пустым";
    }

    if (description.length === 0) {
      error.description = "Комментарий не может быть пустым";
    }

    if (Object.keys(error).length > 0) {
      _view.showAddReviewValidationErrors(error);
    } else {
      const review = { name, description };
      const snapshot = await get(child(ref(db), 'reviews'));
      let reviews = snapshot.val();
      if (!reviews) {
        reviews = [];
      }

      reviews.push(review);
      await set(ref(db, `reviews`), reviews);
      _view.clearAddReviewModalForm();
      _view.displayAddReviewModal(false);
      _view.renderReviews(reviews);
    }
  }

  this.updateProfile = async function(firstName, lastName, phone, city, street, flat, entrance, email) {
    const profile = { firstName, lastName, phone, city, street, flat, entrance, email };
    const username = localStorage.getItem('username');
    await set(ref(db, `users/${username}/profile`), profile);
    _view.displayUpdateProfileModal(false);
    _view.renderProfile(profile);
  }

  this.toggleMenu = function() {
    _view.toggleMenu();
  }

  this.setMenuOnWidth = function() {
    if (window.innerWidth > 992) {
      _view.enableMenu();
    } else {
      _view.disableMenu();
    }
  }

  this.setUsernameIfLoggedIn = function() {
    const username = localStorage.getItem('username');
    if (username) {
      _view.setUsername(username);
    }
  }

  this.loadMacarons = async function() {
    const snapshot = await get(child(ref(db), 'macarons'));
    if (snapshot.exists()) {
      const macarons = snapshot.val().filter(i => i.type === "macaron");
      _view.renderMacarons(macarons);
    }
  }

  this.loadLikes = async function() {
    const username = localStorage.getItem('username');
    if (!username) return;

    const snapshot = await get(child(ref(db), 'macarons'));
    const macarons = snapshot.val();
    for(let macaron of macarons) {
      if (macaron.likes && macaron.likes.includes(username)) {
        _view.likeMacaron(macaron.id);
      }
    }
  }

  this.loadSets = async function() {
    const snapshot = await get(child(ref(db), 'macarons'));
    if (snapshot.exists()) {
      const sets = snapshot.val().filter(i => i.type === "set");
      _view.renderSets(sets);
    }
  }

  this.loadShoppingCart = async function() {
    const username = localStorage.getItem('username');
    if(!username) {
      _view.displaySignInModal(true);
    } else {
      const snapshot = await get(child(ref(db), `users/${username}`));
      const cart = snapshot.val().cart;
      if (cart && cart.length) {
        const macaronsSnapshot = await get(child(ref(db), 'macarons'));
        const macarons = macaronsSnapshot.val();
        const total = this.calculateCartTotalAmount(cart, macarons);
        _view.renderShoppingCart(cart, macarons);
        _view.renderShoppingCartTotal(total);
      } else {
        _view.renderEmptyShoppingCart();
        _view.renderShoppingCartTotal(0);
      }
    }
  }

  this.loadReviews = async function() {
    const snapshot = await get(child(ref(db), 'reviews' ));
    const reviews = snapshot.val();
    _view.renderReviews(reviews);
  }

  this.loadProfile = async function() {
    const username = localStorage.getItem('username');
    if(!username) {
      _view.displaySignInModal(true);
    } else {
      const snapshot = await get(child(ref(db), `users/${username}`));
      const user = snapshot.val();
      if (!user.profile) {
        user.profile = {
          firstName: '',
          lastName: '',
          phone: '',
          email : '',
          city: '',
          street: '',
          flat: '',
          entrance: ''
        }
      }

      _view.renderProfile(user.profile);
    }
  }

  this.calculateCartTotalAmount = function(cart, macarons) {
    return cart
      .map(item => {
        const price = macarons.find(i => i.id === item.macaronId).price;
        return price * item.quantity;
      })
      .reduce((a,b) => a + b, 0);
  }

  this.addToCart = async function(macaronId) {
    const username = localStorage.getItem('username');
    if(!username) {
      _view.displaySignInModal(true);
    } else {
      const snapshot = await get(child(ref(db), `users/${username}`));
      const user = snapshot.val();  //что бы забрать юзера
      if (!user.cart) {
        user.cart = [];
      }

      const macaron = user.cart.find(item => item.macaronId === macaronId); // получаем в карт есть ли такой макарон 
      if (macaron) {
        macaron.quantity++;
      } else {
        user.cart.push({ macaronId, quantity: 1 });  // добавялем в количестве одного
      }

      set(ref(db, `users/${username}`), user);
      _view.showItemAddedMessage();
    }
  }

  this.likeMacaron = async function(macaronId) {
    const username = localStorage.getItem('username');
    if(!username) {
      _view.displaySignInModal(true);
    } else {
      const snapshot = await get(child(ref(db), 'macarons'));
      const macarons = snapshot.val();
      const macaron = macarons.find(item => item.id === macaronId);

      if (!macaron.likes) {
        macaron.likes = [];
      }

      if (macaron.likes.includes(username)) {
        macaron.likes = macaron.likes.filter(item => item !== username);
        _view.dislikeMacaron(macaronId);
      } else {
        macaron.likes.push(username);
        _view.likeMacaron(macaronId);
      }

      set(ref(db, 'macarons'), macarons);
    }
  }

  this.increaseQuantity = async function(macaronId) {
    const username = localStorage.getItem('username');
    const snapshot = await get(child(ref(db), `users/${username}/cart`));
    const cart = snapshot.val();
    const item = cart.find(i => i.macaronId === macaronId);
    const newQuantity = ++item.quantity;
    
    await set(ref(db, `users/${username}/cart`), cart);

    const macaronsSnapshot = await get(child(ref(db), 'macarons'));
    const macarons = macaronsSnapshot.val();
    const macaron = macarons.find(i => i.id === macaronId);
    const total = this.calculateCartTotalAmount(cart, macarons);
    _view.renderUpdatedShoppingCartItem(macaronId, newQuantity, macaron.price * newQuantity);
    _view.renderShoppingCartTotal(total);
  }

  this.decreaseQuantity = async function(macaronId) {
    const username = localStorage.getItem('username');
    const snapshot = await get(child(ref(db), `users/${username}/cart`));
    const cart = snapshot.val();
    const item = cart.find(i => i.macaronId === macaronId);
    if (item.quantity === 0) 
      return;

    const newQuantity = --item.quantity; 
    await set(ref(db, `users/${username}/cart`), cart);
    const macaronsSnapshot = await get(child(ref(db), 'macarons'));
    const macarons = macaronsSnapshot.val();
    const macaron = macarons.find(i => i.id === macaronId);
    const total = this.calculateCartTotalAmount(cart, macarons);
    _view.renderUpdatedShoppingCartItem(macaronId, newQuantity, macaron.price * newQuantity);
    _view.renderShoppingCartTotal(total);
  }

  this.deleteShoppingCartItem = function(macaronId) {
    localStorage.setItem('itemToDelete', macaronId);
    _view.displayConfirmDeleteModal(true);
  }

  this.cancelDeleteShoppingCartItem = function() {
    localStorage.removeItem('itemToDelete');
    _view.displayConfirmDeleteModal(false);
  }

  this.confirmDeleteShoppingCartItem = async function() {
    const macaronId = localStorage.getItem('itemToDelete');
    const username = localStorage.getItem('username');
    const snapshot = await get(child(ref(db), `users/${username}/cart`));
    const cart = snapshot.val().filter(i => i.macaronId !== macaronId);
    await set(ref(db, `users/${username}/cart`), cart);

    const macaronsSnapshot = await get(child(ref(db), 'macarons'));
    const macarons = macaronsSnapshot.val();
    const total = this.calculateCartTotalAmount(cart, macarons);
    _view.deleteShoppingCartItem(macaronId);
    _view.renderShoppingCartTotal(total);
    _view.showItemDeletedMessage();
    _view.displayConfirmDeleteModal(false);
  }

  this.clearShoppingCart = async function() {
    const emptyCart = [];
    const username = localStorage.getItem('username');
    await set(ref(db, `users/${username}/cart`), emptyCart);

    _view.renderShoppingCartTotal(0);
    _view.renderEmptyShoppingCart();    

  }

  this.signUp = async function(name, email, password, confirmPassword) {
    const error = {};
    if (name.length === 0 || name.length >= 15) {
      error.name = "Длина имени должна быть меньше 15 символов";
    }

    const nameRegex = /^[A-Za-z]+$/;
    if (!name.match(nameRegex)) {
      error.name = "Имя должно состоять только из  латинских букв";
    }

    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (!email.match(emailRegex)) {
      error.email = "Невалидный почтовый адрес";
    }

    if (password.length === 0 || password.length > 10) {
      error.password = "Пароль не может быть пустым или длиннее 10 символов";
    }

    if (confirmPassword !== password) {
      error.confirm = "Пароли не совпадают";
    }

    if (Object.keys(error).length > 0) {
      _view.showSignUpValidationErrors(error);
      return;
    }

    const snapshot = await get(child(ref(db), `users/${name}`));
    if (snapshot.exists()) {
      error.name = "Пользователь с таким именем уже существует";
    }  // эта готовая функции ,которые читают данные из firebase

    if (Object.keys(error).length > 0) {
      _view.showSignUpValidationErrors(error);
    } else {
      set(ref(db, `users/${name}`), {
        name,
        email,
        password
      });  //сохраняем юзера в базе данных
      _view.clearForm('signup-modal');
      _view.displaySignUpModal(false); // выключаем фоому закрывваем автоматически
    }
  }

  this.signIn = async function(name, password) {
    const error = {};
    if (name.length === 0 || name.length >= 15) {
      error.name = "Длина имени должна быть меньше 15 символов";
    }

    const nameRegex = /^[A-Za-z]+$/;
    if (!name.match(nameRegex)) {
      error.name = "Имя должно состоять только из латинских букв";
    }

    if (password.length === 0 || password.length > 10) {
      error.password = "Пароль не может быть пустым или длиннее 10 символов";
    }

    if (Object.keys(error).length > 0) {
      _view.showSignInValidationErrors(error);
      return;
    }

    const snapshot = await get(child(ref(db), `users/${name}`));
    if (snapshot.exists()) {
      const dbUser = snapshot.val();
      if (password !== dbUser.password) {
        error.password = "Пароль не совпадает";
      }
    } else {
      error.name = "Пользователь с таким именем не существует";
    }

    if (Object.keys(error).length > 0) {
      _view.showSignInValidationErrors(error);
    } else {
      localStorage.setItem("username", name);  // устанавливает имя
      _view.displaySignInModal(false); // выключаем фоому закрывваем автоматически
      _view.setUsername(name);
      this.loadLikes();
    }
  }

  this.logout = function() {
    localStorage.removeItem("username");
    _view.unsetUsername();
  }
}

export default Model;
