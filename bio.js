/*

Write a bio in JavaScript

Using a JavaScript write a bio page for yourself. First, build an object in JS that contains data about yourself. Create the proper elements (<h1>, <p> <div>, <ol/ul> <li>) using js and load them to the page. The script should access the data from your object. 

Ex `<p>My name is ${person.first} ${person.last}. I am ${person.age} years old.</p>`

*/

//my array
let person = {
    id: 1,
    'myName': {
        nickname: 'Rem Dev',
        fName: 'Remilekun',
        lName: 'Odegbami'
    },
    age: 20,
    occupation: 'Student',
    hobbies: ['sleeping', 'eating', 'traveling', 'coding', 'hanging out and', 'cooking'],
    isMarried: false,
    hasKids: false,
    'favFood': ['amala and abula', 'semovita and egusi', 'well prepared party jollof', 'beans and anything that goes ^_^', 'yam and egg','spagetti stirr fry', 'pizza and ice cream', 'shawama and yoghurt.', 'and etc. Well the list is not exhaustive!'
    ],
    isAwesome: true,
    isTall: true
};

//onclick function that makes the button in my html clickable
const viewBio = () => {
    // this creates new div element
    let div = document.createElement('div');
    // this creates new p1 element
    let p1 = document.createElement('p');
    // this creates the text that will be appended to the p element created earlier
    let text1 = document.createTextNode(`Hi, my name is ${person['myName'].fName} ${person['myName'].lName}. I am ${person.age} years old \(well that is my football age... Lol). I am a ${person.occupation}, and a developer thus my friends call me ${person['myName'].nickname}. In no particular order, I love`);


    // function to create a ul li list in the dom
     const createUl = () => {
         // this creates the ul container for the li
         let ul = document.createElement('ul');
         // this assigns person.hobbies to a variable for easy access so my for loop will not have 3 dots
         let hobby = person.hobbies;
         // this for loop iterates through person.hobbies 
         for (let i = 0; i < hobby.length; i++) {
             // if the index of person.hobbies is found in the array,
             if (hobby[i] instanceof Array) {
                 //add person.hobbies to the already created unordered list
                createUl(hobby[i]);
             } else {
                 // if it is not found, create a new li,
                 let li = document.createElement('li');
                 // append the result of the index of person.hobbies to the created li element,
                 li.appendChild(document.createTextNode(hobby[i]));
                 // append the li element to the created ul,
                 ul.appendChild(li);
             }
             // then finally add the ul to the div container which is the parent container.
             div.appendChild(ul);
         }
        }
    
    /* 
    The process for creating the h2 and h3, p2 and p3, heading2 and heading3, text2 and text3 is explained above.
    
    The createOl function is the same as the createUl function explained above.
     */
    let h2 = document.createElement('h2');
    let p2 = document.createElement('p');
    let heading2 = document.createTextNode(` More about me!`);
    let text2 = document.createTextNode(` This is all you need to know about me. Am I tall? Yes I am so the answer to that question is ${person.isTall}. Am I married? Well the answer is ${person.isMarried}.  Do I have kids? Hey, I am not married so the answer is ${person.hasKids}. Yes it is ${person.isAwesome} that I am amazing and awesome. `);

    let h3 = document.createElement('h3');
    let p3 = document.createElement('p');
    let heading3 = document.createTextNode(` My Favourite Food.`)
    let text3 = document.createTextNode(`Some of my favourite food are:`)
        
    const createOl = () => {
        let ol = document.createElement('ol');
        let favFood = person['favFood'];
        for(let i = 0; i < favFood.length; i++) {
            if (favFood[i] instanceof Array) {
                createOl(favFood[i]);
            } else {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(favFood[i]));
                ol.appendChild(li);
            }
            div.appendChild(ol);
        }
    }
    
    /*
    Here, the paragraphs, headings and texts created are appended to their parent elements so they can be displayed on the browser.

    The elements have to be ordered in the manner I want it to display in the browser.
    */
    div.appendChild(p1);
    p1.appendChild(text1);
    
    createUl(person.hobbies);

    div.appendChild(h2);
    h2.appendChild(heading2);
    div.appendChild(p2)
    p2.appendChild(text2)

    
    h3.appendChild(heading3);
    div.appendChild(h3);
    p3.appendChild(text3);
    div.appendChild(p3);
    createOl(person['favFood']);

    // this finally appends the div element to the body of the browser for rendering.
    document.body.appendChild(div);
}