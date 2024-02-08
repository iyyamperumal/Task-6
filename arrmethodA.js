let data;
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    data = JSON.parse(xhr.response);
    const arr = data.filter((val) => {
        for (let i = 0; i <= val.continents.length; i++) {
            if (val.continents[i] == "Asia") {
                return true;
            }
        }
    });
    console.log(arr);
}
