console.log("Welcome to my portfolio!");

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    console.log("Navigation clicked:", link.textContent);
  });
});