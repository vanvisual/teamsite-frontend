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