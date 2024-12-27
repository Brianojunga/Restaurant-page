import { createElements } from "./index.mjs";
import restaurantImg from "./photos/restaurant.jpeg";

export function aboutMenu(){
    const div = document.createElement("div");
    div.classList.add("aboutmenu");
    
    div.appendChild(createElements("h1", "about-heading", "About us"));

    div.appendChild(createElements("hr", "hr1"));

    let photosDiv, paraDiv

    for(let i = 0; i < 2; i++){
        let newDiv = document.createElement("div");
        if (i === 0){
            newDiv.classList.add("photo");
            photosDiv = newDiv
            div.appendChild(newDiv);
            div.appendChild(createElements("hr", "hr2"));
        }else{
            newDiv.classList.add("paraabout")
            paraDiv = newDiv
            div.appendChild(newDiv);
        }
       
    }


    const imgEl = createElements("img", "restaurantImg")
        imgEl.src= restaurantImg
        imgEl.alt = "Chairs and Tables in Hotel"
        photosDiv.append(imgEl)

    paraDiv.append(
        createElements("p", "about-paragraph", "Whether you’re here for a casual lunch, an intimate dinner, or a celebration with friends and family, our welcoming ambiance and attentive service will make your visit truly memorable."), 
         createElements("p", "about-paragraph", "We offer a diverse menu featuring [highlight popular dishes or unique offerings, e.g., wood-fired pizzas, hand-rolled sushi, or signature cocktails] and cater to various dietary preferences, including vegetarian, vegan, and gluten-free options."), 
        createElements("p", "about-paragraph", "At ojays, every meal is more than just food—it’s an experience filled with love, warmth, and community. We look forward to serving you soon!")
    )


    return div

}