// this picks the bus route you want to mess with
const selectedRoute = 1;

// const url = "http://api.511.org/transit/VehicleMonitoring?api_key=f0e7e4f5-928b-4378-abdd-2f04c0c4d0ae&agency=SF"

function createMap() {
    // TODO: add your own access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9ja2dhcmQzbiIsImEiOiJja3hxYnFhd3Q1MnVrMm5vY3hhNGtwaWg2In0.JhEvifYpx8vXyOf4vSq8ng';
  
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-122.436699, 37.809326],
        zoom: 11,
      });
    

    
      // TODO: add a marker to the map
      
      var marker = new mapboxgl.Marker()
      .setLngLat([-122.436699, 37.809326])
      .addTo(map);
      
      }
    

    window.onload = () => {
      createMap();
      //move();
    };

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
    */
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
                RouteLocationsOB.push(route.MonitoredVehicleJourney.VehicleLocation)
            }
            else if (route.MonitoredVehicleJourney.DirectionRef == "IB") {
                RouteLocationsIB.push(route.MonitoredVehicleJourney.VehicleLocation)
            }
        }
    });
    let BusObject = {Inbound: RouteLocationsIB, Outbound: RouteLocationsOB};
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
