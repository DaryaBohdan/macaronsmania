const MacaronsMenu = {
  render: () => {
    return /*html*/ `
<div class="third-section">
  <div class="third-section-vector-wrapper">
    <svg width="1300" height="157.7" viewBox="0 0 1600 194" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1600 137.524L1533.33 120.333C1466.67 103.143 1333.33 68.7618 1200 51.5713C1066.67 34.3809 933.333 34.3809 800 68.7618C666.667 103.143 533.333 171.905 400 189.095C266.667 206.285 133.333 171.905 66.6666 154.714L0 137.524V-4.57764e-05H66.6666C133.333 -4.57764e-05 266.667 -4.57764e-05 400 -4.57764e-05C533.333 -4.57764e-05 666.667 -4.57764e-05 800 -4.57764e-05C933.333 -4.57764e-05 1066.67 -4.57764e-05 1200 -4.57764e-05C1333.33 -4.57764e-05 1466.67 -4.57764e-05 1533.33 -4.57764e-05H1600V137.524Z" fill="white">
      </path>
    </svg>
  </div>
  <h1 class="third-section-title wow animate__rollIn">Наше меню</h1>
  <p class="third-section-text">Здесь вы можете просмотреть доступные на данный момент вкусы макарон и сделать
    заказ.
  </p>
  <div id="macarons-menu" class="swiper third-section-menu-wrapper">
    <div class="swiper-wrapper"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

  </div>
  <!-- <div class="third-section-menu-box">
          <div class="third-section-menu-box-heart-wrapper">
            <div class="third-section-menu-box-heart"></div>
          </div>
          <div class="third-section-menu-box-img-wrapper" >
            <div class="third-section-menu-box-img-berry"></div>
          </div>
         
          <div class="third-section-menu-box-rect">
            <p class="third-section-menu-box-text">Макаронс с ягодным ганашем</p>
          </div>
          <div class="third-section-menu-box-price-wrapper">
            <p class="third-section-menu-box-price">Цена: 4 BYN</p>
            <button class="third-section-menu-box-button">Добавить</button>
          </div>
        </div>

        <div class="third-section-menu-box">
        <div class="third-section-menu-box-heart-wrapper">
            <div class="third-section-menu-box-heart"></div>
          </div>
          <div class="third-section-menu-box-img-wrapper" >
            <div class="third-section-menu-box-img-choco"></div>
          </div>
          
          <div class="third-section-menu-box-rect">
            <p class="third-section-menu-box-text">Макаронс с шоколадом</p>
          </div>
          <div class="third-section-menu-box-price-wrapper">
            <p class="third-section-menu-box-price">Цена: 4 BYN</p>
            <button class="third-section-menu-box-button">Добавить</button>
          </div>
        </div>

         <div class="third-section-menu-box">
         <div class="third-section-menu-box-heart-wrapper">
            <div class="third-section-menu-box-heart"></div>
          </div>
          <div class="third-section-menu-box-img-wrapper" >
            <div class="third-section-menu-box-img-tea">
          </div>
          </div>
          
          <div class="third-section-menu-box-rect">
            <p class="third-section-menu-box-text">Макаронс с чаем матча и лаймом</p>
          </div>
          <div class="third-section-menu-box-price-wrapper">
            <p class="third-section-menu-box-price">Цена: 4 BYN</p>
            <button class="third-section-menu-box-button">Добавить</button>
          </div>
        </div> 

        <div class="third-section-menu-box">
        <div class="third-section-menu-box-heart-wrapper">
            <div class="third-section-menu-box-heart"></div>
          </div>
          <div class="third-section-menu-box-img-wrapper" >
          <div class="third-section-menu-box-img-coconut"></div>
          </div>
          
          <div class="third-section-menu-box-rect">
            <p class="third-section-menu-box-text">Макаронс с кокосовым ганашем</p>
          </div>
          <div class="third-section-menu-box-price-wrapper">
            <p class="third-section-menu-box-price">Цена: 4 BYN</p>
            <button class="third-section-menu-box-button">Добавить</button>
          </div>
        </div>

        <div class="third-section-menu-box">
        <div class="third-section-menu-box-heart-wrapper">
            <div class="third-section-menu-box-heart"></div>
          </div>
          <div class="third-section-menu-box-img-wrapper" >
          <div class="third-section-menu-box-img-lime"></div>
         </div>
          
          
          <div class="third-section-menu-box-rect">
            <p class="third-section-menu-box-text">Макаронс с фисташкой </p>
          </div>
          <div class="third-section-menu-box-price-wrapper">
            <p class="third-section-menu-box-price">Цена: 4 BYN</p>
            <button class="third-section-menu-box-button">Добавить</button>
          </div>
        </div>


        <div class="third-section-menu-box">
          <div class="third-section-menu-box-heart-wrapper">
            <div class="third-section-menu-box-heart"></div>
          </div>
          <div class="third-section-menu-box-img-wrapper" >
          <div class="third-section-menu-box-img-lavanda"></div>
  </div>
          
          
          <div class="third-section-menu-box-rect">
            <p class="third-section-menu-box-text">Макаронс с лавандовой</p>
          </div>
          <div class="third-section-menu-box-price-wrapper">
            <p class="third-section-menu-box-price">Цена: 4 BYN</p>
            <button class="third-section-menu-box-button">Добавить</button>
          </div>
        </div>


        <div class="third-section-menu-box">
          <div class="third-section-menu-box-heart-wrapper">
            <div class="third-section-menu-box-heart"></div>
          </div>
          <div class="third-section-menu-box-img-wrapper" >
          <div class="third-section-menu-box-img-strawberry"></div>
  </div>
          
          <div class="third-section-menu-box-rect">
            <p class="third-section-menu-box-text">Макаронс клубничный</p>
          </div>
          <div class="third-section-menu-box-price-wrapper">
            <p class="third-section-menu-box-price">Цена: 4 BYN</p>
            <button class="third-section-menu-box-button">Добавить</button>
          </div>
        </div>


        <div class="third-section-menu-box">
          <div class="third-section-menu-box-heart-wrapper">
            <div class="third-section-menu-box-heart"></div>
          </div>
          <div class="third-section-menu-box-img-wrapper">
          <div class="third-section-menu-box-img-blueberry-mint"></div>
  </div>
          
          <div class="third-section-menu-box-rect">
            <p class="third-section-menu-box-text">Макаронс чернично-мятный </p>
          </div>
          <div class="third-section-menu-box-price-wrapper">
            <p class="third-section-menu-box-price">Цена: 4 бел.р</p>
            <button class="third-section-menu-box-button">Добавить</button>
          </div>
        </div>
      </div> -->

  <!-- 
      <div class="third-section-pointer-one">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="30" fill="white" />
        </svg>
        <div class="third-section-pointer-one-img">
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <g clip-path="url(#clip0_19_72)">
              <path
                d="M26.1667 14.3541H10.1936L17.5304 7.01725L15.6667 5.16663L5.16669 15.6666L15.6667 26.1666L17.5173 24.316L10.1936 16.9791H26.1667V14.3541Z"
                fill="#FBC2EB" />
            </g>
            <defs>
              <clipPath id="clip0_19_72">
                <rect width="31" height="31" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div> 

      <div class="third-section-pointer-two">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="30" fill="white" />
        </svg>
        <div class="third-section-pointer-two-img">
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <g clip-path="url(#clip0_19_75)">
              <path
                d="M15.5 5L13.6494 6.85062L20.9731 14.1875H5V16.8125H20.9731L13.6494 24.1494L15.5 26L26 15.5L15.5 5Z"
                fill="#FBC2EB" />
            </g>
            <defs>
              <clipPath id="clip0_19_75">
                <rect width="31" height="31" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div> -->
  <div class="third-section-vector-two-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" width="1300" height="200" viewBox="0 0 1600 210" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 60.7925L66.6667 79.3691C133.333 97.9456 266.667 135.099 400 153.675C533.333 172.252 666.667 172.252 800 135.099C933.333 97.9456 1066.67 23.6394 1200 5.0629C1333.33 -13.5136 1466.67 23.6394 1533.33 42.216L1600 60.7925V209.405H1533.33C1466.67 209.405 1333.33 209.405 1200 209.405C1066.67 209.405 933.333 209.405 800 209.405C666.667 209.405 533.333 209.405 400 209.405C266.667 209.405 133.333 209.405 66.6667 209.405H0L0 60.7925Z" fill="white" />
    </svg>
  </div>
</div>
`;
  }
}

export default MacaronsMenu;