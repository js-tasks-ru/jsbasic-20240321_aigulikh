function hideSelf() {
   
  let button = document.querySelector(".hide-self-button");
      
  function hideButton () {
    this.hidden = true;
  }
  
  button.addEventListener('click', hideButton);
}
