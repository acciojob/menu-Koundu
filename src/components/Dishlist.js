import React, { useState } from 'react';
 
const dishes = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: 'https://sugarspunrun.com/wp-content/uploads/2019/03/Best-buttermilk-pancake-recipe-11-of-16.jpg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        price: 13.99,
        img: 'https://pbs.twimg.com/media/FywkQmBXgAImRE0?format=jpg&name=small',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: 'https://vishal-raj-1.github.io/Awesome-JavaScript-Projects/assets/Images/foodCourt/item-3.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        price: 20.99,
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/36/d8/8e/hill-country-delight.jpg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: 'egg attack',
        category: 'lunch',
        price: 22.99,
        img: 'https://static.toiimg.com/photo/msid-68393465/68393465.jpg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: 'oreo dream',
        category: 'shakes',
        price: 18.99,
        img: 'https://www.cookwithnabeela.com/wp-content/uploads/2021/09/OreoMilkshake.webp',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: 'bacon overflow',
        category: 'breakfast',
        price: 8.99,
        img: 'https://external-preview.redd.it/H5wUsbQwYSKQYxJII7ARXb6Jvk_-Xb30tyjbwf_MuZU.jpg?auto=webp&s=dd43553dc06d9f6d229663c7160282f42b47a539',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: 'american classic',
        category: 'lunch',
        price: 12.99,
        img: 'https://cdn.tasteatlas.com//images/dishes/df459d9fe5ad400e8bf69e4f25d9cf12.jpg?w=375&h=280',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: 'quarantine buddy',
        category: 'shakes',
        price: 16.99,
        img: 'https://pbs.twimg.com/media/EVhDJHHWoAAEbkB.jpg:large',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
];
 
const DishList = () => {
  const [category, setCategory] = useState('all');
 
  const filterDishes = (category) => {
    if (category === 'all') {
      return dishes;
    }
    return dishes.filter((dish) => dish.category === category);
  };
 
  return (
    <div>
      <div className="categories">
        <button onClick={() => setCategory('all')}>All</button>
        <button onClick={() => setCategory('breakfast')}>Breakfast</button>
        <button onClick={() => setCategory('lunch')}>Lunch</button>
        <button onClick={() => setCategory('shakes')}>Shakes</button>
      </div>
      <div className="dishes">
        {filterDishes(category).map((dish) => (
          <div key={dish.id} id='dish'>
            <img src={dish.img} alt={dish.title} style={{width : "160px",height:"160px"}}/>
            <div id='title'>
            <h3>{dish.title}</h3>
            <p>{dish.desc}</p>
            </div>
            <p><b>${dish.price}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default DishList;