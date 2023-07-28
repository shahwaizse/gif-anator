const img = document.querySelector("img");
const api_key = ""; //enter your GIPHY api key here.
async function fetchGif() {
    try{
        img.src = "./loading.gif";
        let searchContent = document.getElementById("searchBox").value;
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key='+api_key+'&s='+searchContent, {mode: 'cors'});
        const gifData = await response.json();
        img.src = gifData.data.images.original.url;
    }
    catch(error){
        img.src = "./found.jpg";
        console.log('error: ' + error);
    }
}