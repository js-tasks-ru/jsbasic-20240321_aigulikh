function highlight(table) {

  for (let row of table.tBodies[0].rows) { 
    let Status = row.cells[3];

    if (Status.hasAttribute('data-available')) {
      Status.getAttribute('data-available') == "true" ? row.classList.add('available') : row.classList.add('unavailable')
   }  else {
     row.hidden = true;
   }

 }
 
 for (let row of table.tBodies[0].rows) { 
    let Gender = row.cells[2];
    Gender.innerHTML == "m" ? row.classList.add('male') : row.classList.add('female');
 }
 
 for (let row of table.tBodies[0].rows) { 
    let age = row.cells[1];

    if (age.innerHTML < 18) {
   row.style.textDecoration='line-through';
    }
    
 } 
}
