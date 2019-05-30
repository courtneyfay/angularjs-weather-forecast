weatherApp.directive("weatherReport", function() {
  return {
    restrict: "E",
    templateUrl: "/directives/weather-report.html",
    replace: true,
    scope: {
      weatherDay: "=",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  };
});
