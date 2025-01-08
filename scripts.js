const angleArrowLinks = [
    { title: "발로란트 각화살 기술1 ", url: "https://youtu.be/yA7D29nS38M?si=L0HiLFSOFdp-c_5o" },
    { title: "발로란트 각화살 기술2 ", url: "https://youtu.be/Hrq52sIqN9g?si=1mL_u_wf-zNy9EDx" }
];

const angleExplosionLinks = [
    { title: "발로란트 각폭 기술1 ", url: "https://youtu.be/XzW7rSSLIto?si=iwfj1jqJ8QCbqZo0" },
    { title: "발로란트 각폭 기술2 ", url: "https://youtu.be/XCdvjYlukHk?si=vIzq2X5zHZhCmflh" }
];

const angleMovementLinks = [
    { title: "발로란트 각칼 기술1 ", url: "https://youtu.be/R130014lxHU?si=G3lvmX4z2NgbjNgQ" },
    { title: "발로란트 각삥 기술1 ", url: "https://youtu.be/258RdNkalqw?si=cWu3L0JEeCZcHLfW" }
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
