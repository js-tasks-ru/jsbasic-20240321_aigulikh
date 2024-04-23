function initCarousel() {
  let slides = document.querySelectorAll('.carousel__slide');
      
  let conteiner =  document.querySelector('.carousel__inner')
  let width = slides[0].offsetWidth;
  console.log(width);
  
  let rightClick = document.querySelector('.carousel__arrow_right');
  let leftClick = document.querySelector('.carousel__arrow_left');

  let position = 0;
  let slideIndex = 0;
  let slideIndexMax = slides.length - 1;

  if (slideIndex == 0) {
    leftClick.style.display = 'none';
  };

  rightClick.onclick = function () {

    position -= width;
    position = Math.max(position, -width * (slides.length - 1));
    conteiner.style.transform = `translateX(${position}px)`;
    
    slideIndex = Math.min(++slideIndex,slideIndexMax);

    if (slideIndex == slideIndexMax) {
      rightClick.style.display = 'none';
    };

    if (slideIndex != 0) {
      leftClick.style.display = '';
    };

  }

  
  leftClick.onclick = function () {
      position += width;
      position = Math.min(position,0);
      conteiner.style.transform = `translateX(${position}px)`;

      slideIndex = Math.max(--slideIndex,0);

      if (slideIndex == 0) {
        leftClick.style.display = 'none';
      };
  
      if (slideIndex != slideIndexMax) {
        rightClick.style.display = '';
      };

      }


}
