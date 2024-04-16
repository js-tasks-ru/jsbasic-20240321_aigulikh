function toggleText() {
  let button = document.querySelector(".toggle-text-button");      
  
  button.addEventListener('click', function(event) {
  let text = document.getElementById("text");
   text.hidden = !text.hidden;
  }); 

}
