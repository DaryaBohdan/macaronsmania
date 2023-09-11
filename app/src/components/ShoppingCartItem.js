const ShoppingCartItem =  {
  render: (id, imageSrc, name, price, quantity) => {
    return /*html*/`
      <div id="${id}-cart-item" class="header__shopping-bag-order-list">
        <div class="header__shopping-bag-img"> 
          <img src="${imageSrc}"> 
        </div>

        <div class="header__shopping-bag-title">
          <p>${name}</p>
        </div>

        <div class="header__shopping-bag-counter">
          <div id="${id}-minus" class="header__shopping-bag-button header__shopping-bag-button-minus">-</div>
          <div id="${id}-quantity" class="header__shopping-bag-counter-number">${quantity}</div>
          <div id="${id}-plus" class="header__shopping-bag-button header__shopping-bag-button-plus">+</div>

        </div>

        <div class="header__shopping-bag-price">
          <p id="${id}-price">${price} BYN</p>
        </div>

        <div id="${id}-delete" class="header__shopping-bag-trash">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="51" viewBox="0 0 15 41" fill="none">
            <g clip-path="url(#clip0_449_12484)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 20.2929L11.0355 16.7574L11.7426 17.4645L8.20711 21L11.7426 24.5355L11.0355 25.2426L7.5 21.7071L3.96447 25.2426L3.25736 24.5355L6.79289 21L3.25736 17.4645L3.96447 16.7574L7.5 20.2929Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_449_12484">
            <rect width="30" height="50" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
          </svg>
       
        </div>
      </div>
  `
  }
}



export default ShoppingCartItem;