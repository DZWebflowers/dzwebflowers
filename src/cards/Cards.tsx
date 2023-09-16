const hoverImageSrcsFirstSection = [
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a18ba1fd5bcfa2fb7ae19e_service-branding-active.svg',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf80be57fc479473933_services-designing-active.svg',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf8b620b3816fd22c4f_services-development-active.svg',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf80ae7410c923feec9_services-enterprise-active.svg',
];

const hoverImageSrcsSecondSection = [
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a82ab5169d372002f36537_octacode-hovered-project.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a82ab453d41a572162dc36_webflowers-hovered-project.webp',
];

const hoverImageSrcsThirdCard = [
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/647602b455bdd6a1ee761d8d_branding-healthy-hovered.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/647602b4b119e5e438dd50f5_branding-forest-hovered.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/647602b450d16565dff6841a_branding-webflowers-hovered.png',
];

export function initializeCardAnimation() {
  const cardWrappers = document.querySelectorAll('[card-animation-wrapper="card-interaction"]');
  const thirdCardWrapper = document.querySelector('.card-branding-container');
  const thirdCardImages = thirdCardWrapper?.querySelectorAll('img');

  function addCardAnimation() {
    cardWrappers.forEach((cardWrapper, index) => {
      const innerWrapper = cardWrapper.querySelector(
        '[card-inner-wrapper="card-inner-interaction"]'
      );
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

    function toggleCardInnerContainer() {
      const healthyCard = document.querySelector<HTMLElement>('[card="healthy"]');
      const forestDiaryCard = document.querySelector<HTMLElement>('[card="forestdiary"]');
      const webFlowersCard = document.querySelector<HTMLElement>('[card="webflowers"]');
      const cardAnimationWrapper = document.querySelectorAll('.card-visible-on-load');
      const brandingAnimationWrapper = document.querySelectorAll('.branding-card');
      const cardInnerContainersHidden = document.querySelectorAll('.card-unvisible-on-load');
      const brandingImageCardContainer = document.querySelectorAll(
        '.branding-image-inner-container'
      );
      let activeCardIndex = -1;

      brandingImageCardContainer.forEach((element, index) => {
        element.addEventListener('click', () => {
          if (index === 0) {
            brandingAnimationWrapper.forEach((wrapper) => {
              wrapper.addEventListener('click', (event) => {
                closeActiveCard(cardAnimationWrapper, cardInnerContainersHidden, activeCardIndex);
                event.stopPropagation();

                if (healthyCard) {
                  healthyCard.style.display = 'flex';
                  healthyCard.style.alignSelf = 'baseline';
                }

                (wrapper as HTMLDivElement).style.opacity = '0';
                (wrapper as HTMLDivElement).style.display = 'none';

                if (forestDiaryCard) {
                  forestDiaryCard.style.opacity = '0%';
                  forestDiaryCard.style.transition = 'opacity 2s ease';
                  forestDiaryCard.style.display = 'none';
                }

                if (webFlowersCard) {
                  webFlowersCard.style.opacity = '0%';
                  webFlowersCard.style.transition = 'opacity 2s ease';
                  webFlowersCard.style.display = 'none';
                }

                setTimeout(() => {
                  if (healthyCard) {
                    healthyCard.style.transition = 'opacity 2s ease';
                    healthyCard.style.opacity = '100%';
                  }
                }, 300);
              });

              if (healthyCard) {
                healthyCard.addEventListener('click', (event) => {
                  healthyCard.style.display = 'none';
                  (wrapper as HTMLDivElement).style.display = 'flex';

                  setTimeout(() => {
                    (wrapper as HTMLElement).style.transition = 'opacity 2s ease';
                    healthyCard.style.opacity = '0';
                    (wrapper as HTMLElement).style.opacity = '100%';
                  }, 300);
                });
              }
            });
          } else if (index === 1) {
            brandingAnimationWrapper.forEach((wrapper, index) => {
              wrapper.addEventListener('click', (event) => {
                closeActiveCard(cardAnimationWrapper, cardInnerContainersHidden, activeCardIndex);

                event.stopPropagation();
                if (forestDiaryCard) {
                  forestDiaryCard.style.display = 'flex';
                }

                if (healthyCard) {
                  healthyCard.style.opacity = '0%';
                  healthyCard.style.transition = 'opacity 2s ease';
                  healthyCard.style.display = 'none';
                }

                if (webFlowersCard) {
                  webFlowersCard.style.opacity = '0%';
                  webFlowersCard.style.transition = 'opacity 2s ease';
                  webFlowersCard.style.display = 'none';
                }

                (wrapper as HTMLDivElement).style.opacity = '0';
                (wrapper as HTMLDivElement).style.display = 'none';

                setTimeout(() => {
                  if (forestDiaryCard) {
                    forestDiaryCard.style.transition = 'opacity 2s ease';
                    forestDiaryCard.style.opacity = '100%';
                  }
                }, 300);
              });

              if (forestDiaryCard) {
                forestDiaryCard.addEventListener('click', (event) => {
                  forestDiaryCard.style.display = 'none';
                  (wrapper as HTMLDivElement).style.display = 'flex';

                  setTimeout(() => {
                    (wrapper as HTMLElement).style.transition = 'opacity 2s ease';
                    forestDiaryCard.style.opacity = '0';
                    (wrapper as HTMLElement).style.opacity = '100%';
                  }, 300);
                });
              }
            });
          } else if (index === 2) {
            brandingAnimationWrapper.forEach((wrapper, index) => {
              wrapper.addEventListener('click', (event) => {
                closeActiveCard(cardAnimationWrapper, cardInnerContainersHidden, activeCardIndex);

                event.stopPropagation();
                if (webFlowersCard) {
                  webFlowersCard.style.display = 'flex';
                  webFlowersCard.style.alignSelf = 'baseline';
                }

                (wrapper as HTMLDivElement).style.opacity = '0';
                (wrapper as HTMLDivElement).style.display = 'none';

                if (forestDiaryCard) {
                  forestDiaryCard.style.opacity = '0%';
                  forestDiaryCard.style.transition = 'opacity 2s ease';
                  forestDiaryCard.style.display = 'none';
                }

                if (healthyCard) {
                  healthyCard.style.opacity = '0%';
                  healthyCard.style.transition = 'opacity 2s ease';
                  healthyCard.style.display = 'none';
                }

                setTimeout(() => {
                  if (webFlowersCard) {
                    webFlowersCard.style.transition = 'opacity 2s ease';
                    webFlowersCard.style.opacity = '100%';
                  }
                }, 300);
              });

              if (webFlowersCard) {
                webFlowersCard.addEventListener('click', (event) => {
                  webFlowersCard.style.display = 'none';
                  (wrapper as HTMLDivElement).style.display = 'flex';

                  setTimeout(() => {
                    (wrapper as HTMLElement).style.transition = 'opacity 2s ease';
                    webFlowersCard.style.opacity = '0';
                    (wrapper as HTMLElement).style.opacity = '100%';
                  }, 300);
                });
              }
            });
          }
        });
      });

      cardAnimationWrapper.forEach((wrapper, index) => {
        const innerContainer = cardInnerContainersHidden[index] as HTMLElement;
        if (innerContainer) {
          wrapper.addEventListener('click', (event) => {
            event.stopPropagation();

            if (index === activeCardIndex) {
              closeCard();
            } else {
              closeActiveCard(cardAnimationWrapper, cardInnerContainersHidden, activeCardIndex);
              const cards = [healthyCard, forestDiaryCard, webFlowersCard];

              cards.forEach((card) => {
                if (card) {
                  card.style.opacity = '0%';
                  card.style.transition = 'opacity 2s ease';
                  card.style.display = 'none';
                }
              });

              brandingAnimationWrapper.forEach((wrapper) => {
                (wrapper as HTMLElement).style.opacity = '1';
                (wrapper as HTMLElement).style.transition = 'opacity 2s ease';
                (wrapper as HTMLDivElement).style.display = 'flex';
              });

              openCard();
            }
          });

          innerContainer.addEventListener('click', (event) => {
            event.stopPropagation();
            closeCard();
          });

          function openCard() {
            innerContainer.style.display = 'block';
            (wrapper as HTMLDivElement).style.opacity = '0';
            (wrapper as HTMLDivElement).style.display = 'none';

            setTimeout(() => {
              innerContainer.style.transition = 'opacity 2s ease';
              innerContainer.style.opacity = '100%';
            }, 300);

            activeCardIndex = index;
          }

          function closeCard() {
            innerContainer.style.opacity = '0';
            innerContainer.style.display = 'none';
            (wrapper as HTMLDivElement).style.display = 'block';

            setTimeout(() => {
              (wrapper as HTMLElement).style.transition = 'opacity 2s ease';
              (wrapper as HTMLElement).style.opacity = '100%';
            }, 300);

            activeCardIndex = -1;
          }
        }
      });
    }
    toggleCardInnerContainer();
  }

  addCardAnimation();
}

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

function closeActiveCard(
  cardAnimationWrapper: NodeListOf<Element>,
  cardInnerContainersHidden: NodeListOf<Element>,
  activeCardIndex: number
) {
  if (activeCardIndex !== -1) {
    const activeWrapper = cardAnimationWrapper[activeCardIndex] as HTMLElement;
    const activeInnerContainer = cardInnerContainersHidden[activeCardIndex] as HTMLElement;
    activeInnerContainer.style.opacity = '0';
    activeInnerContainer.style.display = 'none';
    activeWrapper.style.display = 'block';

    setTimeout(() => {
      activeWrapper.style.transition = 'opacity 2s ease';
      activeWrapper.style.opacity = '100%';
    }, 300);
  }
}
