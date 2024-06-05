
function includeHTML(elementId, filePath) {
    const element = document.getElementById(elementId);
    if (element) {
        fetch(filePath)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Failed to load file');
            })
            .then(data => {
                element.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    includeHTML('template', 'template.html');
});