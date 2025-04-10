import { useEffect, useState, useRef } from "react";

export function useLogicaCarusel() {
  const listRef = useRef(null);
  const carouselRef = useRef(null);
  const runningTimeRef = useRef(null);
  const timeRunning = 3000;
  const timeAutonext = 4000;

  const [isPaused, setIsPaused] = useState(false);
  const runNextAuto = useRef(null);

  const resetTimeAnimation = () => {
    const runningBar = runningTimeRef.current;
    if (runningBar) {
      runningBar.style.animation = "none";
      runningBar.offsetHeight; // <--- Forza el reflow ---->
      runningBar.style.animation = "timeRunning 4s linear 1 forwards";
    }
  };
  const showSlider = (type) => {
    if (!listRef.current || !carouselRef.current) return;
    let sliderItemDom = listRef.current.querySelectorAll(".item");
    if (type === "next") {
      listRef.current.appendChild(sliderItemDom[0]);
      carouselRef.current.classList.add("next");
    } else {
      listRef.current.prepend(sliderItemDom[sliderItemDom.length - 1]);
      carouselRef.current.classList.add("prev");
    }
    setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    resetTimeAnimation();
  };

  const startAutoNext = () => {
    if (!isPaused) {
      runNextAuto.current = setTimeout(() => {
        showSlider("next");
        startAutoNext(); // <---- Reinicia el ciclo ---->
      }, timeAutonext);
    }
  };

  const stopAutoNext = () => {
    setIsPaused(true); // <--- inidica que está en pausa
    clearTimeout(runNextAuto.current);
  };

  const resumeAutonext = () => {
    setIsPaused(false); // <---- reanuda el auto-scroll
    startAutoNext();
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoNext();
    }
    return () => clearTimeout(runNextAuto.current); // <--- Limpia el timeout al desmontar el componente
  }, [isPaused]); // <--- Solo se ejecuta cuando cambia el estado de isPaused

  return {
    listRef,
    carouselRef,
    runningTimeRef,
    showSlider,
    startAutoNext,
    stopAutoNext,
    resumeAutonext,
  };
}
