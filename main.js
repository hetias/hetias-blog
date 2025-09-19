


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
        title: "Deux Code",
        description: "Story about a strange virus appearing throught all computers in the world.",
        file: "projects/deux-code.html",
        show: false,
    },
    {
        title: "Luna Llena",
        description: "Game about dealing with a beast.",
        file: "projects/luna-llena.html",
        show: false,
    },
];

function append_entries_to_section(entries, section){
    for(var i = 0; i < entries.length; i++){
        if (entries[i].show == false)
            continue;
        var entry = document.createElement("li");
        entry.setAttribute("class", "blog-entry");

        var title = document.createElement("a");
        title.setAttribute("href", entries[i].file);
        title.innerHTML = entries[i].title;
        entry.appendChild(title);

        var description = document.createElement("p");
        description.innerHTML = entries[i].description;
        entry.appendChild(description);

        section.appendChild(entry);
    }
}

function main(){

    var blogs_section = document.getElementById("blogs");
    var projects_section = document.getElementById("other-projects");

    append_entries_to_section(blogs_entries, blogs_section);
    append_entries_to_section(projects_entries, projects_section);
}

main();
