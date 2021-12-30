// this picks the bus route you want to mess with
// ive been blocked by the SFMTA, becuase i had a loop inside the createmap fnction that i thought was only hitting every 15 seconds but was calling the.onload function by accident so was spamming the API
const selectedRoute = 1;

// const url = "http://api.511.org/transit/VehicleMonitoring?api_key=f0e7e4f5-928b-4378-abdd-2f04c0c4d0ae&agency=SF"

function createMap() {
    // TODO: add your own access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9ja2dhcmQzbiIsImEiOiJja3hxYnFhd3Q1MnVrMm5vY3hhNGtwaWg2In0.JhEvifYpx8vXyOf4vSq8ng';
  
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-122.436699, 37.809326],
        zoom: 11,
      });
    
      map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
        if (error) throw error;
        map.addImage('custom-marker', image);
        // Add a GeoJSON source with 2 points
        console.log("image loaded");

        });


      /*
      var imageBus = new Image(100,200);
      imageBus.src = 'busPNG.png';
      document.body.appendChild(imageBus);

      // load bus image for ya boy
    map.addImage('busPNG.png', imageBus);
    console.log("image loaded");

    */

    setMarkers(map);
      // TODO: add a marker to the map
      /*
      var marker = new mapboxgl.Marker()
      .setLngLat([-122.436699, 37.809326])
      .addTo(map);
      */


      }
    

window.onload = () => {
      createMap();
    };


async function setMarkers(map) {
    // calls the collect function and then breaks it into outbound and inbound data arrays 
    // var map = createMap();
    
    

    console.log("Is this working?")
      var BusObject = await collect();
      geojsonIB = BusObject.Outbound;
      geojsonOB = BusObject.Inbound;

      console.log(geojsonIB);

 


        map.addSource('IB', {
            'type': 'geojson',
            'data': geojsonIB
        });

        map.addLayer({
            'id': 'IB',
            'type': 'symbol',
            'source': 'IB',
            'layout': {
                'icon-image': 'custom-marker',
                // get the title name from the source's "title" property
                'text-field': ['get', 'title'],
                'text-font': [
                    'Open Sans Semibold',
                    'Arial Unicode MS Bold'
                ],
                'text-offset': [0, 1.25],
                'text-anchor': 'top'
            }
        });

    


      
      
      console.log("source added");

      //const myLayer = new mapboxgl.featureLayer().setGeoJSON(geojsonIB).addTo(map);

    }

    /* THIS IS THE RIGHT IDEA BUT SOMETHINGS WRONG
// this function moves the busses on the map 
async function move(){
    const BusObject = await collect();
    OBarray = BusObject.Outbound;
    IBarray = BusObject.Inbound;
    /* this loop isnt working 
    OBarray.forEach((location) => {
        console.log(location.Longitude);
        var marker = new mapboxgl.Marker()
        .setLngLat([Number(location.Longitude), Number(location.Latitude)])
        .addTo(map);
    });

    marker.Marker().setLngLat([-122.436610, 37.899326]);
    //.addTo(map);
}
*/

//this functions leverages data pulled from getBusLocations() and sorts the busses for the desired route, then sorts locations of busses on inbound and outbound routes into two seperate arrays
async function collect(){
    const rawLocations = await getBusLocations();
    var RouteLocationsIB = [];
    var RouteLocationsOB = [];
    rawLocations.forEach((route) => {
        if (route.MonitoredVehicleJourney.LineRef == selectedRoute) {
            if (route.MonitoredVehicleJourney.DirectionRef == "OB") {
                RouteLocationsOB.push({
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [Number(route.MonitoredVehicleJourney.VehicleLocation.Longitude), Number(route.MonitoredVehicleJourney.VehicleLocation.Latitude)]
                    },
                    "properties":{
                        "BusID": route.MonitoredVehicleJourney.VehicleRef
                    }
                }); 
            }
            else if (route.MonitoredVehicleJourney.DirectionRef == "IB") {
                RouteLocationsIB.push({
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [Number(route.MonitoredVehicleJourney.VehicleLocation.Longitude), Number(route.MonitoredVehicleJourney.VehicleLocation.Latitude)]
                    },
                    "properties":{
                        "BusID": route.MonitoredVehicleJourney.VehicleRef
                    }
                }); 
            }
        }
    });
    var geojsonRouteIB = {
        "type": "FeatureCollection", "features": RouteLocationsIB
    }
    var geojsonRouteOB = {
        "type": "FeatureCollection", "features": RouteLocationsOB
    }
    let BusObject = {Inbound: geojsonRouteIB, Outbound: geojsonRouteOB};
    return BusObject;
    // console.log("These are OUTBOUND: " + RouteLocationsOB);
    // console.log("These are INBOUND" + RouteLocationsIB);
    // setTimeout(run, 15000);
}
// this async funciton pulls the data from the SFMTA API, and cuts out just the part we need which is the bus details
async function getBusLocations(){
    const url = "http://api.511.org/transit/VehicleMonitoring?api_key=f0e7e4f5-928b-4378-abdd-2f04c0c4d0ae&agency=SF"
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity)
    // console.log(json.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity[0].MonitoredVehicleJourney.VehicleLocation)
    return json.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity;
}

// collect();
    /*
async function fetchData() {
    var dataArray = [];
    const makeRequest = async function(url) {
        const response = await fetch(url);
        const data = await response.text();
        console.log(data);
    }; 
}
*/
