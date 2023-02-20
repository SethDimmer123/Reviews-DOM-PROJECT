// local reviews data
const reviews = [
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

//   i need to figure out what i want to happen?


// what i want to happen is i want to access the items from the html

// I WANT TO ACCESS THE image,author,and job info.

// i want to change the information DYNAMICALLY when i click one of the arrow buttons

//  as well as have a math.random on the Surpise Me button to generate the random a object 
// in the array of 4 that i have.


  // select items

//  storing them in variables so it is easier to access them 

  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');

  /*accessing classes i use query selector*/
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');



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

// then with all of the variables i have i will replace the values of the id 
// and classes from the index.html (DYNAMICALLY).
  
  // load initial item

// we add event listener on the window object because i am adding it to the current window 
// (tab) i am on.

// the DOMContentLoaded event fires when the HTML document has loaded without 
// waiting for stylesheets,images or subframs to finish loading

// when the DOMContentLoaded has been loaded then the code INSIDE of the function
// is executed.

  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];

    img.src = item.img;
        // for image i have the src property
    // i set it equal to my image because i assigned the first object(item) with
    // the id of 1 
    // in my first object(item) i have a the img property which gives me the image
    // of that object
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
        // now since i have the info for 1 item i want to change the info based on
    // the functinaility of the 2 buttons.(10:30) increasing or decreasing the currentItem
    // variable on (line 76)
  });

      // (10:52) BEFORE I increase or decrease the currentItem value which is 
    // at this point 0
    // i have REFACTOR MY CODE IN THE event listener above becuase 
    // even though the code is right when i increase or decrease the item number 
    // i would have to get the item each time like on line 104 but also change the values
    // which for example are lines 109,115,116,117

    // INSTEAD OF DOING THAT I WANT A FUNCTION THAT CHANGES THE VALUES FOR ME 
    // when i have click events for the 3 buttons.
    // I DO NOT WANT TO COPY AND PASTE THE SAME CODE IN ALL 3 OF MY EVENT LISTENERS

    // I WANT TO SETUP AS A FUNCTION AND REUSE THE FUNCTION

    // HOW TO DO THAT DOWN BELOW


  
  // show person based on item (11:44)
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

// then i call the function by putting the currentItem of the reviews which is 0(line 70)
// which is also the starting index in a variable to use to access the image,author,job info
// (lines 96,102,103,104) in the DOMContentLoaded function.(line 93)
// then pass in the currentItem variable so i can reuse the showPerson function


// i can now setup 2 event listeners for my 2 arrow buttons

  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {// the -1 reflects the actual last item in my array
        // if the currentItem is GREATER than the length of the reviews array 
        // if im at the last item in the array then i will start from scratch
      currentItem = 0;
    }
        // if i am at my last item in the array thenthe currentItem is 0 so start from scratch
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) { // the -1 reflects the actual last item in my array
      currentItem = reviews.length - 1;
    }
    // if i am at my last item in the array then the currentItem is 0 so start from scratch
    showPerson(currentItem);
  });


    // challenge for random suprise me button(19:00)

    // add event listener to the randomBtn

    // once the user clicks the button

    // i need to display a random item from the reviews array


  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
  });
    











