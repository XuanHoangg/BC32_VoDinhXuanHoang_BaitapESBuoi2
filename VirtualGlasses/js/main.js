let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
let copyGlasses = [];
function dom(selector) {
    return document.querySelector(selector)
}
function displayGlasses() {
    let glasses = dataGlasses.reduce((result, glasses) => {
        return result + `
            <tr>
                <td>
                   <img src="${glasses.src}" data-id ="${glasses.id}" style = "cursor:pointer" width="140px" height="140px" class = "m-2">
                </td>
            </tr>
        `
    }, "")
    dom(".vglasses__left").innerHTML = glasses;
}
displayGlasses()
dom(".vglasses__left").addEventListener("click", (evt) => {
    let glassesId = evt.target.getAttribute("data-id");
    let index = dataGlasses.findIndex((glasses) => {
        return glassesId === glasses.id;
    })
    if (!glassesId) {
        return false
    }
    else {
        let avtGlasses = [dataGlasses[index]];
        copyGlasses = [...avtGlasses];
        console.log(copyGlasses);
        displayAvtGlasses(avtGlasses);
    }
})

function displayAvtGlasses(avtGlasses) {
    let glasses = avtGlasses.reduce((result, glasses) => {
        return result + `
        <tr>
            <td>
                <img src="${glasses.virtualImg}" width="140px" height="140px">
            </td>
        </tr>
        `
    }, "")
    dom("#avatar").innerHTML = glasses;
    let glassesInfo = avtGlasses.reduce((result, glasses) => {
        return result + `
            <p>${glasses.name} - ${glasses.brand} (${glasses.color})</p>
            <p> 
                <span class="bg-danger">$${glasses.price}</span> 
                <span class = "text-success">Stocking</span> 
            </p>
            <p>${glasses.description}</p>
        `
    }, "")
    dom(".vglasses__info").style.display = "block"
    dom(".vglasses__info").innerHTML = glassesInfo;
}

dom("#removeGlasses").addEventListener("click", () => {
    dom("#avatar").innerHTML = "";
    dom(".vglasses__info").style.display = "none";
    dom(".vglasses__info").innerHTML = "";
})


dom("#addGlasses").addEventListener("click", () => {
    displayAvtGlasses(copyGlasses);
})





































