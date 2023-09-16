import { closeActiveCard } from 'src/cards/CloseActiveCard';

export function toggleCardInnerContainer() {
  const healthyCard = document.querySelector<HTMLElement>('[card="healthy"]');
  const forestDiaryCard = document.querySelector<HTMLElement>('[card="forestdiary"]');
  const webFlowersCard = document.querySelector<HTMLElement>('[card="webflowers"]');
  const cardAnimationWrapper = document.querySelectorAll('.card-visible-on-load');
  const brandingAnimationWrapper = document.querySelectorAll('.branding-card');
  const cardInnerContainersHidden = document.querySelectorAll('.card-unvisible-on-load');
  const brandingImageCardContainer = document.querySelectorAll('.branding-image-inner-container');
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
