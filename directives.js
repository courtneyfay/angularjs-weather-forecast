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

weatherApp.directive("simpleCounterWrapper", function() {
  return {
    restrict: "A",
    link: function(scope, $element) {
      //Vue component interaction logic goes here

      //Angular scope property
      scope.countValue = 0;

      //create our root instance
      scope.vue = new Vue({
        el: "simple-counter",
        data: function() {
          return {
            initialCounterValue: scope.countValue
          };
        },
        methods: {
          updateAngularScopeProperty: function(value) {
            scope.$apply(function() {
              scope.countValue = value;
            });
          }
        }
      });
    }
  };
});
