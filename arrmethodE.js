let data;
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    data = JSON.parse(xhr.response);
    console.log(data);
    const arr = data.filter((val, index) => {
        if (val && val.currencies && val.currencies.USD) {
            console.log(val.name.common, index);
            return true;
        }
    })
    console.log(arr);
}