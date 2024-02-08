let data;
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    data = JSON.parse(xhr.response);
    const arr = data.filter((val) => {
        if (val.population < 200000) {
            return true;
        }

    });
    console.log(arr);
}