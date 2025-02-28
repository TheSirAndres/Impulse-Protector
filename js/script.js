let currentIndex = 0;
const images = [
    'sources/ilustrations/drawkit-transport-scene-3.svg',
    'sources/ilustrations/drawkit-transport-scene-4.svg',
    'sources/ilustrations/drawkit-transport-scene-6.svg',
    'sources/ilustrations/drawkit-transport-scene-11.svg'
];

const imgElement = document.getElementById('heroImage');

function changeImage() {
    imgElement.src = images[currentIndex];
    imgElement.style.display = 'block'; // Muestra la imagen después de cambiar
    currentIndex = (currentIndex + 1) % images.length;

    setTimeout(() => {
        imgElement.style.display = 'none'; // Oculta la imagen antes de cambiar
        changeImage(); // Llamar a cambiar imagen otra vez
    }, 3000); // Cambia cada 3 segundos
}

changeImage(); // Inicia el ciclo

function mostrarModelos() {
    const marca = document.getElementById('brand').value;
    const modeloSelect = document.getElementById('model');
    modeloSelect.innerHTML = ''; // Limpiar modelos previos
    modeloSelect.disabled = false;

    let modelos = [];

    switch (marca) {
        case 'toyota':
            modelos = ['Corolla', 'Camry', 'RAV4'];
            break;
        case 'ford':
            modelos = ['Fiesta', 'Focus', 'F-150'];
            break;
        case 'honda':
            modelos = ['Civic', 'Accord', 'CR-V'];
            break;
        case 'chevrolet':
            modelos = ['Malibu', 'Impala', 'Silverado'];
            break;
        case 'nissan':
            modelos = ['Sentra', 'Altima', 'Pathfinder'];
            break;
    }

    modelos.forEach(modelo => {
        const option = document.createElement('option');
        option.value = modelo.toLowerCase();
        option.textContent = modelo;
        modeloSelect.appendChild(option);
    });
}