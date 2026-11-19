
// ACTIVITY 9 - SECTION A: STORE PROJECTS AS DATA

const projects = [

    {
        title: "Bio Page",
        description: "My first HTML and CSS page.",
        category: "HTML"
    },

    {
        title: "Responsive Nav",
        description: "A flexbox nav bar that adapts.",
        category: "CSS"
    },

    {
        title: "Grid Gallery",
        description: "Cards laid out with CSS Grid.",
        category: "CSS"
    },

    {
        title: "Contact Form",
        description: "A form with validation.",
        category: "HTML"
    },

    {
        title: "My Portfolio",
        description: "A collection of my web development work.",
        category: "HTML"
    }

];


// ACTIVITY 9 - SECTION B: BUILD CARDS WITH A LOOP

const grid = document.querySelector("#projectsGrid");

function displayProjects(projectList) {

    grid.innerHTML = "";

    projectList.forEach(function (project) {

        const card = document.createElement("div");

        card.className = "project-card";

        card.innerHTML =
            "<h3>" + project.title + "</h3>" +
            "<p>" + project.description + "</p>";

        grid.appendChild(card);

    });

}

// Display all projects
displayProjects(projects);


// ACTIVITY 9 - SECTION C: FORM HANDLING

const form = document.querySelector("#contactForm");

const formMessage = document.querySelector("#formMessage");

const nameInput = document.querySelector("#name");

const messageInput = document.querySelector("#message");

const charCounter = document.querySelector("#charCounter");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();

    const text = messageInput.value.trim();

    if (name === "" || text.length < 10) {

        formMessage.textContent =
            "Please enter your name and a message of at least 10 characters.";

        return;

    }

    formMessage.textContent =
        "Thanks, " + name + "! Your message was received.";

    form.reset();

    // Reset character counter
    charCounter.textContent = "0 / 500 characters";

});


// ACTIVITY 9 - SECTION E: PROJECT FILTERS

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category = button.dataset.filter;

        filterButtons.forEach(function (filterButton) {

            filterButton.classList.remove("active");

        });

        button.classList.add("active");

        if (category === "All") {

            displayProjects(projects);

        } else {

            const filteredProjects = projects.filter(function (project) {

                return project.category === category;

            });

            displayProjects(filteredProjects);

        }

    });

});


// ACTIVITY 9 - SECTION E: CHARACTER COUNTER

messageInput.addEventListener("input", function () {

    charCounter.textContent =
        messageInput.value.length + " / 500 characters";

});


// ACTIVITY 9 - SECTION E: DARK MODE

const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "Switch to Light Mode";

    } else {

        themeToggle.textContent = "Switch to Dark Mode";

    }

});
