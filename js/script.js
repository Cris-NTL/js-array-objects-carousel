// array of objects
const arrayOfImages = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay',
    }
];

// container DOM
const imagesContainer = document.querySelector('.slider-items');

// display array's elements on DOM
arrayOfImages.forEach((element) => {

    let item = ` <div class="item">
                    <img src="${element.image}">
                    <div class="text">
                        <h3 class="title">${element.title}</h3>
                        <h6 class="subTitle">${element.text}</h6>
                    </div>
                </div>`

    imagesContainer.innerHTML += item;
});

// add "active" class to the first element
const itemOfArray = document.getElementsByClassName('item');
let activeItem = 0;
itemOfArray[activeItem].classList.add('active');

// buttons management
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const pauseBtn = document.querySelector(".pause-btn");
const repeatBtn = document.querySelector(".repeat-btn");

// click function for up-button
upBtn.addEventListener('click', function () {
    if (activeItem > 0) {
        itemOfArray[activeItem].classList.remove('active');
        activeItem--;
        itemOfArray[activeItem].classList.add('active');
    }
    else if (activeItem === 0) {
        itemOfArray[activeItem].classList.remove("active");
        activeItem = itemOfArray.length - 1;
        itemOfArray[activeItem].classList.add("active");
    }
})

// click function for down-button
downBtn.addEventListener('click', function () {
    if (activeItem < (arrayOfImages.length - 1)) {
        itemOfArray[activeItem].classList.remove("active");
        activeItem++;
        itemOfArray[activeItem].classList.add("active");
    } else {
        itemOfArray[activeItem].classList.remove("active");
        activeItem = 0;
        itemOfArray[activeItem].classList.add("active");
    }
})

// function setInterval
setInterval(function () {
    if (activeItem < (arrayOfImages.length - 1)) {
        itemOfArray[activeItem].classList.remove("active");
        activeItem++;
        itemOfArray[activeItem].classList.add("active");
    } else {
        itemOfArray[activeItem].classList.remove("active");
        activeItem = 0;
        itemOfArray[activeItem].classList.add("active");
    }
}, 3000);



