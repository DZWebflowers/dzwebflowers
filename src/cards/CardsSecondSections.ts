import { hoverImageSrcsSecondSection } from 'src/cards/CardLinks';

// Handle second section separately
const secondSectionWrappers = document.querySelectorAll('.modified-card-animation-wrapper');

secondSectionWrappers.forEach((cardWrapper, index) => {
  const innerWrapper = cardWrapper.querySelector('[card-inner-wrapper="card-inner-interaction"]');
  const defaultImage = innerWrapper?.querySelector('img') as HTMLImageElement | null;
  const defaultImageSrc = defaultImage?.src;

  if (innerWrapper && defaultImage) {
    innerWrapper.addEventListener('mouseover', () => {
      if (defaultImageSrc) {
        const hoverImageSrc = hoverImageSrcsSecondSection[index];
        defaultImage.src = hoverImageSrc;
      }
    });

    innerWrapper.addEventListener('mouseout', () => {
      if (defaultImageSrc) {
        defaultImage.src = defaultImageSrc;
      }
    });
  }
});
