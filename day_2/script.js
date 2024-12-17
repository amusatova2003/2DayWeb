// Контейнер с мелкими картинками
let image_slider = document.getElementById('image-slider');
let main_photo = document.getElementById('photo-main');

for (let image of image_slider.children)
{   
    image.onclick = () => {
        main_photo.style.backgroundImage = `url(${image.src})`;
        
        // Убираем выделние всех картинок
        for (let _image of image_slider.children)
        {
            _image.classList.remove('checked');
        }

        // Выделяем текущую картинку
        image.classList.add('checked');
    };
}

