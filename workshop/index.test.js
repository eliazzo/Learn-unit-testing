
// Test makeUrl() function using equal()

function test(name, testFunction){
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

test("test Url with name is correct", () => {
    equal(makeUrl("pikachu"), "https://pokeapi.co/api/v2/pikachu") // pass through result and expected to equal function
})

// Test specific properties

test("test function creates an object from string", () => {
  const actual = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
  const expected = { name: "oliver", email: "hello@oliverjam.es" };
  equal(actual.name, expected.name);
})

// Test leap year function
test("isLeapYear only accepts positive integers", () => {
  equal(isLeapYear(-100), false, "-100 < 0");
})

test("isLeapYear handles multiples of 100", () => {
  equal(isLeapYear(1900), false, "1900 should not be a leap year")
}) // This is failing when called, but should pass ??????????????????

test("isLeapYear handles mutliples of 4", () => {
  equal(isLeapYear(16), true, "16 is a leap year")
})

test("test isLeapYear handles multiples of 400", () => {
  equal(isLeapYear(2000), true, "1900 is not a leap year");
})

test("test isLeapYear does not accept strings", () => {
  equal(isLeapYear("hello"), false, "hello is a string");
})