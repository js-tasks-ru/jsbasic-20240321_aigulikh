function getMinMax(str) {
  str =  str
            .split(" ")
            .filter(Number)
            .sort(function (a, b) {
              return a - b;
              } );

  let minMax = {};
  minMax.min = Number(str[0]);
  minMax.max = Number(str[str.length -1])
return minMax
}
