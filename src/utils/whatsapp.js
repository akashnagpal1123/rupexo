const WHATSAPP_NUMBER = '918527497263';

export const getWhatsAppUrl = (message = '') => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}; 