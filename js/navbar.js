// Dynamically generate the navigation bar
const navItems = [
    { text: 'Home', link: 'index.html' },
    { text: 'Services', link: 'services.html' },
    { text: 'Gallery', link: 'gallery.html' },
    { text: 'Contact', link: '#' }
];

const navbar = document.getElementById('navbar');

navItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.text;
    navbar.appendChild(link);

    // Highlight the current tab based on the page URL
    if (window.location.href.includes(item.link)) {
        link.classList.add('current');
    }
});
