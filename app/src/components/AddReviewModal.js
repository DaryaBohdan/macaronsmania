const AddReviewModal = {
  render: () => {
    return /*html*/ `
<div id="add-review-modal" class="main__review-modal-wrapper hidden">
  <div class="main__review-modal">
    <button type="button" class="close-one">❌</button>
    <h1 class="main__modal-title">Оставить отзыв</h1>

    <div class="main__review-modal-info">
      <input type="text" id="name" name="name" placeholder="Введите ваше имя" class="main__review-info-input">
      <span id="name-error" class="form-error-text hidden"></span>

      <textarea id="description" name="description" placeholder="Текст сообщения"></textarea>
      <span id="description-error" class="form-error-text hidden"></span>
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

export default AddReviewModal;