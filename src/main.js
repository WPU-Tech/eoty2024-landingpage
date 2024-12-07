import Slider from "./components/slider";
import { games, rules, timeline, faqsList, sponsorsList, partnersList } from "./constants/constant";

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

        document.getElementById("timer-data-days").textContent = "00";
        document.getElementById("timer-data-hours").textContent = "00";
        document.getElementById("timer-data-minutes").textContent = "00";
        document.getElementById("timer-data-seconds").textContent = "00";
        if (timeLeft < 0) clearInterval(countdown);
    }, 1000);

    // easter egg - timer
    let timerCounter = 0;
    const timerEls = document.querySelectorAll(".timer-click");
    timerEls.forEach((timer) => {
        timer.addEventListener("click", () => {
            timerCounter++;
            if (timerCounter >= 10) {
                alert("ngapain bang 🗿, udah sana register");
                timerCounter = 0;
            }
        });
    });
});
