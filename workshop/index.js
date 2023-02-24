// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(string){
  const paramString = new URLSearchParams(string); //converts string to a new JavaScript object
  const params = Object.fromEntries(paramString); // creates a new object from the entries of the string object
  return params
}


function isLeapYear(year){

  if(year > 0){
    return true;
  };
  if (typeof year === "string") {
    return false;
  };
  if (year % 400 === 0) {
    return true;
  } ;
  if (year % 100 == 0) {
    return false;
  };
  if (year % 4 === 0) {
    return true;
  };
  return false;
}

