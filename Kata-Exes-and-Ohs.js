function XO(str) {
    var xs = (str.match(/x/gi) || []).length;
    var os = (str.match(/o/gi) || []).length;
    return os == xs
  }
  
  XO("xooxx");
  XO("ooxXm");
  XO("zpzpzpp");