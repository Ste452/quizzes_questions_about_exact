function getUserLanguage() {
    let lang = navigator.language || navigator.userLanguage;
    return lang.split('-')[0]; // Pega somente o código do idioma ("en", "pt", "es")
}

// Muda automaticamente para o idioma detectado
function autoTranslate() {
    let userLang = getUserLanguage();
    let googleFrame = document.querySelector(".goog-te-combo");
    
    if (googleFrame) {
        googleFrame.value = userLang;
        googleFrame.dispatchEvent(new Event('change')); // Simula a troca de idioma
    }
}

// Aguarda o Google Translate carregar
window.addEventListener("load", () => {
    setTimeout(autoTranslate, 2000);
});
