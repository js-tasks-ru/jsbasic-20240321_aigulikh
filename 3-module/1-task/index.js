function namify(users) {
  return users.map(user => user.name);
}
/*** 
let str = '-webkit-transition';
let arr = str.split('-');



function camelize(str) {
    let arr = str.split('-');
    let arr2 = [];
    arr2.push(arr[0])
    for (let ind = 1; ind < arr.length; ind +=1) {
         arr2.push(arr[ind][0].toUpperCase() + arr[ind].slice(1));
        }
        console.log(arr2.join(""));    
    }
    
 camelize(str) 
 
 
 function filterRange(arr, a, b) {
 return arr.filter(user => (user >= a && user <= b));
}

***/
