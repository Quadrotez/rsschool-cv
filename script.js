const myGitHub = document.getElementById("myGitHub");
const myKwork = document.getElementById("myKwork")
const myTelegram = document.getElementById("myTelegram")        
const myDiscord = document.getElementById("myDiscord")   
const myEmail = document.getElementById("myEmail")     

function addlistener(x) {
    x.addEventListener('mouseenter', function() {

        let max = 10
        let min = -10
        
        
        function randomInteger (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        
        
        this.style.transform = `translateY(${randomInteger(min, max)}px) translateX(${randomInteger(min, max)}px)`;
        });
}

addlistener(myGitHub)
addlistener(myKwork)
addlistener(myTelegram)
addlistener(myDiscord)
addlistener(myEmail)

var map = L.map('map').setView([55.7558, 37.6173], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var marker = L.marker([55.7558, 37.6173]).addTo(map);