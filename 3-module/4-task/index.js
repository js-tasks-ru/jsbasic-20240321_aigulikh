function showSalary(users, age) {
  return users
      .filter(item => item.age <= age)
      .map(item => item["name"] + ", " + item["balance"])
      .join('\n');
}





/*** мое решение 2
function showSalary(users, age) {
  users = users.filter(item => item.age <= age);
  let str = [];

  for (let ind = 0; ind < (users.length ); ind += 1) {
      str.push(users[ind].name + ", " + users[ind].balance);
  }

  return (str.join('\n'));
}
***/