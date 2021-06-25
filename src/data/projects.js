import capstoneImage from '../images/lilyWoods_desktop.png';
import capstoneHeader from '../images/capstone_header.png';
import capstoneWireframes from '../images/capstone_wireframes.png';
import capstoneMockups from '../images/capstone_mockups.png';
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
    "capstone": {
        id: "capstone",
        project: "Lily Woods Photography",
        screenshotURL: capstoneImage,
        headerImg: capstoneHeader,
        briefDescription: "Wedding photographry site built in WordPress",
        landingDescription: "A custom-built WordPress site collaboratively designed to showcase the work of a wedding photographer, and advertise their services.",
        liveSite: "https://mdhildebrand.com/lilywoods/",
        github: "https://github.com/htpwebdesign/lily-woods",
        code: ["WordPress", "PHP", "SASS"],
        tools: ["InVision", "Photoshop", "Github"],
        description: "Lily Woods Photography is a custom-built WordPress site developed for a fictional wedding photographer to show off their photos, and advertise their services. It was designed and developed from the ground up along with two other teammates.",
        planning: "This project began with a project brief laying out the client's needs, and a discovery meeting with the client where we presented our ideas and went over what they were looking for. We wrote up a memo of understanding outlining what we planned to deliver to the client, and then set up a Trello board to keep track of who was working on what.\nFrom this point, we began working on a comprehensive development plan. We worked together on laying out the information architecture for the site, making content lists for the various pages, and putting together site wireframes in InVision. We planned out the custom post types we would need, the associated custom taxonomies, and laid out the content storage for the site. We also made a list of all the plugins we would be using. We then laid out all the relevant php files for each element of the site. With that done, my teammate began constructing mockups, while I prepared much of the content and media for the site.",
        planningImage: capstoneWireframes,
        development: "With a clear development plan, we began coding the site. Throughout this process we worked largely independently, but kept in close contact to coordinate our efforts, and help each other out as needed. My teammates set up the necessary php to generate our custom post types and taxonomies, while I began filling in much of the content. I then began writing the code that would output the content to the intended pages, while my teammate set up many of the advanced custom fields. Once most of the content was loaded, I began implementing several JavaScript plugins we were using: isotope for the gallery layouts, lightgallery for the lightbox displays, and a slick slider for the testimonials. We then began styling the site, using SCSS to work in parallel so we could split up the work.\nWe began moving into the final stage of the project. Our first goal was to ensure the site was ready for the client: I modified the php to customize the client's admin page to streamline their experience, while my teammates made a few explanatory tutorials to walk them through how everything worked. Our second goal was to ensure the site was optimized for visitors: we spent time testing our site across multiple browsers and screen sizes, ensuring it was fully accessible and everything was working smoothly.",
        developmentImage: capstoneMockups,
        reflections: "Overall, I think the development of this site went really well. I think this was largely due to two factors: solid teamwork, and good planning. My team found a good rapport, and were independently motivated while keeping in close touch about what we were working on, and what we might need help with. Spending the time to work out the details and develop a clear plan in advance meant that we always had a clear idea of what we were working towards, and helped keep us on track. These factors allowed us to meet our deadlines, with time available to make sure everything was working at its best.",
    },
    "portfolio": {
        id: "portfolio",
        project: "Portfolio Project",
        screenshotURL: portfolioImage,
        headerImg: portfolioHeader,
        briefDescription: "My personal portfolio of work",
        landingDescription: "My personal portfolio site, designed with React to be a responsive and appealing showcase for some of my favourite projects.",
        liveSite: "https://mdhildebrand.com/portfolioClassic",
        github: "https://github.com/hildebrandmatt/My-Portfolio",
        code: ["HTML", "SASS", "React"],
        tools: ["Photoshop", "Illustrator", "Adobe XD", "Github"],
        description: "My personal portfolio site, designed to showcase my work. It was developed with React and SASS, to be a responsive and appealing showcase for myself and my work.",
        planning: "The first decision I made with this site was to build it in React. I had worked with React a bit previously, and wanted to use this as an opportunity to put what I had learned into practice, and to get more experience with it. This also allowed me to take a modular approach to the site, streamlining future updates. I began laying out all of the content to be included, drawing up a site map, and designing wireframes in Adobe XD to establish a straightforward and aesthetically pleasing layout. I also designed a style tile, laying out my choices in colours and font styles. With all of that prepared, I drew up mockups in Adobe Photoshop, to give myself a clear view of what I was aiming for in the development stage.",
        planningImage: portfolioWireframes,
        development: "The development process began with establishing the structure in React. Using what I'd learned in previous projects, I chose to generate an efficiently coded site consisting of essentially two main pages: the landing page, and a project page which would load up the relevant project's information. I used separate data files to contain all of the content, to ensure future updates could be carried out smoothly, and that everything was well organized.\nFrom there, I began laying out the overall styling for the site, aiming for a simple layout with a little bit of design flair, which would ideally showcase my abilities without detracting too much from the projects being showcased. Once the basic pages were laid out, I began adding a few features such as the navigation bar, which uses state to show where the user is on the page, and a dynamic background element that moves along with the user's scrolling.",
        developmentImage: portfolioNavcode,
        reflections: "This was a very enjoyable project to work on. I went into it with the intention of getting more practice with React, and I was pleased to find my skills improving, and to see just how useful React could be. Using separate files for storing information, and iterative design, has made it really easy to come back for updates. This project also demonstrated how important it is to plan ahead. I spent more time planning and designing this site than I had any prior project, and it made the workflow much smoother when I began coding.\nSince it's completion, I have continued to update this site - in addition to a stylistic refresh, I have continued to update the content and refine various other elements. Regardless, I have found the initial design and organization to be very easy to come back to work with, and expect I will continue to polish this site for a long time to come. Nevertheless, I'm maintaining the original design here, as a record of the original project.",
    },
    "watcher": {
        id: "watcher",
        project: "Watcher Movie Database",
        screenshotURL: watcherImage,
        headerImg: watcherHeader,
        briefDescription: "Movie website built with React",
        landingDescription: "A collaborative project utilizing React and an API to deliver up-to-date movie information with a clear, intuitive user interface.",
        liveSite: "https://mdhildebrand.com/watcher/",
        github: "https://github.com/hildebrandmatt/moviedbproject",
        code: ["HTML", "SASS", "React", "API"],
        tools: ["Photoshop", "Github"],
        description: "We began this project by designing high fidelity mockups in Adobe Photoshop. This mockup utilized artboards for separate pages, and proper layering techniques to represent the dynamic UI elements in action. Once we had a mockup we were excited about, we moved onto the development stage.",
        planningImage: watcherMockups,
        development: "We established a general framework for the pages in React, and then divided the tasks. My focus for this part of the project was primarily on working with the TMDB API, ensuring that we could access the information we needed for our site, and that it would be formatted in a user-friendly way. From there, I began working on the code to lay out the formatted information for each movie, to allow the user to search the database, and for the user to create a list of favourites without the need to log in.\nSince this was my first experience working with React, or an API, it involved a lot of trial and error, referring to notes, and searching for similar issues and solutions online. It was slow going at times, but it was also an excellent learning experience, and by the time the site was complete it had inspired me to utilize React in the design of this portfolio site as well.",
        developmentImage: watcherExample,
        reflections: "This was a challenging project, both in terms of implementing a number of skills that had been recently learned, and the amount of coordination needed to work on it as a team. It was also a great learning opportunity: we managed to accomplish as much as we did through consistent and clear communication, coordinating on tasks and helping each other out when needed. The difficulty of this project made it all the more satisfying when we managed to complete it, with time to spare to add in a few optional components.\nLooking back on this project, more than any other I've done so far, i would love to go back and design it from the ground up. The amount I learned from working on this project meant that almost as soon as it was finished, I could see things that would have worked more smoothly if they had been coded differently from the beginning. We have come back to this project a few times since submission, to add features and polish: expanding the search functionality, and implementing some improvements to accessibility.",
    },
    "tuxedocat": {
        id: "tuxedocat",
        project: "Tuxedo Cat",
        screenshotURL: tuxedoCatImage,
        headerImg: tuxedoCatHeader,
        briefDescription: "Multi-page business site",
        landingDescription: "A team project designed using JavaScript and SCSS to create a dynamic website for a fictional business combining cat cafes with cocktail lounges.",
        liveSite: "https://mdhildebrand.com/tuxedocat/",
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
    /*"boxclicker": {
        id: "boxclicker",
        project: "Box Clicker",
        screenshotURL: boxclickerImage,
        headerImg: boxclickerHeader,
        briefDescription: "Simple JavaScript game",
        landingDescription: "An early attempt at exploring the fundamentals of JavaScript, to create something fun and relatively simple using what I'd learned, and what I could research online.",
        liveSite: "https://mdhildebrand.com/boxclicker/",
        github: "https://github.com/hildebrandmatt/boxclicker",
        code: ["HTML", "CSS", "JavaScript"],
        tools: ["Google"],
        description: "Box Clicker was my first attempt at working with JavaScript. After the first week of class, I wanted to see if I could take the fundamentals that I had already learned, and apply them to an idea just outisde of my knowledge range. I came up with the idea for a simple website, where you could click a button to infinitely subdivide into smaller boxes.",
        planning: "With a fairly simple concept like this, the planning phase was relatively simple. I sketched out a rough idea of how the site would function, utilizing buttons and flex boxes. I thought about how the final html would need to be structured, and what kind of styling I would use in css to accomplish the appearance I wanted to achieve. From there, it was mostly a matter of researching JavaScript to find out how to execute the functions I needed to generate the needed html.",
        planningImage: boxclickerClicking,
        development: "Once I had a plan, writing out the html and css was relatively simple: the site is based on pretty basic ideas in that regard. It took more work learning how to accomplish the JavaScript, but in the end it functions pretty simply by checking whether the button clicked is more tall or wide, and then adding a new button and wrapping them both in the appropriate div.\nThe final touch was adding a function for random color. I found a decent example for generating a random color, and then dug into how it worked so I could customize the colour palette to my preference, since the default resulted in a disappointingly drab amount of grey.",
        developmentImage: boxclickerCodepen,
        reflections: "In the end, I have this neat little site for clicking buttons. I think it's aesthetically pleasing, and satisfying in a way akin to popping bubble wrap. It's relatively simple, but I'm proud of it mostly as an example of what you can do with a little bit of knowledge and the ability to look up new information and apply it. Plus it was a fun little project, and gave me some confidence in my burgeoning JavaScript abilities. I hope maybe you'll enjoy it too.",
    },*/
}