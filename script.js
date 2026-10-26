const username = "kimireen85-eng";
const projectsContainer =
    document.getElementById("projects-container");

async function loadProjects() {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=3`
        );

        if (!response.ok) {
            throw new Error("Unable to retrieve projects");
        }

        const projects = await response.json();

        projectsContainer.replaceChildren();

        if (projects.length === 0) {
            projectsContainer.textContent = "No public projects found.";
            return;
        }

        projects.forEach(project => {
            const card = document.createElement("article");
            card.className = "project-card";

            const label = document.createElement("span");
            label.textContent = project.language || "Software Project";

            const title = document.createElement("h3");
            title.textContent = project.name;

            const description = document.createElement("p");
            description.textContent =
                project.description || "Explore this project on GitHub.";

            const link = document.createElement("a");
            link.className = "button";
            link.href = project.html_url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "View on GitHub";

            card.append(label, title, description, link);
            projectsContainer.appendChild(card);
        });
    } catch (error) {
        projectsContainer.textContent =
            "Projects could not be loaded. Please try again later.";
        console.error(error);
    }
}

loadProjects();