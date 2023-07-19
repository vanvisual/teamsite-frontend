import { useEffect, useState } from "react";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export const useToggleClass = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, toggleClass];
}; 
