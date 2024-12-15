mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates , //[77.209, 28.6139] listing.geometry.coordinates starting position [lng, lat] of Delhi
    zoom: 9 // starting zoom
});  
 
// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: "red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.title}</h4><p> Exact location will be provided after booking!</p>` ))
    .addTo(map);


// Set marker options.
// const marker = new mapboxgl.Marker()
// .setLngLat(listing.geometry.coordinates)

// .addTo(map);


// const map = new mapboxgl.Map({
//     container: "map", // container ID
//     style: "mapbox://styles/mapbox/streets-v12",
//     center: [77.209, 28.6139], // starting position [lng, lat] 
//     zoom: 9, // starting zoom
//   });
// mapboxgl.accessToken = 'pk.eyJ1Ijoic29oYW0xMDAiLCJhIjoiY2x2eXQydzluMnY2NzJrcGczbzBhMGtldSJ9.drFq3Li7Z6d2k0A93GgJOQ';


// Create a marker and add it to 
// console.log(coordinates)
// const marker = new mapboxgl.Marker()
//     .setLngLat(coordinates)
//     .addTo(map);
