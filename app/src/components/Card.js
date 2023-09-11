const Card = {
  render: (id, name, price, src) => {
    return /*html*/ `
<div id="${id}" class="third-section-menu-box swiper-slide wow animate__zoomIn">
  <div class="third-section-menu-box-heart-wrapper">
    <!-- <div  class="third-section-menu-box-top"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="29" viewBox="0 0 105 29" fill="none" > 
        <path d="M94.5884 14.7839L104.048 28.5H0.5V0.5H104.048L94.5884 14.2161L94.3926 14.5L94.5884 14.7839Z" fill="#F5F5F5" stroke="#755FBB" text="Хит продаж"/>
        </svg>
        </div> -->
    <div id="${id}-heart" class="third-section-menu-box-heart"></div>
  </div>
  <div class="third-section-menu-box-img-wrapper">
    <img class="third-section-menu-box-img" src="${src}"></img>
  </div>

  <div class="third-section-menu-box-rect">
    <p class="third-section-menu-box-text">${name}</p>
  </div>
  <div class="third-section-menu-box-price-wrapper">
    <p class="third-section-menu-box-price">Цена: ${price} BYN</p>
    <button id="${id}-button" class="third-section-menu-box-button">Добавить</button>
  </div>
</div>
`;
  }
}

export default Card;