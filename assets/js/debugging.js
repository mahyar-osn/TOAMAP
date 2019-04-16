function findFilters(){
  var childDivs = document.getElementById('checkboxes').getElementsByTagName('div');
  var filterList = []
  for( i=0; i< childDivs.length; i++ ){

    var childDiv = childDivs[i];
    var childInput = childDiv.getElementsByTagName('input');
    if (childInput[0].checked){
      filterList.push(childInput[0].value)
    }


  }
  return filterList
}

function filterFunction(){
  filters = findFilters();
    for (var i in jsonfile){
		    for (var j in jsonfile[i].layers){
		        if ( filters.includes(jsonfile[i].layers[j]) ) {
              console.log('Name of story is: ' + jsonfile[i].title);
              // filterMarker(i);
              //dispaly this story
            } else {
              // hideMarkers(i);
            }
          }
        }

      }

  function filterMarker(index) {
      currentMarkers = document.getElementsByClassName('ts-marker-wrapper');
      currentMarkers[index].style.visibility = 'visible';
    }


  function hideMarkers(index) {
      currentMarkers = document.getElementsByClassName('ts-marker-wrapper');
      currentMarkers[index].style.visibility = 'hidden';
  }

document.getElementById('search-btn').onclick = filterFunction;
