
// Variable for the visualization instance
var marketMap;

createVis()
function createVis() {

  //locate the map in the center of massachusetts
  //eventually we should query the user's geolocation to center close to them
    var MassLatLong=[42.4072, -71.3824]

  // Instantiate visualization object (map area)
    marketMap = new MapVis("map-area", MassLatLong)
}
