//setup to use environmental variable for apiKey
var env = {};
if (window) {
  Object.assign(env, window.__env);
}

// Register environment in AngularJS as constant
weatherApp.constant("__env", env);

//CITY SERVICE
weatherApp.service("cityService", function() {
  this.city = "Denver, CO";
});

//WEATHER SERVICE
weatherApp.service("weatherService", [
  "$resource",
  "__env",
  function($resource, __env) {
    this.getWeather = function(city, days) {
      var apiKey = __env.apiKey;
      var weatherAPI = $resource(
        "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=" + apiKey,
        {
          callback: "JSON_CALLBACK"
        },
        { get: { method: "JSONP" } }
      );

      return weatherAPI.get({
        q: city,
        cnt: days
      });
    };
  }
]);
