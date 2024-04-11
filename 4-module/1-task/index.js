function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (const file of friends) {
    let li = document.createElement('li');
    li.innerHTML = file.firstName + " " + file.lastName;
    ul.append(li);
  }

  return ul;
}
