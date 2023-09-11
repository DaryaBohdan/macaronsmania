const SignUpModal = {
  render: () => {
    return /*html*/ `
<div id="signup-modal" class="header__first-section-modal-wrapper hidden">
  <div class="header__first-section-modal">
    <button type="button" class="close-one">❌</button>

    <h1 class="header__first-section-modal-title">Macaronomania</h1>
    <p class="header__first-section-modal-sign-up">Зарегистрироваться</p>

    <form class="header__first-section-form ">
      <div class="header__first-section-form-label">
        <label for="fname">Имя:</label><br>
      </div>

      <input type="text" id="name" name="name" placeholder="Впишите ваше имя" class="header__first-section-form-input">
      <br>
      <span id="name-error" class="form-error-text hidden"></span>


      <div class="header__first-section-form-label">
        <label for="email">Email</label><br>
      </div>

      <input type="text" id="email" name="email" placeholder="Впишите ваш email" class="header__first-section-form-input">
      <br>
      <span id="email-error" class="form-error-text hidden"></span>

      <div class="header__first-section-form-label">
        <label for="password">Пароль</label><br>
      </div>

      <input type="password" id="password" name="password" placeholder="********" class="header__first-section-form-input">
      <br>
      <span id="password-error" class="form-error-text hidden"></span>

      <div class="header__first-section-form-label">
        <label for="confirm">Подтвердите пароль</label><br>
      </div>

      <input type="password" id="confirm" name="confirm" placeholder="********" class="header__first-section-form-input">
      <br>
      <span id="confirm-error" class="form-error-text hidden"></span>
    </form>

    <div class="header__first-section-form-button-wrapper">
      <button class="header__first-section-form-button">Зарегистрироваться</button>
    </div>

    <div class="header__first-section-form-text">
      <p class="header__first-section-form-text-p">У вас уже есть аккаунт? </p>
      <a class="header__first-section-form-text-a">Авторизоваться</a>
    </div>
  </div>
</div>
`;
  }
}

export default SignUpModal;