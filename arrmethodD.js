let data;
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    data = JSON.parse(xhr.response);
    console.log(data);
    const arr = data.reduce((acc, val) => {
        acc += val.population;
        return acc;

    }, 0);
    console.log(arr);
}