document.getElementById('language-switcher').addEventListener('change', function() {
    const selectedLanguage = this.value;
    fetch(`lang/${selectedLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('home-title').textContent = data['home-title'];
            document.getElementById('home-description').textContent = data['home-description'];
            document.getElementById('services-title').textContent = data['services-title'];
            document.getElementById('services-description').textContent = data['services-description'];
            document.getElementById('about-title').textContent = data['about-title'];
            document.getElementById('about-description').textContent = data['about-description'];
            document.getElementById('contact-title').textContent = data['contact-title'];
            document.getElementById('contact-description').textContent = data['contact-description'];

            document.getElementById('nav-home').textContent = data['home-title'];
            document.getElementById('nav-services').textContent = data['services-title'];
            document.getElementById('nav-about').textContent = data['about-title'];
            document.getElementById('nav-contact').textContent = data['contact-title'];
        });
});
