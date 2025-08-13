document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".image-display .slide");
    const navButtons = document.querySelectorAll(".slider-navigation .nav-button");
    const prevBtn = document.querySelector(".prev-button");
    const nextBtn = document.querySelector(".next-button");


    const textBlocks = document.querySelectorAll(".openingab__text-contant .openingab__text");

    const sliderTexts = [
        {
            about: "Сучасний комфорт у кожній деталі — просторе планування, великі панорамні вікна та енергоефективні технології для затишного життя.",
        },
        {
            about: "Будинок твоєї мрії — стильний дизайн, екологічні матеріали та зручна інфраструктура поруч.",

        },
        {
            about: "Місце, де народжуються спогади — теплий сімейний простір із власним двориком та садом.",

        },
        {
            about: "Інвестиція в майбутнє — нерухомість, яка з роками тільки зростає у вартості та приносить стабільність.",

        },
        {
            about: "Інвестиція в майбутнє — нерухомість, яка з роками тільки зростає у вартості та приносить стабільність.",
        }
    ];

    let currentIndex = 0;

    function updateSlider(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        navButtons.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });

        textBlocks[0].querySelector(".openingab__subtitle").textContent = sliderTexts[index].about;
        textBlocks[1].querySelector(".openingab__subtitle").textContent = sliderTexts[index].why;
        textBlocks[2].querySelector(".openingab__subtitle").textContent = sliderTexts[index].mission;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex);
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider(currentIndex);
    });

    navButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            currentIndex = index;
            updateSlider(currentIndex);
        });
    });

    updateSlider(currentIndex);
});
