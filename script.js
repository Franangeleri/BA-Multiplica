<<<<<<< HEAD













=======
< !DOCTYPE html >
    <html>
        <head>
            <title>Dibujo con JavaScript</title>
            <style>
                #canvas {
                    border: 1px solid black;
        }
            </style>
        </head>
        <body>
            <div id="canvas"></div>

            <script>
        // Obtener referencia al elemento del lienzo
                const canvas = document.getElementById('canvas');
                const body = document.body;

                // Definir variables para las coordenadas iniciales
                let startX, startY;

                // Establecer el evento de clic del mouse
                canvas.addEventListener('mousedown', startDrawing);
                canvas.addEventListener('mouseup', stopDrawing);

                // Función para iniciar el dibujo
                function startDrawing(event) {
                    startX = event.clientX;
                startY = event.clientY;

                canvas.addEventListener('mousemove', draw);
                };
                function stopDrawing() {
                    canvas.removeEventListener('mousemove', draw);
        }
                function draw(event) {
             const currentX = event.clientX;
                const currentY = event.clientY;

                const width = Math.abs(currentX - startX);
                const height = Math.abs(currentY - startY);
                const left = Math.min(currentX, startX);
                const top = Math.min(currentY, startY);

                canvas.style.width = width + 'px';
                canvas.style.height = height + 'px';
                canvas.style.left = left + 'px';
                canvas.style.top = top + 'px';
        }

                // Agregar el elemento de dibujo al cuerpo del documento HTML
                body.appendChild(canvas);
            </script>
        </body>
    </html>
console.log mostralo hijo de puta












>>>>>>> 1526a35ae1ee2c63e06a2d44ac346437945f5ba2
