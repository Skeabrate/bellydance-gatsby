export const closeModal = (bodyStyleTop) => {
  document.body.style.overflow = 'unset';
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(bodyStyleTop || '0') * -1);
};
