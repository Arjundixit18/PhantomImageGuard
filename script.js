document.querySelectorAll('.image-container img').forEach(img => {
  img.onerror = () => {
    const parent = img.parentElement;
    parent.classList.add('fallback');
    img.remove();
  };
});

