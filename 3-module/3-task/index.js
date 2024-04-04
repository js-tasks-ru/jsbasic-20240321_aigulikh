function camelize(str) {
  return str
    .split('-') 
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}


/***
 npm test не проходит, уже нашла в задачнике верное решение,
 но почему нельзя так решить - я не понимаю... 
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


ещё такое делала:
  let arr = str.split('-');
  let arr2 = [];
  arr2.push(arr[0]);

  for (let ind = 1; ind < arr.length; ind +=1) {
    arr2.push(arr[ind][0].toUpperCase() + arr[ind].slice(1));
  }

  console.log(arr2.join(""));

let users = [user1, user2];
function showSalary(users2, age) {
    let someInd = users2.filter(item => item.age <= age);
    let str = [];
    for (let ind = 0; ind < (someInd.length ); ind += 1) {
        let strng = someInd[ind].name + ", " + someInd[ind].balance +"\n";
        console.log(strng);
        str.push(strng);
    }
    console.log(str.toString());

}
let result = showSalary(users, 30);




  ***/
