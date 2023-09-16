export function closeActiveCard(
  cardAnimationWrapper: NodeListOf<Element>,
  cardInnerContainersHidden: NodeListOf<Element>,
  activeCardIndex: number,
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
