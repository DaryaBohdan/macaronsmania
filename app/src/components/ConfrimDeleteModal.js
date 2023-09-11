const ConfirmDeleteModal = {
  render: () => {
    return /*html*/`
      <div class="main__delete-modal-wrapper hidden">
        <div class="main__delete-modal">
          <button type="button" class="close-one">❌</button>
          <h1 class="main__modal-title">Удалить товар?</h1>

          <div class="main__delete-modal-button-wrapper">
            <button class="main__delete-modal-title-delete">Удалить</button>
            <button class="main__delete-modal-title-cancel">Отмена</button>
          </div>
        </div>
      </div>
    `;
  }
}

export default ConfirmDeleteModal;