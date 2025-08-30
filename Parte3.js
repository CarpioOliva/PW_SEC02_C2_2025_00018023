document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnOrden').addEventListener('click', cambiarOrden);
    document.getElementById('btnTitulo').addEventListener('click', cambiarTitulo);
    document.getElementById('btnColor').addEventListener('click', cambiarColorTitulos);
    document.getElementById('btnImagen').addEventListener('click', agregarImagen);
});

function cambiarOrden() {
    const siteBody = document.querySelector('.site-body');
    
    if (siteBody.classList.contains('column-layout')) {
        siteBody.classList.remove('column-layout');
    } else {
        siteBody.classList.add('column-layout');
    }
}

function cambiarTitulo() {
    const titulo = document.getElementById('tituloPrincipal');
    
    if (titulo.textContent === 'University Demo') {
        titulo.textContent = 'HTML & CSS: Curso práctico avanzado';
    } else {
        titulo.textContent = 'University Demo';
    }
}

function cambiarColorTitulos() {
    const subtitulos = document.querySelectorAll('.subtitulo');
    const colores = ['red', 'blue', 'green', 'purple', 'orange'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    subtitulos.forEach(subtitulo => {
        subtitulo.style.color = colorAleatorio;
    });
}

function agregarImagen() {
    const footerContent = document.getElementById('footerContent');
    
    if (!document.getElementById('footerImage')) {
        const imagen = document.createElement('img');
        imagen.id = 'footerImage';
        imagen.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
        imagen.alt = 'Paisaje natural';
        imagen.className = 'footer-image';
        
        footerContent.appendChild(imagen);
        
        const boton = document.getElementById('btnImagen');
        boton.textContent = 'Imagen Agregada';
        boton.disabled = true;
    }
}