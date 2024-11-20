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
    {
        name: "Dunia Coding",
        src: "/assets/logos/DC_Alternate.png",
        width: 80,
        href: "https://duniacoding.id/",
    },
    {
        name: "Ujione",
        src: "/assets/logos/ujione-by-jetorbit-2.svg",
        width: 150,
        href: "https://ujione.id/",
    }
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
        href: "https://www.youtube.com/@KelasTerbuka",
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
        href: "https://www.instagram.com/meetap_dev/",
    },
];

export { games, rules, timeline, faqsList, sponsorsList, partnersList };
