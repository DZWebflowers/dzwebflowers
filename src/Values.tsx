export function values(): void {
  const screenWidth: number = window.innerWidth;

  // Elements with certain IDs
  const affordabilityElement: HTMLElement | null = document.getElementById('affordability');
  const efficiencyElement: HTMLElement | null = document.getElementById('efficiency');
  const communicationElement: HTMLElement | null = document.getElementById('communication');
  const qualityElement: HTMLElement | null = document.getElementById('quality');
  const innovationElement: HTMLElement | null = document.getElementById('innovation');

  // Remove all classNames from elements
  const removeClassNames = (element: HTMLElement): void => {
    element.classList.remove('slide-left', 'slide-right', 'slide-bottom');
  };

  // Add classNames to elements
  const addClassNames = (element: HTMLElement, classNames: string[]): void => {
    element.classList.add(...classNames);
  };

  // Screen width > 991px
  if (screenWidth > 991) {
    if (efficiencyElement) removeClassNames(efficiencyElement);
    if (communicationElement) removeClassNames(communicationElement);

    if (affordabilityElement) addClassNames(affordabilityElement, ['slide-left']);
    if (communicationElement) addClassNames(communicationElement, ['slide-left']);
    if (qualityElement) addClassNames(qualityElement, ['slide-right']);
    if (innovationElement) addClassNames(innovationElement, ['slide-right']);
  }
  // Screen width <= 991px
  else if (screenWidth <= 991) {
    if (communicationElement) removeClassNames(communicationElement);
    if (qualityElement) removeClassNames(qualityElement);
    if (innovationElement) removeClassNames(innovationElement);

    if (efficiencyElement) addClassNames(efficiencyElement, ['slide-right']);
    if (communicationElement) addClassNames(communicationElement, ['slide-right']);
    if (affordabilityElement) addClassNames(affordabilityElement, ['slide-left']);
    if (qualityElement) addClassNames(qualityElement, ['slide-left']);
    if (innovationElement) addClassNames(innovationElement, ['slide-bottom']);
  }
  // Screen width < 480px
  if (screenWidth < 480) {
    if (qualityElement) removeClassNames(qualityElement);
    if (innovationElement) removeClassNames(innovationElement);

    if (affordabilityElement) addClassNames(affordabilityElement, ['slide-left']);
    if (qualityElement) addClassNames(qualityElement, ['slide-left']);
    if (innovationElement) addClassNames(innovationElement, ['slide-left']);
    if (efficiencyElement) addClassNames(efficiencyElement, ['slide-right']);
    if (communicationElement) addClassNames(communicationElement, ['slide-right']);
  }
}
