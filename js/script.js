/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/*
Defining variables that contain student list items and the number of visible students per page
*/
var studentItems = document.querySelectorAll('.student-item');
var visibleItems = 10;

/*
ShowPage function hides all students except the ten that should be visible
*/

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

/*
appendPageLinks function adds functionality and logic to the pagination buttons.
*/
function appendPageLinks(list) {
    //Creating the div that contains pagination list and appending the div to the page-div
    var newDiv = document.createElement('div');
    newDiv.className = 'pagination';
    const pageDiv = document.querySelector('.page');
    pageDiv.appendChild(newDiv);
    var paginationList = document.createElement('ul');
    paginationList.className = 'pagination-items';
    newDiv.appendChild(paginationList);
    var numberOfPages = Math.ceil(list.length / visibleItems);

    //This loop creates one pagination button for each page that exist. Additionally, it contains the click event described below.
    for (let i = 1; i <= numberOfPages; i++) {
        var paginationItem = document.createElement('li');
        paginationList.appendChild(paginationItem);
        var link = document.createElement('a');
        link.href = '#';
        link.textContent = i;
        paginationItem.appendChild(link);
        if (link.textContent == 1) {
        link.className = 'active'
        }
        link.addEventListener('click', (e) => {
           e.preventDefault();
           showPage(list, i);
           document.querySelector('a.active').classList.remove('active');
           const clickedItem = event.target;
           clickedItem.classList.add('active');
        })
    }
}

//Calling the functions defined above
showPage(studentItems, 1);
appendPageLinks(studentItems);
