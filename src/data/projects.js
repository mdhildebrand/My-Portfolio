import capstoneImage from '../images/comingSoon_desktop.png';
import portfolioImage from '../images/portfolio_desktop.png';
import portfolioHeader from '../images/portfolio_header.png';
import portfolioWireframes from '../images/portfolio_wireframes.png';
import portfolioNavcode from '../images/portfolio_navcode.png';
import watcherImage from '../images/watcher_desktop.png';
import watcherHeader from '../images/watcher_header.png';
import watcherMockups from '../images/watcher_mockups.png';
import watcherExample from '../images/watcher_example.png';
import tuxedoCatImage from '../images/tuxedoCat_desktop.png';
import tuxedoCatHeader from '../images/tuxedoCat_header.png';
import tuxedoCatMockups from '../images/tuxedoCat_mobile_mockups.png';
import tuxedoCatMenu from '../images/tuxedoCat_menu.gif';
import boxclickerImage from '../images/boxclicker_desktop.png';
import boxclickerHeader from '../images/boxclicker_header.png';
import boxclickerClicking from '../images/boxclicker_clicking.gif';
import boxclickerCodepen from '../images/boxclicker_codepen.png';

export const projects = {
    /*"capstone": {
        id: "capstone",
        project: "Lily Woods Photography",
        screenshotURL: capstoneImage,
        headerImg: capstoneImage,
        briefDescription: "Wedding photographer site built in WordPress",
        landingDescription: "Lily Woods Photography is a custom WordPress site developed for a fictional wedding photographer to show off their photos, and advertise their services. It was designed in a team of three as a final project.",
        liveSite: "#0",
        github: "#0",
        code: ["WordPress", "PHP", "SASS"],
        tools: ["Indesign", "Photoshop", "Github"],
        description: "Lily Woods Photography is a custom WordPress site developed for a fictional wedding photographer to show off their photos, and advertise their services. It was designed and developed along with two other teammates from the ground up.",
        reflections: "A section at the end with reflections, takeaways, things I would change or do differently, etc.",
    },*/
    "portfolio": {
        id: "portfolio",
        project: "Portfolio Project",
        screenshotURL: portfolioImage,
        headerImg: portfolioHeader,
        briefDescription: "My personal portfolio of work",
        landingDescription: "This is my personal portfolio site - the one you're on right now! It was developed with React and SASS, to be a responsive and appealing showcase for my work.",
        liveSite: "#welcome-section",
        github: "https://github.com/hildebrandmatt/My-Portfolio",
        code: ["HTML", "SASS", "React"],
        tools: ["Photoshop", "Illustrator", "Adobe XD", "Github"],
        description: "This is my personal portfolio site, designed to showcase my work. It was developed with React and SASS, to be a responsive and appealing showcase for my work.",
        planning: "This project began with a more extensive planning phase, starting with laying out all of the content to be included. Once that was established, a site map was drawn up. From there, wireframes were developed in Adobe XD to establish a straightforward and aesthetically pleasing layout to work from. I also chose to create a style tile, primarily laying out the choices in colours and font styles. Finally, before work began, I drew up some mockups in Adobe Photoshop to give myself a clear view of what I was aiming for in the development stage. With all of that laid out, I moved on to the coding.",
        planningImage: portfolioWireframes,
        development: "The development process began with establishing the structure in React, using what I'd learned in previous projects to generate an efficiently coded site essentially consisting of two main pages, which would be easily modulated depending on the specific project being viewed. From there, I began laying out the overall styling for the site, attempting to keep a simple layout with a little design flair, which ideally showcases my abilities without detracting too much from the projects being showcased.\nOnce the basic pages were laid out, I began inputting content, setting up the images and blocks of text throughout the site. Once the content was input, I moved into the final stages, finalizing the styling and added a few flairs via the navigation widgets and other details.",
        developmentImage: portfolioNavcode,
        reflections: "I'll fill this in once I have the distance to reflect from.",
    },
    "watcher": {
        id: "watcher",
        project: "Watcher Movie Database",
        screenshotURL: watcherImage,
        headerImg: watcherHeader,
        briefDescription: "Movie website built with React",
        landingDescription: "The Watcher movie database was developed in a team of two to integrate a movie database API, allowing for up-to-date movie information. This is where I learned to use React, to make a responsive and modular website design.",
        liveSite: "http://mhildebrand.bcitwebdeveloper.ca/watcher/",
        github: "https://github.com/hildebrandmatt/moviedbproject",
        code: ["HTML", "SASS", "React", "API"],
        tools: ["Photoshop", "Github"],
        description: "The Watcher movie database was developed in a team of two, and utilizes React and an external movie API to provide up-to-date movie information to the user. It features the ability to view movies sorted by several different criteria, to search the database via a search bar, and to generate a list of favourite movies.",
        planning: "Originally the movie database site was the basis for a mockup project, with a full set of pages mocked up in Adobe Photoshop. This mockup utilized artboards for separate pages, and folders designed to demonstrate dynamic UI elements in action. Coming together in a team of two, we compared mockups, chose the set we felt most compelled to work with, and proceeded with development.",
        planningImage: watcherMockups,
        development: "From there we established the general framework in React for the pages, and then divided up the tasks. I primarily focused on working with the TMDB API, making sure we could access the information we needed for our site, and formatting it into a usable structure. From there, I wrote the React code that would lay out the formatted information for each movie, and that would respond to the various options the user had for searching through the database.\nSince this was my first time working with React or an API, it involved a lot of trial and error, referring to notes, searching for similar issues and solutions online, and then more trial and error. It was slow going at times, but proved to be an excellent learning experience, and it inspired me to utilitize React in the design of this portfolio site as well.",
        developmentImage: watcherExample,
        reflections: "This was a challenging project, both in terms of implementing a number of skills that had been just recently learned, and in the level of complication in working as a team. While not the first time I worked with a teammate on a website, the level of coordination needed for this was much higher, and ultimately a great learning experience - we managed to do as much as we did with it through consistent and clear communication, and helping each other out wherever needed. This was also a great experience in learning the hard way while trying to work to a deadline, and it felt all the more satisfying when things worked.\nLooking back on this project, more than any other I've done so far, I would love to be able to go back and design it from the ground up. The amount I learned working on this project meant that almost as soon as it was finished, I could see things that would have worked better or been more cleanly coded if I had done them differently from the start. I think it's a testament to how much we care about this project that my teammate and I continued to add features and polish after it was submitted: we have since added a search functionality, and implemented some improvements to increase accessibility.",
    },
    "tuxedocat": {
        id: "tuxedocat",
        project: "Tuxedo Cat",
        screenshotURL: tuxedoCatImage,
        headerImg: tuxedoCatHeader,
        briefDescription: "Multi-page business site",
        landingDescription: "Tuxedo Cat is a website for a fictional business that combines cat cafes with cocktail lounges. It was designed in collaboration with a teammate, using HTML, SCSS, and JavaScript, to make a dynamic website.",
        liveSite: "https://mhildebrand.bcitwebdeveloper.ca/tuxedoCat/index.html",
        github: "https://github.com/hildebrandmatt/P-03",
        code: ["HTML", "SASS", "JavaScript"],
        tools: ["Photoshop", "Github"],
        description: "Tuxedo Cat is a website for a fictional business that combines cat cafes with cocktail lounges. It was designed in collaboration with a teammate, using HTML, SCSS, and JavaScript, to make a dynamic website with a mobile-first design, an interactive menu page, and a submittable reservation form.",
        planning: "We started our planning stage by considering similar already existing websites, looking at a variety of cat cafes and cocktail lounges to draw ideas and inspiration for our design. At this stage we also spent time collaborating on a mood board, and compiling stock photos we felt would suit the theme.\nWe used this research to plan out what kind of content and features we should include in our site, focusing on menus, an online reservation system, and some information about the establishment and its feline residents. With a rough content plan, we began to design a full set of mockups to guide our development, beginning with the mobile designs and then moving on to desktop.",
        planningImage: tuxedoCatMockups,
        development: "Once our mockups were completed, we began working on developing the actual website. While my teammate took on the html structure and a significant portion of the css, I began work on some of the more JavaScript reliant aspects of our site.\nThe dropdown nav on the mobile site was adapted from a few examples found on CodePen, which I used as a springboard to design the code for the effect we wanted for our site. The meet the cats page was executed with a few well organized divs, and creative use of css, to produce a dynamic layout that changes depending on whether the site is viewed on a mobile or desktop device. The menu page was largely JavaScript, used to produce a sliding effect when clicking through the various submenus.",
        developmentImage: tuxedoCatMenu,
        reflections: "I think the biggest lesson from this project was just how useful it is to work from a proper mockup. Having those well thought out designs ready to go made coding a much more straightforward process, since I already knew what the final product was meant to be. There were still plenty of challenges in achieving that end goal, but it was easier to use my time effectively to work towards that.\nLooking back on this project, there are certainly a few things I would change. This site was designed when I was still relatively new to web design, and a few elements, such as the mobile nav, could probably have been coded better from the ground up. The biggest thing I would bring to this project now though is a focus on accessibility. Since then I've learned the importance of ensuring all web users can successfully navigate your site, and many of the methods with which to do so.",
    },
    "boxclicker": {
        id: "boxclicker",
        project: "Box Clicker",
        screenshotURL: boxclickerImage,
        headerImg: boxclickerHeader,
        briefDescription: "Simple JavaScript game",
        landingDescription: "Box Clicker is my first attempt at working with JavaScript. After being introduced to the fundamentals, I wanted to see if I could create something fun and relatively simple using what I'd learned, and what I could research online.",
        liveSite: "https://mhildebrand.bcitwebdeveloper.ca/boxclicker/index.html",
        github: "https://github.com/hildebrandmatt/boxclicker",
        code: ["HTML", "CSS", "JavaScript"],
        tools: ["Google"],
        description: "Box Clicker was my first attempt at working with JavaScript. After the first week of class, I wanted to see if I could take the fundamentals that I had already learned, and apply them to an idea just outisde of my knowledge range. I came up with the idea for a simple website, where you could click a button to infinitely subdivide into smaller boxes.",
        planning: "With a fairly simple concept like this, the planning phase was relatively simple. I sketched out a rough idea of how the site would function, utilizing buttons and flex boxes. I thought about how the final html would need to be structured, and what kind of styling I would use in css to accomplish the appearance I wanted to achieve. From there, it was mostly a matter of researching JavaScript to find out how to execute the functions I needed to generate the needed html.",
        planningImage: boxclickerClicking,
        development: "Once I had a plan, writing out the html and css was relatively simple: the site is based on pretty basic ideas in that regard. It took more work learning how to accomplish the JavaScript, but in the end it functions pretty simply by checking whether the button clicked is more tall or wide, and then adding a new button and wrapping them both in the appropriate div.\nThe final touch was adding a function for random color. I found a decent example for generating a random color, and then dug into how it worked so I could customize the colour palette to my preference, since the default resulted in a disappointingly drab amount of grey.",
        developmentImage: boxclickerCodepen,
        reflections: "In the end, I have this neat little site for clicking buttons. I think it's aesthetically pleasing, and satisfying in a way akin to popping bubble wrap. It's relatively simple, but I'm proud of it mostly as an example of what you can do with a little bit of knowledge and the ability to look up new information and apply it. Plus it was a fun little project, and gave me some confidence in my burgeoning JavaScript abilities. I hope maybe you'll enjoy it too.",
    },
}