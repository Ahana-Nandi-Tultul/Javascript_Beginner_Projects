const links = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".scene");
const sidebarTitle = document.querySelector(".sidebar-left");

/* SECTION TITLES */
const titles = {
  scene1: "Beginning",
  scene2: "Discovery",
  scene3: "Struggle",
  scene4: "Learning",
  scene5: "Growth",
  scene6: "Success",
  scene7: "Future"
};

/* ON SCROLL */
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.clientHeight;

    if (scrollY >= top - height / 3) {
      current = section.id;
    }

    /* reveal animation */
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });

  /* active link */
  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

  /* update sidebar title */
  if (titles[current]) {
    sidebarTitle.textContent = titles[current];
  }
});

/* HERO LOAD ANIMATION */
window.addEventListener("load", () => {
  document.querySelector("#scene1").classList.add("show");
});