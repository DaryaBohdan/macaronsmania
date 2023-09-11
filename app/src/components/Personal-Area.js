const PersonalArea = {
  render: () => {
    return /*html*/ `

<div class="main__personal-area-wrapper">
  <h1>Личный кабинет</h1>
  <div class="main__personal-area-info-wrapper">
    <div class="main__personal-area-info-text">
      <h2>Информация о получателе</h2>
      <div class="main__personal-area-info-button">Редактировать
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
      </div>
    </div>
    <div class="main__personal-area-info">
      <div class="main__personal-area-info-label">
        <label for="lastname">Фамилия*</label>
        <p id="lastname" class="main__personal-area-info-name"></p>
        <!-- <input type="text" id="lastname" name="lastname" class="main__personal-area-info-input"><br> -->
      </div>

      <div class="main__personal-area-info">
        <div class="main__personal-area-info-label">
          <label for="firstname">Имя*</label>
          <p id="firstname" class="main__personal-area-info-name"></p>
          <!-- <input type="text" id="firstname" name="firstname" class="main__personal-area-info-input"><br> -->
        </div>
      </div>


      <div class="main__personal-area-info">
        <div class="main__personal-area-info-label">
          <label for="phone">Телефон*</label>
          <p id="phone" class="main__personal-area-info-name"></p>
          <!-- <input type="text" id="phone" name="phone" class="main__personal-area-info-input"><br> -->
        </div>
      </div>

      <div class="main__personal-area-info">
        <div class="main__personal-area-info-label">
          <label for="email">email*</label>
          <p id="email" class="main__personal-area-info-name"></p>
          <!-- <input type="text" id="phone" name="phone" class="main__personal-area-info-input"><br> -->
        </div>
      </div>


    </div>
  </div>

  <div class="main__personal-area-info-wrapper">
    <div class="main__personal-area-info-text">
      <h2>Адрес доставки</h2>
    </div>
    <div class="main__personal-area-info">
      <div class="main__personal-area-info-label">
        <label for="city">Город*</label>
        <p id="city" class="main__personal-area-info-name"></p>
        <!-- <input type="text" id="city" name="city" class="main__personal-area-info-input"><br> -->
      </div>


      <div class="main__personal-area-info">
        <div class="main__personal-area-info-label">
          <label for="street">Улица*</label>
          <p id="street" class="main__personal-area-info-name"></p>
          <!-- <input type="text" id="flat" name="flat" class="main__personal-area-info-input"><br> -->
        </div>
      </div>

      <div class="main__personal-area-info">
        <div class="main__personal-area-info-label">
          <label for="flat">Квартира / офис*</label>
          <p id="flat" class="main__personal-area-info-name"></p>
          <!-- <input type="text" id="flat" name="flat" class="main__personal-area-info-input"><br> -->
        </div>
      </div>

      <div class="main__personal-area-info">
        <div class="main__personal-area-info-label">
          <label for="entrance">Подъезд</label>
          <p id="entrance" class="main__personal-area-info-name"></p>
          <!-- <input type="text" id="entrance" name="entrance" class="main__personal-area-info-input"><br> -->
        </div>
      </div>

    </div>

  </div>

</div>




`
  }
}



export default PersonalArea;