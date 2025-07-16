document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    alert(`Hiciste clic en el item ${item.textContent}`);
  });
});
