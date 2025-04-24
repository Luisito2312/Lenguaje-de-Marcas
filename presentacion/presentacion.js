// Función para cambiar la imagen al pasar el cursor
const photo = document.getElementById('main-photo');

document.querySelector('.photo-container').addEventListener('mouseenter', function() {
    // Cambiar la imagen cuando el cursor entra
    photo.src = 'P1010182.JPEG';
    // Asegurarse de que la imagen tenga la opacidad inicial al cambiar
    photo.style.opacity = 1;
});

document.querySelector('.photo-container').addEventListener('mouseleave', function() {
    // Restaurar la imagen original cuando el cursor sale
    photo.src = 'IMG_1301.jpg';
    // Asegurarse de que la imagen sea visible
    photo.style.opacity = 1;
});

const nameColorButton = document.getElementById('colorButton');

nameColorButton.addEventListener('click', () => {
    const titleName = document.getElementById('name');
    if (titleName.style.color == 'red'){
        titleName.style.color = 'black';
        if (titleName.style = 'font-style: '){
            titleName.style = 'font-style: italic';
        }else{
            titleName.style = 'font-style: ';
            
        }
        
    }else{
        titleName.style.color = 'red';
        
        
    }
});

var changeNameColor = document.getElementById('colorButton');

var fullNameH1 = document.getElementById('name');

changeNameColor.addEventListener('click', function () {
    console.warn("click -------");
    alert("¿WHO IS JAP?")
    
})

const botonTexto = document.getElementById('colorButton');

botonTexto.addEventListener('click', () => {
    const titleName = document.getElementById('name');
    if (titleName.textContent == 'Antonio Tovar'){
        titleName.textContent = '1º DAW';
        
    }else{
        titleName.textContent = 'Antonio Tovar';
        
    }
});


const botonOcultar = document.getElementById('colorButton');

botonTexto.addEventListener('click', () => {
    const titleName = document.getElementById('name');
    if (titleName.style.display == 'none'){
        titleName.style.display = 'block';
        
    }else{
        titleName.style.display = 'none';
        
    }
});

let fps = ["Calistenia, Rap, Química"];

let orderListEl = document.getElementById("order_list");
for (var i = 0; i<fps-length; i++){
    let li = document.createElementById("li");
    li.innerText = fps(i);
    orderListEl.appendChild(li);
}

fps.forEach(item => {
    let li = document.createElementById("li");
    li.innerText = fps(i);
    orderListEl.appendChild(li);

    
});