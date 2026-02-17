window.addEventListener("load", () => {

  const ideaIn = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaOut = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = gsap.timeline({ paused: true });

  const audio = document.getElementById("bdsong");
  audio.play().catch(() => {});

  tl.to(".container", { visibility: "visible", duration: 0.6 })
    .from(".one", { opacity: 0, y: 10, duration: 0.7 })
    .from(".two", { opacity: 0, y: 10, duration: 0.4 })
    .to(".one", { opacity: 0, y: 10, duration: 0.7 }, "+=3.5")
    .to(".two", { opacity: 0, y: 10, duration: 0.7 }, "-=1")
    .from(".three", { opacity: 0, y: 10, duration: 0.7 })
    .to(".three", { opacity: 0, y: 10, duration: 0.7 }, "+=3")

    .from(".idea-1", { ...ideaIn, duration: 0.7 })
    .to(".idea-1", { ...ideaOut, duration: 0.7 }, "+=2.5")
    .from(".idea-2", { ...ideaIn, duration: 0.7 })
    .to(".idea-2", { ...ideaOut, duration: 0.7 }, "+=2.5")

    .from(".idea-3", { ...ideaIn, duration: 0.7 })
    .to(".idea-3 strong", {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21,161,237)",
      color: "#fff",
      duration: 0.5
    })
    .to(".idea-3", { ...ideaOut, duration: 0.7 }, "+=2.5")

    .from(".idea-4", { ...ideaIn, duration: 0.7 })
    .to(".idea-4", { ...ideaOut, duration: 0.7 }, "+=2.5")

    .from(".idea-5", {
      rotationX: 15,
      rotationZ: -10,
      skewY: "-5deg",
      y: 50,
      opacity: 0,
      duration: 0.7
    }, "+=1.5")

    .to(".idea-5 span", { rotation: 90, x: 8, duration: 0.7 }, "+=1.4")
    .to(".idea-5", { scale: 0.2, opacity: 0, duration: 0.7 }, "+=2")

    .from(".idea-6 span", {
      scale: 3,
      opacity: 0,
      rotation: 15,
      stagger: 0.2,
      duration: 0.8
    })
    .to(".idea-6 span", {
      scale: 3,
      opacity: 0,
      rotation: -15,
      stagger: 0.2,
      duration: 0.8
    }, "+=1.5")

    // Lights step
    .add(() => {
      document.querySelector(".lights-wrapper").classList.add("active");
    });

  tl.play();

  document.getElementById("lightsBtn").addEventListener("click", () => {
    document.body.classList.add("peach");
    document.querySelector(".lights-wrapper").classList.remove("active");
  });

});
