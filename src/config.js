export const SITE_CONFIG = {
  companyName: 'Sprintz Holdings Pte. Ltd.',
  companyTagline: 'International Trading Corporation',
  address: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
  email: 'chanlp@sprintz.com.sg',
  secondaryEmail: 'zannchan@gmail.com',
  formspreeEndpoint: 'https://formspree.io/f/meepqlbo',
  whatsappNumber: '6583889168',
  whatsappPrefill:
    'Hello Sprintz Holdings, I would like to enquire about your products or projects.',
  linkedInUrl: '',
};

export function getWhatsAppUrl() {
  const phone = (SITE_CONFIG.whatsappNumber || '').replace(/\D/g, '');
  const text = encodeURIComponent(SITE_CONFIG.whatsappPrefill || 'Hello');
  return phone
    ? `https://wa.me/${phone}?text=${text}`
    : '#contact';
}
