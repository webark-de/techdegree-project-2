/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
var studentItems = document.querySelectorAll('.student-item');
var visibleItems = 10;

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

function showPage(list, page) {
    var startItem = (page * visibleItems) - visibleItems;
    var endItem = page * visibleItems;

    for (let i = 0; i < list.length; i++) {
        if ((i >= startItem) & (i < endItem)) {
            list[i].style.display = 'block';
        } else {
            list[i].style.display = 'none';
        }
    }
}


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {

    var newDiv = document.createElement('div');
    newDiv.className = 'pagination';
    const pageDiv = document.querySelector('.page');
    pageDiv.appendChild(newDiv);

    var paginationList = document.createElement('ul');
    paginationList.className = 'pagination-items';
    newDiv.appendChild(paginationList);

    var numberOfPages = Math.ceil(list.length / visibleItems);

    for (let i = 1; i <= numberOfPages; i++) {
        var paginationItem = document.createElement('li');
        paginationList.appendChild(paginationItem);
        var link = document.createElement('a');
        link.href = '#';
        link.textContent = i;
        paginationItem.appendChild(link);
        link.addEventListener('click', (e) => {
           e.preventDefault();
           showPage(list, i);
           link.classList='active';
           document.querySelector('a.active').classList.remove('active');
           const clickedItem = event.target;
           clickedItem.classList.add('active');

        })
    }
}

//calling both functions
showPage(studentItems, 1);
appendPageLinks(studentItems);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
