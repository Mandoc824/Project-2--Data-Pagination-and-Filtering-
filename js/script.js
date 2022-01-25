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

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const name = list[i].name;
         const img = list[i].picture;
         const registered = list[i].registered;
         const email = list[i].email;
         ul.insertAdjacentHTML("beforeend",  
      `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${img.thumbnail}" alt="Profile Picture">
           <h3>${name.first} ${name.last}</h3>
           <span class="email">${email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${registered.date}</span>
         </div>
       </li>`)
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   const numberOfPages = list.length / itemsPerPage;
   const ul = document.querySelector('.link-list');
   ul.innerHTML = "";
   for (let i = 0; i < numberOfPages; i++) {
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
      if (button) {
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
showPage(data, 2);
addPagination(data);