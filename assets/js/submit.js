var simpleReverseGeocoding = function(lat, lon) {
  fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + lon + '&lat=' + lat).then(function(response) {
    return response.json();
  }).then(function(json) {
    window.address = json.address
    var data = eval(address); // this will convert your json string to a javascript object
    var addressList = []
    for (var key in data) {
        if (data.hasOwnProperty(key)) { // this will check if key is owned by data object and not by any of it's ancestors
            addressList.push(key)// this will show each key with it's value
        }
    }
    console.log(json.address)
    console.log(addressList[0])

    // document.getElementById('address').value = json.address.house_number + ', ' + json.address.road
    document.getElementById('address').value = data[addressList[0]] + ', ' + data[addressList[1]]
    document.getElementById('state').value = json.address.suburb
    document.getElementById('city').value = json.address.state
    document.getElementById('zip').value = json.address.postcode
  })
}

document.getElementById('getUserAddress').onclick = () => simpleReverseGeocoding(window.userLocationMarker.getLatLng().lat, window.userLocationMarker.getLatLng().lng)


window.fetcher= function(url, options) {
  fetch(url, options).then(function(response) {
    return response.json();
  }).then(function(json) {
    //do something with responsiv
    console.log(json)
  })
}
