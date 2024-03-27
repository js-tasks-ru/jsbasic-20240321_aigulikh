function checkSpam(str) {
  str = str.toLowerCase();
  let spam1 = '1xBet';
  let spam2 = 'XXX';
  spam1 = spam1.toLowerCase();
  spam2 = spam2.toLowerCase();
  return str.includes(spam1) || str.includes(spam2)
}

