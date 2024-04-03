/***
 npm test не проходит, уже нашла в задачнике верное решение,
 но почему нельзя так решить - я не понимаю... ***/
function camelize(str) {
  let arr = str.split('');
  let arr2 = [];

  let ind = 0; 
    while (ind < arr.length) {
        if (arr[ind] != "-") {
            arr2.push(arr[ind]);
            ind += 1;
        } else {
            arr2.push(arr[ind+1].toUpperCase());
            ind += 2;
        }
    }
       console.log(arr2.join("").toString());    
}




  /*** почему этот код не сработал? проверяла на примерах из задачника в онлайн 
  редакторе все было ок, ну кроме пустой строки, тут это не реализовано
  let arr = str.split('-');
  let arr2 = [];
  arr2.push(arr[0]);

  for (let ind = 1; ind < arr.length; ind +=1) {
    arr2.push(arr[ind][0].toUpperCase() + arr[ind].slice(1));
  }

  console.log(arr2.join(""));
  ***/
