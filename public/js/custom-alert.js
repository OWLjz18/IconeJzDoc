/** @module js/custom-alert */

/** 
 * Create a message to be displayed when calling this function. And after a few seconds it will be deleted.
 */
const customAlert = () => {
  const container = document.querySelector('.container');

  const customAlert = document.createElement('p');
  customAlert.setAttribute('class', 'custom-alert');

  const icon = document.createElement('icone-jz');
  icon.setAttribute('class', 'custom-alert__icon');
  icon.setAttribute('is', 'star');
  
  const text = document.createElement('span');
  text.setAttribute('class', 'custom-alert__text');
  text.innerText = 'Successfully Copied';

  customAlert.append(icon, text, icon.cloneNode());
  container.append(customAlert);
  
  setTimeout(() => customAlert.classList.add('custom-alert--on'));
  setTimeout(() => {
    customAlert.classList.remove('custom-alert--on');
    customAlert.classList.add('custom-alert--off');

    return new Promise((res) => setTimeout(() => res(), 1500))
      .then(() => {
        customAlert.classList.remove('custom-alert--off');
        container.removeChild(customAlert);
      })
      .catch((err) => console.warn(err));
  }, 1500);
};

export default customAlert;
