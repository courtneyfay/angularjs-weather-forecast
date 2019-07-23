//Register our component
Vue.component("simple-counter", {
  props: ["initialCounterValue"],
  template: '<button v-on:click="increment">Counter: {{counter}}</button>',
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
