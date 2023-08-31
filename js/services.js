services = [
    {
        id: "social-media",
        service: "Social Media Management",
        desc: "Lorem ipsum Social media dolor sit amet consectetur adipisicing elit. Saepe nulla nemo repellendus eum excepturi consectetur quo porro perspiciatis distinctio impedit. Asperiores numquam voluptate reiciendis sunt temporibus tempore, explicabo ullam corporis. ",
    },
    
    {
        id: "flex-design",
        service: "flex Design",
        desc: "Lorem ipsum flex Design dolor sit amet consectetur adipisicing elit. Saepe nulla nemo repellendus eum excepturi consectetur quo porro perspiciatis distinctio impedit. Asperiores numquam voluptate reiciendis sunt temporibus tempore, explicabo ullam corporis. ",
    },

    {
        id: "reels",
        service: "reels",
        desc: "Lorem ipsum reels dolor sit amet consectetur adipisicing elit. Saepe nulla nemo repellendus eum excepturi consectetur quo porro perspiciatis distinctio impedit. Asperiores numquam voluptate reiciendis sunt temporibus tempore, explicabo ullam corporis. ",
    },

    {
        id: "web-dev",
        service: "web dev",
        desc: "Lorem ipsum web dev dolor sit amet consectetur adipisicing elit. Saepe nulla nemo repellendus eum excepturi consectetur quo porro perspiciatis distinctio impedit. Asperiores numquam voluptate reiciendis sunt temporibus tempore, explicabo ullam corporis. ",
    },

    {
        id: "marketing-consultency",
        service: "marketing consultency",
        desc: "Lorem ipsum marketing consultency dolor sit amet consectetur adipisicing elit. Saepe nulla nemo repellendus eum excepturi consectetur quo porro perspiciatis distinctio impedit. Asperiores numquam voluptate reiciendis sunt temporibus tempore, explicabo ullam corporis. ",
    }
];

window.addEventListener("DOMContentLoaded", () => {
    let categories = getCategories(services);
    createBtnFromList(categories);

});

function getCategories(list){
    return list.map(item => item.id);
}

function createBtnFromList(categories){
    let btnSpace = document.getElementById("service-names");
    categories.forEach(element => {
        let btn = document.createElement("button");
        btn.textContent = services.find(e => e.id === element).service;
        btn.id = element;
        btnSpace.appendChild(btn);
    });
}