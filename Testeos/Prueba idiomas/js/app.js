const languageSelect = document.getElementById('language-select');
const languageContent = document.getElementById('language-content');
const languageSections = languageContent.querySelectorAll('h1, p');

languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;

    languageSections.forEach(section => {
        section.style.display = 'none'; // Oculta todos los textos
    });

    // Muestra los textos correspondientes al idioma seleccionado
    const selectedElements = languageContent.querySelectorAll('.' + selectedLanguage);
    selectedElements.forEach(element => {
        element.style.display = 'block';
    });
});

// Al cargar la página, muestra el contenido del idioma seleccionado por defecto (Italiano en este caso)
document.addEventListener('DOMContentLoaded', function() {
    const defaultLanguage = languageSelect.value;
    const defaultElements = languageContent.querySelectorAll('.' + defaultLanguage);
    defaultElements.forEach(element => {
        element.style.display = 'block';
    });
});