import { createElements } from "./index.mjs";
import outsideImg from "./photos/outside.jpeg";



export function contactMenu(){
    const div = document.createElement("div");
    div.classList.add("aboutmenu")

    div.appendChild(createElements("h1", "contact-heading", "Contact"));

    div.appendChild(createElements("hr", "hr1"));

    let photosDiv, paraDiv

    for(let i = 0; i < 2; i++){
        let newDiv = document.createElement("div");
        if (i === 0){
            newDiv.classList.add("photo");
            photosDiv = newDiv
        }else{
            newDiv.classList.add("paraabout")
            paraDiv = newDiv
        }
        div.appendChild(newDiv);
    }

    const imgEl = createElements("img", "restaurantImg")
        imgEl.src= outsideImg;
        imgEl.alt = "nightview of the hotel";
        photosDiv.append(imgEl)


    const contactEl = [
        {
            h2 : "Location",
            p1 : "456 Huruma, Juja road",
            p2 : "Nairobi, Kenya",
        },
        {
            h2 : "Hours",
            p1 : "Monday: Closed",
            p2 : "Tuesday - Thursday: 8:00 AM - 10:00 PM",
            p3 : "Friday - Saturday: 9:00 AM - 11:00 PM",
            p4 : "Sunday: 12:00 PM - 9:00 PM"
        },
        {
            h2 : "Contact",
            p1 : "Tel: (+254) 712-345-678",
            p2 : "Email: hotelojay@info.com",
        }
    ]

    contactEl.forEach(element => {
        for (let key in element){
            if(key === "h2"){
                paraDiv.append(
                    createElements("h2", "h2-contact", element.h2),
                    createElements("hr", "hr3")
            )} else{
                paraDiv.append(createElements("p", "contact-para", element[key]))
            }
        }
        
    })

    return div

}