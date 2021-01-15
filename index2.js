// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyoverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');


nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(passTimes);
  })
  .catch((error) => {
    console.log("Failed: ", error.message);
  });


// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyoverTimes)
//   .then(body => console.log(body));