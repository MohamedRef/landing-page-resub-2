/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const nav = document.querySelector("#navbar__list"); // or by getElementById 
const fragment = document.createDocumentFragment();
const links = document.querySelectorAll('a')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// a Function for stteing multiple attributes at once 
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
sections.forEach(element => {

    //creating my navbar elements and assigning them to variables
    const text = element.getAttribute("data-nav");
    const navMenu = document.createElement('li');
    const aLinks = document.createElement('a');

    //setting multiple attributes
    setAttributes(aLinks, { "id": element.id, "class": "menu__link", "href": `# ${element.id}` });


    // scrolling action on clicking 
    navMenu.addEventListener("click", () => {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    });

    navMenu.appendChild(aLinks)
    aLinks.textContent = text;
    fragment.appendChild(navMenu)
});
nav.appendChild(fragment)







activeSection = () => {

    //Adding active class to the viewd section
    sections.forEach(section => {
        const links = document.querySelectorAll('a');
        const rect = section.getBoundingClientRect();

        //Setting the condition to add the active class to section
        if (rect.top >= 0 && rect.top <= 200) {
            sections.forEach(section => {
                //Resetting all classes 
                section.classList.remove("your-active-class")
            });
            // adding the active class
            section.classList.add('your-active-class')

            //Adding active class to the menu bar to show in which section im 
            const data_nav = section.getAttribute('data-nav');
            links.forEach(link => {

                //Setting the condition to add the active class to the link 
                if (link.textContent == data_nav) {
                    links.forEach(link => {
                        //Resetting all classes 
                        link.classList.remove("active_link");
                    });
                    // adding the active class
                    link.classList.add("active_link");
                }
            });
        }
    });
};

window.addEventListener('scroll', activeSection)




//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document with smoothness
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox & other browsers
}

