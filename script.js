const FORM_ENDPOINT = 'https://formspree.io/f/meepqlbo';
const WHATSAPP_NUMBER = '6583889168';

const whatsappMessage = encodeURIComponent(
  'Hello Sprintz Holdings, I would like to make a business enquiry regarding your products, projects, and markets.'
);
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const whatsappButton = document.getElementById('whatsapp-button');
const floatingWhatsapp = document.getElementById('floating-whatsapp');

if (whatsappButton) whatsappButton.href = whatsappHref;
if (floatingWhatsapp) floatingWhatsapp.href = whatsappHref;

const form = document.getElementById('enquiry-form');
const statusBox = document.getElementById('form-status');

function showStatus(type, text) {
  statusBox.className = `status-box ${type}`;
  statusBox.textContent = text;
}

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    statusBox.className = 'status-box hidden';
    statusBox.textContent = '';

    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        form.reset();
        showStatus('success', 'Thank you. Your enquiry has been submitted successfully.');
      } else {
        showStatus('error', 'Unable to submit your enquiry. Please try again or use WhatsApp.');
      }
    } catch (error) {
      showStatus('error', 'Unable to submit your enquiry. Please try again or use WhatsApp.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}
