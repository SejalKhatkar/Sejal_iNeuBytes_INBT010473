async function translateText() {
    const textToTranslate = document.getElementById('text-to-translate').value;
    const targetLanguage = document.getElementById('target-language').value;

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLanguage}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const translatedText = data.responseData.translatedText;
        document.getElementById('translated-text').innerText = translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        document.getElementById('translated-text').innerText = 'Error translating text. Please try again.';
    }
}
