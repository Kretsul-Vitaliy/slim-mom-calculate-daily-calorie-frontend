import { useState, useEffect } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        setIsShowing(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      setIsShowing(false);
      console.log(`handleBackdropClick`);
    }
  };

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return {
    isShowing,
    toggle,
    handleBackdropClick,
  };
};

export default useModal;
