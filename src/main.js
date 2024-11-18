const games = [
    {
        title: "Code Warriors",
        description: "Test your knowledge of web development, including frontend, backend, databases, and problem-solving skills to prove you're a true coding warrior.",
    },
    {
        title: "Pixel Legion",
        description: "A challenge for the creative minds! Design and develop a pixel art game that will test your creativity and coding skills.",
    },
    {
        title: "Syntax Showdown",
        description: "Speed and strategy are key! Solve tricky challenges under time pressure and showcase your quick thinking.",
    },
    {
        title: "Pixel Royale",
        description: "A head-to-head test of memory and precision where every detail matters.",
    },
    {
        title: "Dijkstra Quest",
        description: "Navigate through challenges as fast as you can. Speed and accuracy are key to securing your points.",
    },
    {
        title: "League of Logics",
        description: "Compete in high-stakes problem-solving. Solve complex puzzles and prove your logical thinking abilities to claim your spot at the top.",
    },
];

const rules = [
    "Anyone can join, even if they're not yet on the WPU Discord server (but must join first).",
    "Participants must be members of the WPU Discord server and verified with the 'Mahasiswa' role.",
    "Participants must register individually and may not share their account with others.",
    "Registration is free, and there will be no fees for participants.",
    "WPU moderators are not allowed to participate in the competition.",
];

const timeline = [
    {
        title: "Code Warriors",
        date: "Saturday, December 7, 2024",
        description: "All code heroes assemble! The first round to determine the top 40 ready to advance to the next level.",
    },
    {
        title: "Build Your Party",
        date: "Tuesday, December 12, 2024",
        description: "Time to strategize and prepare! Join us for the technical meeting and get geared up for the rounds ahead.",
    },
    {
        title: "Pixel Legion",
        date: "Saturday, December 14, 2024",
        description: "The challenge continues! The top 40 face off, with only 24 will make it through this round.",
    },
    {
        title: "Syntax Showdown",
        date: "Sunday, December 15, 2024",
        description: "The top 24 compete to secure a spot in the final 12. Who will go forward?",
    },
    {
        title: "Pixel Royale",
        date: "Saturday, December 21, 2024",
        description: "The top 12 fight in a bid to reach the ultimate stage, as only 6 will emerge victorious!",
    },
    {
        title: "Dijkstra Quest",
        date: "Sunday, December 21, 2024",
        description: "A final coding challenge where the best will advance to the grand finale!",
    },
    {
        title: "League of Logics",
        date: "Sunday, December 22, 2024",
        description: "The ultimate showdown! Who will rise to claim the 1st, 2nd, and 3rd places?",
    },
];

const faqsList = [
    {
        title: "Who can join CodeHero?",
        content: "Everyone! Whether you're a student, professional, or beginner tech enthusiast, all are welcome to participate.",
    },
    {
        title: "Are there any fees for joining?",
        content: "No, CodeHero is free for all participants!",
    },
    {
        title: "Where will CodeHero be held?",
        content: "The event will be held online, using Discord for communication and our custom platform for the coding challenges.",
    },
    {
        title: "What do I need to participate?",
        content: "You'll need a stable internet connection, a Discord account, and, of course, your coding skills.",
    },
    {
        title: "Can I join the event without being a WPU Discord member?",
        content: "To register for CodeHero, you'll need to join the WPU Discord server first.",
    },
    {
        title: "How to join WPU Discord server?",
        content:
            'To join the WPU Discord server, simply click on this <a href="https://discord.gg/wpu" target="_blank">link</a> and follow the instructions to verify your account. If you have any questions, feel free to reach out to our contact person for assistance.',
    },
];

const sponsorsList = [
    {
        name: "WPU Course",
        src: "/assets/logos/LOGO_WPU_Course.png",
        width: 200,
        href: "https://belajarmern.id",
    },
    {
        name: "JetBrains",
        src: "/assets/logos/jetbrains.png",
        width: 300,
        href: "https://jetbrains.com/",
    },
    {
        name: "Kzzi",
        src: "/assets/logos/kzzi.png",
        width: 150,
        href: "https://www.kzzistore.com/",
    },
];

const partnersList = [
    {
        name: "Skill Issue",
        src: "/assets/logos/skill_issue-logo-black-4k.svg",
        width: 90,
        href: "https://skill-issue.org/",
    },
    {
        name: "Kelas Terbuka",
        src: "/assets/logos/kelas-terbuka.jpg",
        width: 75,
        href: "https://kelasterbuka.biz.id/",
    },
    {
        name: "Petani Kode",
        src: "/assets/logos/logo-petanikode-dark.png",
        width: 100,
        href: "https://www.petanikode.com/",
    },
    {
        name: "SurabayaDev",
        src: "/assets/logos/surabaya-dev.png",
        width: 150,
        href: "https://surabayadev.org/",
    },
    {
        name: "Tegal Dev",
        src: "/assets/logos/Tegal.dev-A.png",
        width: 125,
        href: "https://www.instagram.com/tegal.dev/",
    },
    {
        name: "BandungDev",
        src: "/assets/logos/bandungdev-logo-text-black.svg",
        width: 200,
        href: "https://bandungdev.com/",
    },
    {
        name: "Purwokerto Dev",
        src: "/assets/logos/purwokertodev.png",
        width: 225,
        href: "https://purwokerto.dev/",
    },
    {
        name: "IndoXploit",
        src: "/assets/logos/Logo IDX Color 1.svg",
        width: 150,
        href: "https://www.facebook.com/groups/indoxploitpublic/",
    },
    {
        name: "Startup Bandung",
        src: "/assets/logos/Logo Startup Bandung.png",
        width: 175,
        href: "https://startupbandung.id/",
    },
    {
        name: "Business Initiative Movement",
        src: "/assets/logos/LOGO BIM 2019.png",
        width: 75,
        href: "https://www.instagram.com/businessinitiative.id/",
    },
    {
        name: "Meetap Mobile Developer",
        src: "/assets/logos/meetap.png",
        width: 150,
        href: "https://www.instagram.com/meetap_mobiledeveloper/",
    },
];

const generateTimelineItem = (timelineContainer, item, position) => {
    const { title, date, description } = item;

    const timelineItem = document.createElement("li");
    timelineItem.className = "group relative flex";

    const timelineDot = document.createElement("div");
    timelineDot.className = "flex flex-col items-center pr-8";

    const timelineDotCircle = document.createElement("div");
    timelineDotCircle.className = "size-10 min-w-10 min-h-10 rounded-full border-8 border-[#FFF8CE] bg-[#FF5508]";

    const timelineDotFirstLine = document.createElement("div");
    timelineDotFirstLine.className = "w-2 h-full" + (position !== "first" ? " bg-[#FFF8CE]" : "");

    const timelineDotLastLine = document.createElement("div");
    timelineDotLastLine.className = "w-2 h-full" + (position !== "last" ? " bg-[#FFF8CE]" : "");

    timelineDot.appendChild(timelineDotFirstLine);
    timelineDot.appendChild(timelineDotCircle);
    timelineDot.appendChild(timelineDotLastLine);

    const timelineContent = document.createElement("div");
    timelineContent.className = `w-full relative bg-[#fff8ce] rounded-xl border-8 border-[#483f3f] py-6 px-6 lg:px-16 ${position === "last" ? "" : "mb-8"}`;
    timelineContent.style.boxShadow = "-8px 8px 0 #483f3f";

    const timelineTitle = document.createElement("h3");
    timelineTitle.className = "text-[#0A48A9] text-3xl lg:text-5xl";
    timelineTitle.innerText = title;

    const timelineDate = document.createElement("p");
    timelineDate.className = "tracking-[0.2em] font-medium";
    timelineDate.innerText = date;

    const timelineDescription = document.createElement("p");
    timelineDescription.className = "font-montserrat font-semibold mt-2 text-gray-600 text-lg";
    timelineDescription.innerText = description;

    timelineContent.appendChild(timelineTitle);
    timelineContent.appendChild(timelineDate);
    timelineContent.appendChild(timelineDescription);

    timelineItem.appendChild(timelineDot);
    timelineItem.appendChild(timelineContent);

    timelineContainer.appendChild(timelineItem);
};

const generateFaqItem = (faqContainer, item) => {
    const { title, content } = item;

    const faqItem = document.createElement("div");
    faqItem.dataset.open = "false";
    faqItem.className = "w-full group relative bg-[#96D9FF] rounded-xl border-8 border-[#483f3f] px-6 lg:px-12 cursor-pointer py-4 lg:py-6 data-[open=true]:py-6 data-[open=true]:lg:py-8 trasiotion-height duration-300 ease-in-out";
    faqItem.style.boxShadow = "-8px 8px 0 #483f3f";

    const faqHeader = document.createElement("div");
    faqHeader.className = "flex items-center justify-between gap-4";

    const faqTitle = document.createElement("h3");
    faqTitle.className = "text-3xl lg:text-5xl text-[#0A48A9]";
    faqTitle.innerText = title;

    const faqIcon = document.createElement("div");
    faqIcon.className = "transition-transform duration-300 ease-in-out";
    faqIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down size-6 min-w-6 lg:size-8 lg:min-w-8">
            <path d="m18 15-6-6-6 6"/>
        </svg>
    `;

    faqHeader.appendChild(faqTitle);
    faqHeader.appendChild(faqIcon);

    const faqContent = document.createElement("div");
    faqContent.className = "font-montserrat group-data-[open=true]:mt-2.5 lg:text-lg font-semibold will-change-[height] max-h-0 overflow-hidden transition-height duration-300 ease-in-out";
    faqContent.innerHTML = content;

    faqItem.appendChild(faqHeader);
    faqItem.appendChild(faqContent);

    faqContainer.appendChild(faqItem);

    faqItem.addEventListener("click", () => {
        faqItem.dataset.open = faqItem.dataset.open === "true" ? "false" : "true";
        faqIcon.style.transform = faqItem.dataset.open === "true" ? "rotate(180deg)" : "rotate(0deg)";
        faqContent.style.maxHeight = faqItem.dataset.open === "true" ? faqContent.scrollHeight + "px" : null;
    });
};

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

const generateRuleItem = (ruleContainer, item) => {
    const ruleItem = document.createElement("h3");
    ruleItem.className = "font-medium list-item";
    ruleItem.textContent = item;
    ruleContainer.appendChild(ruleItem);
};

const addGamesSlide = (splideContainer, item) => {
    const wrapper = document.createElement("li");
    const title = document.createElement("h3");
    const description = document.createElement("div");

    wrapper.className = "splide__slide p-12";
    title.className = "text-5xl text-[#0A48A9]";
    description.className = "font-montserrat mt-2 text-lg font-medium";

    title.textContent = item.title;
    description.textContent = item.description;
    wrapper.append(title, description);
    splideContainer.appendChild(wrapper);
};

document.addEventListener("DOMContentLoaded", function () {
    const timelineSection = document.getElementById("timeline-section");
    timeline.forEach((item, index) => {
        generateTimelineItem(timelineSection, item, index === 0 ? "first" : index === timeline.length - 1 ? "last" : "");
    });

    const faqSection = document.getElementById("faq-section");
    faqsList.forEach((item) => {
        generateFaqItem(faqSection, item);
    });

    const ruleSection = document.getElementById("rules-data");
    rules.forEach((item) => {
        generateRuleItem(ruleSection, item);
    });

    const gamesDataSection = document.getElementById("games-splide-data");
    games.forEach((item) => {
        addGamesSlide(gamesDataSection, item);
    });

    const gamesSection = document.getElementById("games-section");
    const gamesNext = document.querySelector("#games-section #next");
    const gamesNextMobile = document.querySelector("#games-section #next-mobile");
    const gamesPrev = document.querySelector("#games-section #prev");
    const gamesPrevMobile = document.querySelector("#games-section #prev-mobile");

    let gamesSplide = new Splide(gamesSection, {
        type: "loop",
        pagination: false,
        arrows: false,
        autoHeight: true,
    });

    gamesSplide.mount();
    gamesNext.addEventListener("click", () => {
        gamesSplide.go(">");
    });
    gamesPrev.addEventListener("click", () => {
        gamesSplide.go("<");
    });
    gamesNextMobile.addEventListener("click", () => {
        gamesSplide.go(">");
    });
    gamesPrevMobile.addEventListener("click", () => {
        gamesSplide.go("<");
    });

    const sponsorsSlide = new Slider("#sponsors-section", sponsorsList);
    sponsorsSlide.setButtons({
        previouses: document.querySelectorAll("#partners .prev"),
        nexts: document.querySelectorAll("#partners .next"),
    });
    sponsorsSlide.mount();

    const partnersSlide = new Slider("#partners-section", partnersList);
    partnersSlide.setButtons({
        previouses: document.querySelectorAll("#super-partners .prev"),
        nexts: document.querySelectorAll("#super-partners .next"),
    });
    partnersSlide.mount();

    let navState = false;
    const navClose = document.querySelector("#nav-close");
    const navOpen = document.querySelector("#nav-open");
    const navWrapper = document.querySelector("#nav-wrapper");
    const navLinks = document.querySelectorAll(".nav-link");
    const backdrop = document.querySelector(".backdrop");
    navClose.addEventListener("click", () => {
        navState = false;
        refreshNav();
    });
    navOpen.addEventListener("click", () => {
        navState = true;
        refreshNav();
    });
    backdrop.addEventListener("click", () => {
        navState = false;
        refreshNav();
    });
    const refreshNav = () => {
        navWrapper.classList.remove("translate-y-full");
        navWrapper.classList.remove("translate-y-0");
        backdrop.classList.remove("opacity-0", "invisible");
        backdrop.classList.remove("opacity-100", "visible");
        if (navState) {
            navWrapper.classList.add("translate-y-0");
            backdrop.classList.add("opacity-100", "visible");
        } else {
            backdrop.classList.add("opacity-0", "invisible");
            navWrapper.classList.add("translate-y-full");
        }
    };
    navLinks.forEach((item) => {
        item.addEventListener("click", () => {
            navState = false;
            refreshNav();
        });
    });

    // doomsday timer
    const targetDate = new Date("2024-12-07T19:00:00").getTime();
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer-data-days").textContent = days.toString().padStart(2, "0");
        document.getElementById("timer-data-hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("timer-data-minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("timer-data-seconds").textContent = seconds.toString().padStart(2, "0");
        if (timeLeft < 0) clearInterval(countdown);
    }, 1000);
});
