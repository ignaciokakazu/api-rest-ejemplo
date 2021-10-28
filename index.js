const express = require("express");

//CONFIGURACIÓN BÁSICA DEL SERVIDOR
const port = 8080;
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.listen(port, ()=> {console.log(`Server up in ${port}`)});

//END POINTS
app.get('/', (request, response)=> {
    response.json({
        msg: `Hola, soy el servidor y estoy escuchando el puerto ${port}`
    })
})

app.get('/api/ejemploGet', (request, response)=> {
    response.json({
        msg: 'Soy la respuesta del GET'
    })
})

app.post('/api/ejemploPost', (request, response)=> {
    response.json({msg: 'Soy la respuesta del POST'});
})

app.get('/api/products', (request, response)=> {
    const menu = [
        {
          id: 1,
          title: "buttermilk pancakes",
          category: "Desserts",
          price: 15.99,
          img: "./img/item-1.jpeg",
          desc: `Strawberries, bananas, pineapple, walnuts, and lightly drizzled with honey.`,
        },
        {
          id: 2,
          title: "U.S.A Angus",
          category: "Hamburguers",
          price: 13.99,
          img: "./img/item-2.jpeg",
          desc: `Prime Aberdeen Angus 6oz burgers, hand pressed, freshly grilled with Monterey Jack Cheese, steak chips and a helping of mayonnaise & chilli sauce`,
        },
        {
          id: 3,
          title: "Godzilla Milkshake",
          category: "Desserts",
          price: 6.99,
          img: "./img/item-3.jpeg",
          desc: `One taste of our award-winning milkshakes will transport you back to the 1950s. Made by combining our homemade ice cream and syrups, the flavor possibilities are endless!`,
        },
        {
          id: 4,
          title: "Peperoni Pizza",
          category: "Pizzas",
          price: 20.99,
          img: "./img/item-4.jpeg",
          desc: `tomato, garlic, basil and pepperoni.`,
        },
        {
          id: 5,
          title: "NYC Hamburguer",
          category: "Hamburguers",
          price: 22.99,
          img: "./img/item-5.jpeg",
          desc: `Prime Aberdeen Angus 6oz burgers, hand pressed with cheddar, onnions, tomato, homemade mayonnaise. Combining with fries. `,
        },
        {
          id: 6,
          title: "Apple pie",
          category: "Desserts",
          price: 18.99,
          img: "./img/item-6.jpeg",
          desc: `Apple tatin, caramelized puff pastry, cinnamon brown sugar Calvados mousse, chocolate shell.`,
        },
        {
          id: 7,
          title: "Margherita Pizza",
          category: "Pizzas",
          price: 8.99,
          img: "./img/item-7.jpeg",
          desc: `Tomato, mozzarella and basil.`,
        },
        {
          id: 8,
          title: "Mariana Pizza",
          category: "Veggie",
          price: 12.99,
          img: "./img/item-8.jpeg",
          desc: `Tomato, garlic and basil--no cheese (vegan).`,
        },
        {
          id: 9,
          title: "Lemon Ricotta Cheesecake",
          category: "Desserts",
          price: 16.99,
          img: "./img/item-9.jpeg",
          desc: `Graham sable, poached pears, ginger cream, crispy cheesecake.`,
        },
        {
          id: 10,
          title: "bison steak",
          category: "steak",
          price: 22.99,
          img: "./img/item-10.jpeg",
          desc: `Seasoned Medium Rare Grilled Bison Steak with vegatbles and special sause`,
        },
        {
          id: 11,
          title: "Hamburger Ikson",
          category: "Veggie",
          price: 15.20,
          img: "./img/item-12.png",
          desc: `Smoked Soy Beef Burger with Caramelized Onion, Cashew and Peanut Cheddar, Cucumber Pickle, Ketchup, Brioche Bread, served with Potatoes or Sweet Potato Fries.`,
        },
        {
          id: 12,
          title: "Veggan sandwich",
          category: "Veggie",
          price: 12.00,
          img: "./img/item-11.png",
          desc: `Grilled smoked seitan loin, Potato bread, Lettuce, Tomato, Homemade barbecue, accompanied with potatoes or sweet potato fries. You can also order the steak alone`,
        },
        {
          id: 13,
          title: "Veggan Carrot Cacke",
          category: "Veggie",
          price: 12.00,
          img: "./img/item-13.jpg",
          desc: `Along with the flour, the carrot is the main ingredient in this cake. Its texture and its slight sweet taste make it a very suitable vegetable for sweet recipes as well.`,
        },  
      ];

    response.json(menu);
})

app.post('/api/form', (request, response)=> {
    const respuesta = request.body;
    console.log(respuesta);
    response.json(respuesta);
})
