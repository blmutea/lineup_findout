const angleArrowLinks = [
    { title: "발로란트 각화살 기술 1", url: "https://www.youtube.com/watch?v=EXAMPLE1" },
    { title: "발로란트 각화살 기술 2", url: "https://www.youtube.com/watch?v=EXAMPLE2" }
];

const angleExplosionLinks = [
    { title: "발로란트 각폭 기술 1", url: "https://www.youtube.com/watch?v=EXAMPLE3" },
    { title: "발로란트 각폭 기술 2", url: "https://www.youtube.com/watch?v=EXAMPLE4" }
];

const angleMovementLinks = [
    { title: "발로란트 각귀체 기술 1", url: "https://www.youtube.com/watch?v=EXAMPLE5" },
    { title: "발로란트 각귀체 기술 2", url: "https://www.youtube.com/watch?v=EXAMPLE6" }
];

function addLinks(categoryId, links) {
    const container = document.getElementById(categoryId);
    links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.textContent = link.title;
        container.appendChild(a);
    });
}

addLinks("angleArrowLinks", angleArrowLinks);
addLinks("angleExplosionLinks", angleExplosionLinks);
addLinks("angleMovementLinks", angleMovementLinks);
