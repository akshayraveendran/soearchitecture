// Optional smooth scrolling or any other interactive feature
document.querySelector('.social-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(e.target.href, '_blank');
});
