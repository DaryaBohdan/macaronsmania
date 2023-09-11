const UpdateProfileModal = {
  render: () => {
    return /*html*/ `
<div id="update-profile-modal" class="main__profile-modal-wrapper hidden">
  <div class="main__profile-modal">
    <button type="button" class="close-one">❌</button>
    <h1 class="main__modal-title">Изменение данных</h1>

    <div class="main__profile-modal-info">
      <div class="main__profile-modal-label-one">
        <label for="lastname">Фамилия*</label><br>
        <input type="text" id="lastname" name="lastname" class="main__personal-area-info-input"><br>
      </div>
    </div>

    <div class="main__profile-modal-info">
      <div class="main__profile-modal-label-one">
        <label for="firstname">Имя*</label><br>
        <input type="text" id="firstname" name="firstname" class="main__personal-area-info-input"><br>
      </div>
    </div>

    <div class="main__profile-modal-info">
      <div class="main__profile-modal-label-one">
        <label for="phone">Телефон*</label><br>
        <input type="text" id="phone" name="phone" class="main__personal-area-info-input"><br>
      </div>
    </div>


    <div class="main__profile-modal-info">
      <div class="main__profile-modal-label-one">
        <label for="email">email*</label><br>
        <input type="text" id="email" name="email" class="main__personal-area-info-input"><br>
      </div>
    </div>

    <div class="main__profile-modal-info">
      <div class="main__profile-modal-label-one">
        <label for="city">Город*</label><br>
        <input type="text" id="city" name="city" class="main__personal-area-info-input"><br>
      </div>
    </div>


    <div class="main__profile-modal-info">
      <div class="main__profile-modal-label-one">
        <label for="street">Улица, дом*</label><br>
        <input type="text" id="street" name="street" class="main__personal-area-info-input"><br>
      </div>
    </div>

    <div class="main__profile-modal-info">
      <div class="main__profile-modal-label-one">
        <label for="flat">Квартира / офис*</label><br>
        <input type="text" id="flat" name="flat" class="main__personal-area-info-input"><br>
      </div>
    </div>


    <div class="main__profile-modal-info">
      <div class="main__profile-modal-label-one">
        <label for="entrance">Подъезд</label><br>
        <input type="text" id="entrance" name="entrance" class="main__personal-area-info-input"><br>
      </div>
    </div>

    <div class="main__profile-modal-button-wrapper">
      <button class="main__profile-modal-title-safe"> Cохранить</button>
      <button class="main__profile-modal-title-cancel"> Отмена</button>
    </div>
  </div>
</div>
`;
  }
}

export default UpdateProfileModal;