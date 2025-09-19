


var blogs_entries = [
    {
        title:"On God and religion",
        description: "Thoughs on religious topics",
        file: "entries/on-god.html",
        show: true,
    },
    {
        title:"The Linux Experience",
        description: "Why i started using linux and my current opinions on its use",
        file: "entries/linux-experience.html",
        show: true,
    },
];

const projects_entries = [
    {
        name: "Deux Code",
        description: "Story about a strange virus appearing throught all computers in the world.",
        file: "projects/deux-code.html",
        show: false,
    },
    {
        name: "Luna Llena",
        description: "Game about dealing with a beast.",
        file: "projects/luna-llena.html",
        show: false,
    },
];

function append_blog_entries(blogs_section){
    for(var i = 0; i < blogs_entries.length; i++){
        if (blogs_entries[i].show == false)
            continue;

        var entry = document.createElement("li");
        entry.setAttribute("class", "blog-entry");

        var title = document.createElement("a");
        title.setAttribute("href", blogs_entries[i].file);
        title.innerHTML = blogs_entries[i].title;
        entry.appendChild(title);

        var description = document.createElement("p");
        description.innerHTML = blogs_entries[i].description
        entry.appendChild(description);

        blogs_section.appendChild(entry);
    }
}

function append_projects_entries(projects_section){
    for(var i = 0; i < projects_entries.length; i++){
        if (projects_entries[i].show == false)
            continue;
        var entry = document.createElement("li");
        entry.setAttribute("class", "blog-entry");

        var title = document.createElement("a");
        title.setAttribute("href", projects_entries[i].file);
        title.innerHTML = projects_entries[i].name;
        entry.appendChild(title);

        var description = document.createElement("p");
        description.innerHTML = projects_entries[i].description;
        entry.appendChild(description);


        projects_section.appendChild(entry);
    }
}

function main(){

    var blogs_section = document.getElementById("blogs");
    var projects_section = document.getElementById("other-projects");

    append_blog_entries(blogs_section);
    append_projects_entries(projects_section);
}

main();
