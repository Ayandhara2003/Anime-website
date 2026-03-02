const searchBtn = document.getElementById("search_button");
const searchInput = document.getElementById("search_input");

searchBtn.addEventListener("click", () => {
    searchInput .classList.toggle("active");
   searchInput .focus();
});
const slides = [
    {
        image: "https://orig00.deviantart.net/6cd9/f/2017/336/2/3/bleach_thousand_year_blood_war_strongest_wallpaper_by_windyechoes-dbvla8r.jpg",
        title: "BLEACH: THOUSAND-YEAR BLOOD WAR",
        desc: "After a brutal surprise attack by the forces of Quincy King Yhwach..."
    },
    {
        image: "https://4kwallpapers.com/images/wallpapers/attack-on-titan-2560x1440-10339.jpg",
        title: "ATTACK ON TITAN",
        desc: "Humanity fights against the Titans."
    },
    {
        image: "https://imgix.bustle.com/uploads/image/2024/2/13/64584092-9fbb-487b-8ef2-78107c98cb28-jjk-header-mobile2.jpg?",
        title: "JUJUTSU KAISEN",
        desc: "Sorcerers battle powerful curses."
    }
];

let currentIndex = 0;

const heroImage = document.getElementById("sec_img");
const heroTitle = document.querySelector(".heading1");
const heroDesc = document.querySelector(".paragraph1");

function showSlide(index) {
    heroImage.style.opacity = 0;

    setTimeout(() => {
        heroImage.src = slides[index].image;
        heroTitle.textContent = slides[index].title;
        heroDesc.textContent = slides[index].desc;
        heroImage.style.opacity = 1;
    }, 200);
}

document.querySelector(".right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

document.querySelector(".left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Initialize first slide
showSlide(currentIndex);