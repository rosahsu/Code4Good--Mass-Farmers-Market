# Code4Good--Mass-Farmers-Market

This project was created in affiliation with MIT Code4Good, an organization that pairs MIT students with local nonprofits that require their technological skills. Our nonprofit, Mass Farmers Markets, partners with farmers, consumers, and communities to improve the health of individuals, strengthen community vitality, and enhance local farm viability through farmers markets. They required both consulting advice on how to revamp their database and an interactive presentable map that helps consumers search for farmers markets in their area. This GitHub repository contains all the relevant code regarding the interactive map, including instructions on how to update it.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
A Google API Key (if you don't have one already, here are instructions: https://developers.google.com/maps/documentation/javascript/get-api-key
Python IDE (for editing)
### Set-up/Usage

1. Download all the files from the GitHub/clone the repository to a local directory. See https://help.github.com/articles/cloning-a-repository/ for help.

2. Open map.html

3. Copy paste your API Key into Google callback script
  ```
  <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
  </script>
  ```
 4. To see the pretty map on display, run map.html 

### Adding Buttons
 1. Open the file map.html
 2. In lines 120 to 147, you will see instructions on how to add a button.
```
  <h2 class="filter-header">   What products are you looking for? </h2> 
  <div class="row">
        	
  <div class="col-md-1">
    <input type="checkbox" data-toggle="toggle" id="Bread" onchange=filter(this) data-on=" " data-off=" " data-style="ios">
    <label class="form-check-label" for="Bread">Bread</label>
  </div>

  <div class="col-md-1">
    <input type="checkbox" data-toggle="toggle" id="Dairy" onchange=filter(this) data-on=" " data-off=" " data-style="ios"  >
    <label class="form-check-label" for="Dairy">Dairy</label>
  </div>    	
  </div>
 ```

 3. Modify the header. Here it says ‘What products are you looking for?’
 4. Modify the button ‘id’. Here it is “Bread”. Change it to exactly match the name of the column in the dataset. 
 5. Modify the button ‘for’. This should also match exactly the name of the column in the dataset.
 6. Modify the button label. This will be what appears on the web site.
 
 ### Changing Color Scheme
 1. Open the file ‘style.css’ in the folder ‘style’
 2. Modify the following code at the top of the screen: 
```
  :root {
    --main-color: #0da4d3;
	  --main-color-dark: #0c99c6;
	  --secondary-color: #aaa;
	  --main-font: 'Bitter', serif;
  }
```
 3. The colors are represented by hex codes (for example, #0da4d3 is this shade of blue). You can change the hex codes to match whatever color scheme you choose. For example, if you want a purple color scheme, you can change --main-color: #0da4d3 to be --main-color: #8e44ad.
 4. You can also change the font by modifying the --main-font variable. 
 5. This is a useful website for picking color schemes and hex codes: https://flatuicolors.com/.
 
###Changing the marker icon
 1. Choose your new icon and copy it into the folder ‘img’. Make sure the icon size is the size you would like it to appear on the map.
 2. Open the file map.html. 
 3. In lines 341 to 349 you will see the following code:
```
function createMarkers(){
    	for (var i = 0; i < data.length; i++) {
        	data[i].Latitude != 0 && data[i].Longitude != 0
        	var location = {lat: data[i].Latitude, lng: data[i].Longitude}; //Gets location of each farmer's market
        	var marker = new google.maps.Marker({
            	position: location,
            	map: map,
            	icon: "img/icon-blue.png"}) //Creates a marker and places it on the map
        	markers.push(marker);
```
4. Change the ‘img/icon-blue.png’ to whatever the name of your new icon is. For example, ‘img/new-icon.png’. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
