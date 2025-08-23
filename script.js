function showLanguage(language) {
    if (language === 'en') {
        document.getElementById('en-text').style.display = 'block';
        document.getElementById('id-text').style.display = 'none';
    } else if (language === 'id') {
        document.getElementById('en-text').style.display = 'none';
        document.getElementById('id-text').style.display = 'block';
    }
}
