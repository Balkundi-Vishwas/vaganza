import { useState, useEffect } from "react";

const PopupImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup when the component mounts
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("popupDismissed", "true"); // Store in localStorage to prevent reappearing
  };

  useEffect(() => {
    const popupDismissed = localStorage.getItem("popupDismissed");
    if (!popupDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // 1-second delay before showing the popup

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg">
        <button 
          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
          onClick={handleClose}
        >
          X
        </button>
        <img src="/images/popupimage.jpeg" alt="Popup" className="w-80 h-80 rounded-md" />
      </div>
    </div>
  );
};

export default PopupImage;
