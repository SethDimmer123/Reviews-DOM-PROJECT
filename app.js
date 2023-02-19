// local reviews data

// i am setting up data locally because i haven't learned ajax or how to setup
// http requests.
// that is why i will use local data in these DOM PROJECTS

const reviews = [ /*array of objects*/
// 4 items
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

//   what do i want to happen.

// what i want to do is i want to access the items from the html
// meaning i want to access the image,author,and job info .

// i want to change the information DYNAMICALLY when i click one of the arrow buttons

//  as well as have a math.random on the Surpise Me button to generate the random a object 
// in the array of 4 that i have.

// select items

//  storing them in variables so it is easier to access them 

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

/*accessing classes i use query selector*/

// i could use a forEach and querySelectorAll (refer back to the counter project)
// to remember how i did it.

const prevBtn = document.querySelector('.prev-btn') 
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')


//  now i need to setup some sort of variable that stores my starting value in my array.
// the reviews array with the starting index is 0

// i have 4 items in the array


// set starting item with an index of 0 which is the first item 
// object in the array.
let currentItem = 0;


// now what do i want to do?

// once my document loads i want to access whatever item from the array which 
// in this case is the first object with the id of 1. 

// I DO THAT BY SELECTING THE FIRST ITEM(object)

// then with all of the variables i have i will replace the values of the id and classes from the 
// index.html (DYNAMICALLY).


// load initial item
// we add event listener on the window object because i am adding it to the current window 
// (tab) i am on.

// the DOMContentLoaded event fires when the HTML document has loaded without 
// waiting for stylesheets,images or subframs to finish loading

// when the DOMContentLoaded has been loaded then the code INSIDE of the function
// is executed.

window.addEventListener('DOMContentLoaded',function(){
    // console.log('seth')

    // but now i want to access my first item how do i do that?(6:20)
    const item = reviews[currentItem]// i access my first item in my array by using the 
    // reviews array and put it in a variable.
    // and pass in my currentItem

    // img.src = item.img
})















