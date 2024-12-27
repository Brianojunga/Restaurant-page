import "./styles.css";
import chickenimg from "./photos/chicken.jpeg";
import { aboutMenu } from "./about.mjs";

const smallNavBar =  document.querySelector(".small-screen-navbar")
const menuBar = document.querySelector(".svgbtnopen");
const mainDiv = document.querySelector("#content");
const home = document.querySelectorAll(".home");
const menu = document.querySelectorAll(".menu");
const about = document.querySelectorAll(".about");

menuBar.addEventListener("click", () =>{
    if(menuBar.className === "svgbtnopen"){
        menuBar.className = "svgbtnclose";
        smallNavBar.style.display = "flex";
    }else{
        menuBar.className = "svgbtnopen";
        smallNavBar.style.display = "none";
    }

})


export function createElements(element, clsname, text=""){
    const el = document.createElement(element);
    el.classList.add(clsname);
    el.textContent = text
    return el;
}

function homeMenu(){

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");


    const div = document.createElement("div");
    div.classList.add("content");

   mainContent.appendChild(div)


    let paragraphsDiv, imgDiv

    for(let i = 0; i < 2; i++){
        let newDiv = document.createElement("div");
        if (i === 0){
            newDiv.classList.add("photo");
            paragraphsDiv = newDiv
        }else{
            newDiv.classList.add("img-div")
            imgDiv = newDiv
        }
        div.appendChild(newDiv);
    }

    paragraphsDiv.append(
        createElements('h1', "heading", "Enjoy our Delicious Meal"),
        createElements('p', "parahome", "Indulge in a culinary journey where flavors meet elegance.we bring you a unique dining experience inspired by the freshest ingredients and the passion for creating unforgettable meals.Discover our exquisite menu crafted with fresh, locally-sourced ingredients and served in a warm, inviting atmosphere. Your table awaits!"),
        createElements("button", "book-table", "Book a table")
    )
    const imgEl = createElements("img", "chicken-img")
    imgEl.src= chickenimg
    imgDiv.append(
       imgEl 
    )

    return mainContent
}
mainDiv.appendChild(homeMenu())


home.forEach((button) =>{button.addEventListener("click", () =>{
    mainDiv.replaceChildren()
    mainDiv.appendChild(homeMenu())
    smallNavBar.style.display = "none"; 
    menuBar.className = "svgbtnopen";
})})

menu.forEach((button) =>{button.addEventListener("click", () =>{
    mainDiv.replaceChildren()
    smallNavBar.style.display = "none"; 
    menuBar.className = "svgbtnopen";
})})

about.forEach((button) =>{button.addEventListener("click", () =>{
    mainDiv.replaceChildren()
    mainDiv.appendChild(aboutMenu())
    smallNavBar.style.display = "none"; 
    menuBar.className = "svgbtnopen";
})})

