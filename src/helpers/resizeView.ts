import { debounce } from "./debounce";

const resizeView = (firstRun = false) => {
  const scaleWrapper = document.querySelector<HTMLElement>("#scale");
  if (scaleWrapper === null) {
    console.warn("scaleWrapper is not set");
    return;
  }
  const documentBody = document.body;
  const sizes = {
    originalSize: {
      width: scaleWrapper?.getBoundingClientRect().width || 0,
      height: scaleWrapper?.getBoundingClientRect().height || 0,
    },
    currentSize: {
      width: documentBody.getBoundingClientRect().width,
      height: documentBody.getBoundingClientRect().height,
    },
  };

  const resize = debounce(function () {
    sizes.currentSize = {
      width: documentBody.getBoundingClientRect().width,
      height: documentBody.getBoundingClientRect().height,
    };

    const scale = Math.min(
      sizes.currentSize.width / sizes.originalSize.width,
      sizes.currentSize.height / sizes.originalSize.height
    );
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );

    scaleWrapper?.setAttribute(
      "style",
      `transform: translate(-50%, -50%) scale(${scale})`
    ); //`transform: translate(-50%, -50%) scale(${scale})`)

    document.querySelector(".blur")?.classList.remove("show");
  }, 250);
  if (firstRun) {
    resize();
  }
  window.addEventListener("resize", resize);
  window.addEventListener("resize", () => {
    document.querySelector(".blur")?.classList.add("show");
  });
};

export default resizeView;
