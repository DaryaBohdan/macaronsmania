const Welcome = {
  render: (title) => {
    return /*html*/ `
<div class="header__first-section">
  <div class="header__first-section-outer-background">
    <div class="header__first-section-inner-background"></div>
    <div class="header__first-section-photo"></div>

  </div>
  <div class="header__first-section-title wow animate__zoomIn">
    <h1 class="header__first-section-main-title">${title}</h1>
    <h1 class="header__first-section-second-title">Мы знаем рецепт счастья и готовы поделиться с вами.</h1>
  </div>
  <!-- <div class="header__first-section-header-image"> -->
  <div class="header__first-section-header-image-one wow animate__heartBeat"></div>
  <div class="header__first-section-header-image-two wow animate__heartBeat"></div>
  <div class="header__first-section-header-image-three wow animate__heartBeat"></div>
  <div class="header__first-section-header-image-four wow animate__heartBeat"></div>
  <!-- </div> -->
  <div class="header__first-section-vector-wrapper">
    <svg viewBox="0 0 1600 203" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 58.9331L66.6667 76.9415C133.333 94.9498 266.667 130.967 400 148.975C533.333 166.983 666.667 166.983 800 130.967C933.333 94.9498 1066.67 22.9164 1200 4.90804C1333.33 -13.1003 1466.67 22.9164 1533.33 40.9248L1600 58.9331V203H1533.33C1466.67 203 1333.33 203 1200 203C1066.67 203 933.333 203 800 203C666.667 203 533.333 203 400 203C266.667 203 133.333 203 66.6667 203H0V58.9331Z" fill="white"></path>
    </svg>
  </div>
</div>
`;
  }
}

export default Welcome;