var nextBtn = document.querySelector(".next"),
  prevBtn = document.querySelector(".prev"),
  carousel = document.querySelector(".carousel"),
  list = document.querySelector(".list"),
  item = document.querySelectorAll(".item"),
  runningTime = document.querySelector(".timeRunning");

console.log(runningTime); // Debería mostrar el elemento en la consola

let timeRunning = 3000;
let timeAutonext = 4000;
let runTimeOut;
let runNextAuto;
let isPaused;

nextBtn.onclick = () => {
  showSlider("next");
};

prevBtn.onclick = () => {
  showSlider("prev");
};

const starAutoNext = () => {
  if (!isPaused) {
    // <--- Solo inicia si está en pausa
    runNextAuto = setTimeout(() => {
      nextBtn.click(); // <---- Avanza autmáticamente
      starAutoNext(); // <---- Reinicia el ciclo
    }, timeAutonext);
  }
};

const stopAutoNext = () => {
  isPaused = true; // <--- inidca que está en pausa
  clearTimeout(runNextAuto);
};

const resumeAutonext = () => {
  isPaused = false; // <---- reanuda el auto-scroll
  starAutoNext();
};

const resetTimeAnimation = () => {
  runningTime.style.animation = "none";
  runningTime.offsetHeight;
  runningTime.style.animation = null
  runningTime.style.animation = "runningTime 4s linear 1 forwards";
};

const showSlider = (type) => {
  let sliderItemDom = list.querySelectorAll(".carousel .list .item");

  if (type === "next") {
    list.appendChild(sliderItemDom[0]);
    carousel.classList.add("next");
  } else {
    list.prepend(sliderItemDom[sliderItemDom.length - 1]);
    carousel.classList.add("prev");
  }

  setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, timeRunning);

  resetTimeAnimation();
};

carousel.addEventListener("mouseenter", stopAutoNext); // <---- Pausar al pasar el mause
carousel.addEventListener("mouseleave", resumeAutonext); // <---- Reanudar al pasar el mause

starAutoNext(); // <---- iniciar el auto-scroll
resetTimeAnimation();
