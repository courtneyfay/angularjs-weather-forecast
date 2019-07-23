//Register our Vue component
Vue.component("simple-counter", {
  props: ["initialCounterValue"],
  template: '<button v-on:click="increment">Vue: {{counter}}</button>',
  data: function() {
    return {
      counter: this.initialCounterValue
    };
  },
  methods: {
    increment: function() {
      this.counter += 1;
      this.$emit("increment", this.counter);
    }
  }
});

//ANGULAR MODULE
var weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);

//Start our application with our created module
angular.bootstrap(document.body, ["weatherApp"]);
