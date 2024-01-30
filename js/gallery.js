// gallery.js
function openImage(src, alt) {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
        <head>
            <title>${alt}</title>
            <style>
                body {
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f7e8e8;
                }

                img {
                    max-width: 100%;
                    max-height: 100%;
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            <img src="${src}" alt="${alt}">
            <script>
                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape') {
                        window.close();
                    }
                });
            </script>
        </body>
        </html>
    `);
}

function openOverlay(src, alt) {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');

    overlayImage.src = src;
    overlayImage.alt = alt;

    overlay.style.display = 'flex';
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');

    overlay.style.display = 'none';
}

function toggleGallery() {
    const dynamicGallery = document.getElementById('dynamicGallery');
    dynamicGallery.style.display = (dynamicGallery.style.display === 'none' || dynamicGallery.style.display === '') ? 'grid' : 'none';
}