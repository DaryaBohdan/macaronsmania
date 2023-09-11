const Review = {
  render: (name, description) => {
    return /*html*/ `
<div class="main__review  swiper-slide ">
  <div class="main__review-data">
    <h3>${name}</h3>
    <p>${description}</p>
  </div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
`;
  }
}

export default Review;