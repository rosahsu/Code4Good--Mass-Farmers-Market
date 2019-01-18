
/*
 *  StationMap - Object constructor function
 *  @param _parentElement   -- HTML element in which to draw the visualization
 *  @param _data            -- Array with all stations of the bike-sharing network
 */

MapVis = function(_parentElement, _mapPosition,) {

	this.parentElement = _parentElement;
	//this.data = _data;
	this.mapPosition = _mapPosition;

	this.initVis();
}


/*
 *  Initialize station map
 */
MapVis.prototype.initVis = function() {
	var vis = this;

    vis.map = L.map(vis.parentElement).setView(vis.mapPosition, 8);

		vis.updateVis();
}

MapVis.prototype.updateVis = function() {

    var vis = this;

    //implement the map tile

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(vis.map);

    /*   harvardHouses = L.layerGroup().addTo(vis.map);

    // Create marker
    var MaxwellDworkin = L.marker([42.378774,-71.117303]).bindPopup("Maxwell Dworkin House");

	// Add marker to layer group
    harvardHouses.addLayer(MaxwellDworkin); */



    //implement bike stations layer

}
