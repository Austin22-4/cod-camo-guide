const trackerInputs = document.querySelectorAll('.tracker-item input');

trackerInputs.forEach((input) => {
  input.addEventListener('change', () => {
    const label = input.closest('.tracker-item');
    if (label) {
      label.style.borderColor = input.checked ? 'rgba(122, 229, 130, 0.8)' : 'rgba(148, 163, 184, 0.18)';
      label.style.background = input.checked
        ? 'rgba(122, 229, 130, 0.08)'
        : 'rgba(255,255,255,0.02)';
    }
  });
});
