const SignInModal = {
  render: () => {
    return /*html*/ `
<div id="signin-modal" class="header__first-section-modal hidden">
  <div class="header__first-section-modal-button">
    <button type="button" class="close-one">❌</button>
  </div>

  <h1 class="header__first-section-modal-title">Macaronomania</h1>
  <p class="header__first-section-modal-sign-up">Авторизоваться</p>

  <form class="header__first-section-form-login ">
    <div class="header__first-section-form-label">
      <label for="name">Имя</label><br>
    </div>

    <input type="text" id="name" name="name" placeholder="Впишите ваш имя " class="header__first-section-form-input"><br>
    <span id="name-error" class="form-error-text hidden"></span>


    <div class="header__first-section-form-label">
      <label for="password">Пароль</label><br>
    </div>

    <input type="password" id="password" name="password" placeholder="********" class="header__first-section-form-input"><br>
    <span id="password-error" class="form-error-text hidden"></span>

  </form>

  <div class="header__first-section-form-button-wrapper">
    <button class="header__first-section-form-button">Авторизоваться</button>
  </div>

  <div class="header__first-section-form-text">
    <p class="header__first-section-form-text-p">У вас нет аккаунта? </p>
    <a class="header__first-section-form-text-a">Зарегистрируйся</a>
  </div>
</div>
`
  }
}

export default SignInModal;