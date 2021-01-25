let map = L.map('map').setView([-1.9646631,30.0644358],8);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}@2x.png?key=ZS4TkeZxfzEjEiW1up5Q',
{
    attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'

}).addTo(map);

let north = L.marker([-1.4967169533085454, 29.633331354707483]).addTo(map);
let kigali = L.marker([-1.947209207922796, 30.06468772888184]).addTo(map);
let east = L.marker([-1.6751763250631908, 30.566711425781254]).addTo(map);
let west = L.marker([-2.2333209582333025, 30.222473200410608]).addTo(map);
let south = L.marker([-2.1857489471296665, 29.531250000000004]).addTo(map);

north.on('click',(e)=>{
    north.bindPopup('<iframe width="560" height="315" src="https://www.youtube.com/embed/mRPBZLk6BcE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>').openPopup();
})
kigali.on('click',(e)=>{
    kigali.bindPopup('<iframe width="560" height="315" src="https://www.youtube.com/embed/L5jTLCBmaeg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>').openPopup();
})
east.on('click',(e)=>{
    east.bindPopup('<iframe width="560" height="315" src="https://www.youtube.com/embed/IMBVjo6WafE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>').openPopup();
})
west.on('click',(e)=>{
    west.bindPopup('<iframe width="560" height="315" src="https://www.youtube.com/embed/KUTcjcYbmPo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>').openPopup();
})
south.on('click',(e)=>{
    south.bindPopup('<iframe width="560" height="315" src="https://www.youtube.com/embed/KUTcjcYbmPo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>').openPopup();
})

