const Footer = {
  render: () => {
    return /*html*/`
      <footer>
      
      <div class="footer__logo">
        <div class="header__first-section-logo-wrapper">
          <div class="header__first-section-logo">
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none">
              <circle cx="23.5" cy="23.5" r="23" stroke="white"></circle>
            </svg>
            <div class="header__first-section-logo-picture"></div>
            
          </div>     
      </div>
      <p class="header__first-section-logo-title">Macaronsmania</p>  
      </div>
      
      <div class="footer__subscription">
        <p>Подпишитесь на рассылку и будьте в курсе акций</p>
        <div>
          <input type="text" id="email-sub" name="email-sub" placeholder="Впишите ваш email " class="footer__emai-sub">
          <button class="footer__button-send">Отправить</button>

        </div>
        
      </div>

      <div class="footer__contacts">
        <p>Контакты</p>
        <p>375-29-777-77-00</p>
        <p>macaronsmania@gmail.com</p>

      </div>

      

    </footer>



    `;
  }
}

export default Footer;