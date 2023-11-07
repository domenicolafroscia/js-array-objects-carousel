const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const itemElem = document.querySelector(".items");
let membersElem = "";

images.forEach((curImage) => {
    membersElem += `
    <div class="slide-img item">
        <img src="${curImage.image}" alt="">
        <h3 class="title-image">${curImage.title}</h3>
        <p class="text-image">${curImage.text}</p>
    </div>
    `;
})

console.log(membersElem);
itemElem.innerHTML += membersElem;

const itemElems = document.querySelectorAll(".slide-img");
console.log(itemElems);

let curSlideI = 0;
itemElems[curSlideI].classList.add("active");

document.querySelector(".next").addEventListener("click", function(event) {
    event.preventDefault();
    itemElems[curSlideI].classList.remove("active");
    if (curSlideI < itemElems.length - 1) {
        curSlideI++;
    } else {
        curSlideI = 0;
    }
    itemElems[curSlideI].classList.add("active");
})

document.querySelector(".prev").addEventListener("click", function(event) {
    event.preventDefault();
    itemElems[curSlideI].classList.remove("active");
    if (curSlideI > 0) {
        curSlideI--;
    } else {
        curSlideI = itemElems.length - 1;
    }
    itemElems[curSlideI].classList.add("active");
})
