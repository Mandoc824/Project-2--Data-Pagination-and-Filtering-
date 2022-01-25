/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const itemsPerPage = 9;

//this function will create elements 
//the parameters are: ele-element, attribute- an attribute, value- a value for the attribute
function createElement(ele, attribute, value) {
   const element = document.createElement(ele);
   element[attribute] = value;
   return element;
};
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


//this function will create a page of 9 items per page
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';
   //this for loop will create the list items and append them to the ul element above.
   //converts the objects in a list into list items
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const name = list[i].name;
         const picture = list[i].picture;
         const registered = list[i].registered;
         const email = list[i].email;
         
         const li = createElement('li', 'className', 'student-item cf');
         const div1 = createElement('div', 'className', 'student-details');
         const img = createElement('img', 'className', 'avatar');
         img.src = picture.thumbnail;
         const h3 = createElement('h3')
         h3.textContent = `${name.first} ${name.last}`;
         const span1 = createElement('span', 'className', 'email');
         span1.textContent = email;
         const div2 = createElement('div', 'className', 'joined-details');
         const span2 = createElement('span', 'className', 'date');
         span2.textContent = `joined ${registered.date}`;

         div1.appendChild(img)
         div1.appendChild(h3)
         div1.appendChild(span1);

         div2.appendChild(span2);

         li.appendChild(div1)
         li.appendChild(div2)
         
         ul.appendChild(li)
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

//this function will add pagination to my application
function addPagination(list) {
   const numberOfPages = Math.ceil(list.length / itemsPerPage);
   const ul = document.querySelector('.link-list');
   ul.innerHTML = "";
   for (let i = 1; i <= numberOfPages; i++) {
      const button = document.createElement('button');
      const li = document.createElement('li')
      button.type = 'button'
      button.textContent = i;
      li.appendChild(button);
      
      ul.appendChild(li);
   }
   ul.firstChild.firstChild.className = 'active';
   
   ul.addEventListener('click', () => {
      const button = event.target;
      const listItems = ul.children;
      //this if statement lets this event handler activate only when the buttons are clicked
      //this took me a while :(
      if (button.tagName === 'BUTTON') {
         for (let i = 0; i < listItems.length; i++) {
            let li = listItems[i].firstChild;
            if (li.className === 'active') {
               li.classList.remove('active');
            }
         }
         button.className = 'active'
         const page = parseInt(button.textContent)
         showPage(list, page)
      } 
   })
   
}



// Call functions
showPage(data, 1);
addPagination(data);


