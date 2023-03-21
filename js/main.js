"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      email: [],
    };
  },
  beforeMount() {
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          console.log(i);
          console.log(response.data.response);
          this.email.push(response.data.response);
        });
    }
  },
}).mount("#app");
