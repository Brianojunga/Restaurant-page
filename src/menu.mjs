import { createElements } from "./index.mjs";

export function ourMenu(){
    const div = document.createElement("div");
    div.classList.add("aboutmenu");

    div.appendChild(createElements("h1", "menu-heading", "Our menu"));

    const paraDiv = document.createElement("div");
    div.classList.add("paraabout");
     
    div.appendChild(paraDiv)

    const menuElements = [
        {
            h2: "Starters",
            items: [
                { h3: "Tomato Basil Soup - $6.99", p: "Creamy tomato soup with fresh basil and a hint of garlic." },
                { h3: "Garlic Bread - $5.49", p: "Crispy baguette topped with garlic butter and parsley." },
                { h3: "Caprese Salad - $8.99", p: "Fresh mozzarella, tomatoes, basil, and balsamic glaze." }
            ]
        },
        {
            h2: "Main Dishes",
            items: [
                { h3: "Grilled Salmon - $18.99", p: "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables." },
                { h3: "Chicken Alfredo Pasta - $14.99", p: "Creamy Alfredo sauce with grilled chicken, served over fettuccine pasta." },
                { h3: "Margherita Pizza - $12.99", p: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil." },
                { h3: "Ribeye Steak - $24.99", p: "10 oz. ribeye steak, seasoned and grilled, served with mashed potatoes." }
            ]
        },
        {
            h2: "Desserts",
            items: [
                { h3: "Chocolate Lava Cake - $7.99", p: "Warm, rich chocolate cake with a gooey molten center, served with vanilla ice cream." },
                { h3: "Tiramisu - $6.99", p: "Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream." },
                { h3: "Cheesecake - $7.49", p: "Creamy New York-style cheesecake with a graham cracker crust, topped with fresh strawberries." },
                { h3: "Ice Cream Sundae - $5.99", p: "Three scoops of your choice of ice cream, topped with whipped cream, nuts, and chocolate syrup." }
            ]
        }
    ]
    
    
    menuElements.forEach(element => {
        paraDiv.append(
            createElements("h2", "menuh2", element.h2),
            createElements("hr", "hr3"))

        element.items.forEach(item => {
            paraDiv.append(
                createElements("h3", "h3-menu", item.h3),
                createElements("p", "contact-para", item.p)
            );
        })
        
    })

    return div
}