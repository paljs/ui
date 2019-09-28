import { useEffect } from 'react';

export function useChangeColor(className) {
  useEffect(() => {
    const elements = document.getElementsByClassName(className);
    for (const element of elements) {
      element.innerHTML = element.innerHTML.replace(
        /(#[a-f0-9]{6}|rgba.*?\))/gi,
        '$&<span class="color-swatch" style="background: $&"></span>'
      );
      element.innerHTML = element.innerHTML.replace(/,/g, ', ');
    }
  }, [className]);
}
