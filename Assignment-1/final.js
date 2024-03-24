const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const servicesLink = document.getElementById('degreesLink');
const contactLink = document.getElementById('contactLink');

// Click listeners for the events
homeLink.addEventListener('click', () => {
    window.location.href = 'index.html'; 
});

aboutLink.addEventListener('click', () => {
    href = 'https://www.uat.edu/about-uat'; 
});

servicesLink.addEventListener('click', () => {
    window.location.href = 'services.html'; 
});

contactLink.addEventListener('click', () => {
    window.location.href = 'contact.html'; 
});