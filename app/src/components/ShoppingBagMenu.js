const ShoppingBagMenu =  {
  render : () => {
    return /*html*/`
    <div class="header__shopping-bag-wrapper"> 
      <div class="header__shopping-bag">
       
        <h1>Корзина покупок</h1>
        <!-- <div class="header__shopping-bag-text">
        <p>Наименование</p>
        <p>Цена</p>
        <p>Количество</p>
        <p>Стоимость</p>
        </div> -->
        <div class="header__shopping-bag-items-wrapper"></div>
        <div class="header__shoppimg-bag-total-price"> 
          <p>Итого:</p>
         </div>
        <div class="header__shopping-bag-buttons-wrapper">
        <button class="header__shopping-bag-remove-cart-button">
        
        <span>Очистить корзину </span>
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </button>
        <button class="header__shopping-bag-buttons"> Оплатить </button>
        </div>
      </div>
    </div>
`
  }
}



export default ShoppingBagMenu;