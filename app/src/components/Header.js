const Header = {
  render: () => {
    return /*html*/`
      <div class="header__first-section-header">
        <div class="header__first-section-logo-wrapper">
          <div class="header__first-section-logo">
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none">
              <circle cx="23.5" cy="23.5" r="23" stroke="white"></circle>
            </svg>
            <div class="header__first-section-logo-picture"></div>
          </div>
          <p class="header__first-section-logo-title ">Macaronsmania</p>
        </div>
        <div class="header__menu-breadcrumb">
          <a class="header__menu-breadcrumb-link" href="#" >
            <span class="icon-paragraph-justify"></span>
          </a>
        </div>
        <div class="header__first-section-nav-wrapper">
          <a href="#main" class="header__first-section-nav">Главная</a>
          <a href="#gallery" class="header__first-section-nav">Галерея</a>
          <a href="#personal" class="header__first-section-nav header__first-section-username hidden"></a>
          <a href="#" class="header__first-section-nav header__first-section-login">Вход</a>
          <a href="#" class="header__first-section-nav header__first-section-logout hidden">Выход</a>
          <a href="#shopping" class="header__first-section-shopping-bag-wrapper hidden">
            <svg width="59" height="59" vieBox="0 0 59 59" fill="none">
              <circle cx="29.5" cy="29.5" r="29.5" fill="white"></circle>
            </svg>
            <div class="header__first-section-shopping-bag-img"></div>
          </a>
        </div>
      </div>
    `;
  }
}

export default Header;