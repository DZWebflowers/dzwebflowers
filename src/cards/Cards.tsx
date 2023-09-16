import { hoverImageSrcsFirstSection, hoverImageSrcsSecondSection, hoverImageSrcsThirdCard } from 'src/cards/CardLinks';
import { toggleCardInnerContainer } from 'src/cards/ToggleCard';

export function initializeCardAnimation() {
  const cardWrappers = document.querySelectorAll('[card-animation-wrapper="card-interaction"]');
  const thirdCardWrapper = document.querySelector('.card-branding-container');
  const thirdCardImages = thirdCardWrapper?.querySelectorAll('img');

  function addCardAnimation() {
    cardWrappers.forEach((cardWrapper, index) => {
      const innerWrapper = cardWrapper.querySelector('[card-inner-wrapper="card-inner-interaction"]');
      const defaultImage = innerWrapper?.querySelector('img') as HTMLImageElement | null;
      const defaultImageSrc = defaultImage?.src;

      if (innerWrapper && defaultImage) {
        defaultImage.removeAttribute('srcset');
        defaultImage.removeAttribute('sizes');
        innerWrapper.addEventListener('mouseover', () => {
          if (defaultImageSrc) {
            const hoverImageSrc =
              index < hoverImageSrcsFirstSection.length
                ? hoverImageSrcsFirstSection[index]
                : hoverImageSrcsSecondSection[index - hoverImageSrcsFirstSection.length];
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

    if (thirdCardWrapper && thirdCardImages) {
      thirdCardImages.forEach((image, index) => {
        const defaultImageSrc = image.src;

        image.addEventListener('mouseover', () => {
          if (defaultImageSrc) {
            image.src = hoverImageSrcsThirdCard[index];
          }
        });

        image.addEventListener('mouseout', () => {
          if (defaultImageSrc) {
            image.src = defaultImageSrc;
          }
        });
      });
    }

    toggleCardInnerContainer();
  }

  addCardAnimation();
}
