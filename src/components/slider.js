class Slider {
    constructor(containerSelector, values) {
        this.values = values;
        this.options = {
            type: "loop",
            pagination: false,
            arrows: false,
            gap: "2rem",
            perMove: 1,
            width: "95%",
            height: "156px",
            autoWidth: true,
            autoplay: true,
            interval: 2000,
        };
        this.container = document.querySelector(containerSelector);

        this.splide = new Splide(this.container, this.options);
        this.Components = this.splide.Components;

        this.#init();
    }

    verticalOnMobile() {
        this.verticalOnMobile = true;
    }

    setButtons({ previouses, nexts }) {
        this.nextButtons = nexts;
        this.prevButtons = previouses;
    }

    addSplideSlide(image) {
        const slide = document.createElement("li");
        if (this.verticalOnMobile) slide.className = "splide__slide flex items-center justify-center !mx-auto !h-auto sm:!mx-4";
        else slide.className = "splide__slide flex items-center justify-center";
        slide.style.width = `${image.width}px`;

        const imageWrapper = document.createElement("a");
        imageWrapper.href = image.href;
        imageWrapper.target = "_blank";

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.name;
        img.className = "object-contain";
        img.style.width = `${image.width}px`;
        imageWrapper.appendChild(img);

        slide.appendChild(imageWrapper);
        this.splide.add(slide);
    }

    #init() {
        this.splide.on("overflow", this.#onOverflow.bind(this));
        this.splide.on("resized", this.#onResized.bind(this));
    }

    mount() {
        this.splide.mount();
        this.Components.Autoplay.play();

        this.nextButtons.forEach((button) => {
            button.addEventListener("click", () => {
                this.splide.go(">");
            });
        });

        this.prevButtons.forEach((button) => {
            button.addEventListener("click", () => {
                this.splide.go("<");
            });
        });

        this.values.forEach((image) => {
            this.addSplideSlide(image);
        });
    }

    #onOverflow(isOverflow) {
        this.splide.go(0);

        this.splide.options = {
            drag: isOverflow,
            clones: isOverflow ? undefined : 0,
        };
    }

    #onResized() {
        let isOverflow = this.Components.Layout.isOverflow();
        let list = this.Components.Elements.list;
        let lastSlide = this.Components.Slides.getAt(this.splide.length - 1);

        if (lastSlide) {
            list.style.justifyContent = isOverflow ? "" : "center";

            if (!isOverflow) {
                lastSlide.slide.style.marginRight = "";
                list.classList.add("!translate-x-0");
            } else {
                list.classList.remove("!translate-x-0");
            }
        }
        if (window.innerWidth < 480 && !this.isMobile && this.verticalOnMobile) {
            console.log("setting to mobile");
            console.log(this.isMobile);
            this.isMobile = true;
            this.splide.options.height = "300px";
            this.splide.options.direction = "ttb";
            this.splide.refresh();
        }
    }
}

export default Slider;
