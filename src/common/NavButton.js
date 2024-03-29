// NavButton.js

export function NavButton(text, componentFn, classes = []) {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add(...classes);
  button.innerText = text;
  button.className = "navbutton"

  button.addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigate', {
      detail: componentFn
    });

    document.body.dispatchEvent(navigationEvent);
  });

  return button;
}
