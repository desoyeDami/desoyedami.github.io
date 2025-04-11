const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  // Sync Locomotive Scroll with GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
        : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  // Refresh Locomotive Scroll after GSAP updates
  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();
});
