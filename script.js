/*
  Central site settings.
  Update whatsappNumber if you want to switch the WhatsApp destination later.
*/
const SITE_CONFIG = {
  whatsappNumber: '6598810636',
  whatsappMessage:
    'Hello Sprintz, I would like to enquire about your products / sourcing support.',
  formspreeEndpoint: 'https://formspree.io/f/meepqlbo',
};

function buildWhatsAppUrl() {
  const number = SITE_CONFIG.whatsappNumber.replace(/\D/g, '');
  const message = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${number}?text=${message}`;
}

function wireWhatsAppLinks() {
  const url = buildWhatsAppUrl();
  document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

async function wireForm() {
  const form = document.getElementById('enquiry-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = 'Sending enquiry...';

    const formData = new FormData(form);

    try {
      const response = await fetch(SITE_CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        status.textContent = 'Thank you. Your enquiry has been sent successfully.';
      } else {
        status.textContent =
          'The form could not be submitted right now. Please try again or use WhatsApp.';
      }
    } catch (error) {
      status.textContent =
        'The form could not be submitted right now. Please try again or use WhatsApp.';
    }
  });
}

wireWhatsAppLinks();
wireForm();
