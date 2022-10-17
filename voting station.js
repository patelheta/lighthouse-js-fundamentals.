const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];
function chooseStations(stations) {
  let goodStation = [];
  for (let station of stations) {
    

    let capacity = station[1];
    if (capacity>=20){
      let type = station[2];
      if (type==="school" || type==="community centre"){
        goodStation.push(station[0]);
      }
    }
  }
  return goodStation;
}
chooseStations(stations);
