const img = document.querySelector("img");
const api_key = ""; //enter your GIPHY api key here.
function fetchGif() {
    img.src = "./loading.gif";
    let searchContent = document.getElementById("searchBox").value;
    fetch('https://api.giphy.com/v1/gifs/translate?api_key='+api_key+'&s='+searchContent, {mode: 'cors'})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        img.src = response.data.images.original.url;
    })
    .catch((response) => {
        img.src = "./found.jpg";
    });
}