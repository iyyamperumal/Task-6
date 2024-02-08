let data;
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    data = JSON.parse(xhr.response);
    const arr = data.forEach(value => {
        console.log(`
Common Name-${value.name.common}
Official Name-${value.name.official}
Capital-${value.capital}
Flag-${value.flag}`)
    });

}