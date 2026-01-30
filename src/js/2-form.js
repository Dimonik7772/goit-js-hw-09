const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};
form.addEventListener('input', () => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
populateData();
function populateData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
}
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  formData.email = '';
  formData.message = '';

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
});
