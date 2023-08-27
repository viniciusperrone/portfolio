export function useSendMessage() {
  const phoneNumber = '+5592993041762';
  const message = encodeURIComponent('Olá, podemos conversar?');
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  function sendMessage() {
    window.open(whatsappUrl, "_blank");
  }

  return {
    sendMessage
  }
}