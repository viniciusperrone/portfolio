import { BsWhatsapp } from 'react-icons/bs';

export function FavButton() {
  const handleClick = () => {
    const phoneNumber = '+5592993041762';
    const message = encodeURIComponent('Olá, podemos conversar?');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      className="shadow-gradient fixed bottom-4 right-4 lg:right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform translate-y-0 hover:translate-y-px bounce-animation"
      onClick={handleClick}
    >
      <BsWhatsapp 
        color="white"
        size={30}
      />
    </button>
  );
};