import { useEffect, useState } from "react";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export const useToggleClass = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
    if (isHamburgerClicked) {
      setIsHamburgerClicked(false);
    }
  };

  return [isOpen, toggleClass, isHamburgerClicked, setIsHamburgerClicked];
};

export function animateLetters(className) {
  function applyRandomTransform(letter) {
    if (!letter.dataset.randomX || !letter.dataset.randomY) {
      letter.dataset.randomX = (Math.floor(Math.random() * 21) - 10) / 20;
      letter.dataset.randomY = (Math.floor(Math.random() * 21) - 10) / 10;
    }

    letter.style.transform = `translateX(${letter.dataset.randomX}rem) translateY(${letter.dataset.randomY}rem)`;
  }

  function removeRandomTransform(letter) {
    letter.style.transform = 'none';
  }

  const links = document.querySelectorAll(className);

  links.forEach((link) => {
    const text = link.textContent;
    link.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
      const letterSpan = document.createElement('span');
      letterSpan.classList.add('letter');
      letterSpan.textContent = text[i] === ' ' ? '\u00A0' : text[i];
      link.appendChild(letterSpan);
    }

    link.addEventListener('mouseover', () => {
      const letters = link.querySelectorAll('.letter');
      letters.forEach((letter) => {
        applyRandomTransform(letter);
      });
    });

    link.addEventListener('mouseout', () => {
      const letters = link.querySelectorAll('.letter');
      letters.forEach((letter) => {
        removeRandomTransform(letter);
      });
    });
  });
}

