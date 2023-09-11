const Menu = {
  id: "menu",
  title: "Меню",
  render: () => {
    return /*html*/`
      ${Header.render()}
      ${Welcome.render("Меню")}
    `;
  }
}

export default Menu;