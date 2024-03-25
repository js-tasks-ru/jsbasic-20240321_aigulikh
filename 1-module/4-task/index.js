function checkSpam(str) {
  str = str.toLowerCase();
  spam1 = '1xBet';
  spam2 = 'XXX';
  spam1 = spam1.toLowerCase();
  spam2 = spam2.toLowerCase();
  if (str.includes(spam1) || str.includes(spam2)) {
      return true;
    } else {
  return false;
  }
}

