import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  // stored the data
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  // get data from state
  getters: {
    counterSquared(state){
      return state.counter * state.counter
    }
  },
  // change the data in state
  mutations: {
    increaseCounter(state, randomNumber){
      // state.counter++
      state.counter += randomNumber;
    },
    decreaseCounter(state, randomNumber){
      // state.counter--
      state.counter -= randomNumber;
    },
    setColorCode(state, newValue){
      state.colorCode = newValue;
    }
  },
  // actions can have async code 
  actions: {
    // to pass the actions to mutations, put {commit} inside method parameter
    async increaseCounter({commit}){
      const getData = await axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
      console.log(`Number: ${getData.data}`);

      commit('increaseCounter',getData.data);
    },
    async decreaseCounter({commit}){
      const getData = await axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
      console.log(`Number: ${getData.data}`);

      commit('decreaseCounter',getData.data);
    },
    setColorCode({commit}, newValue){
      commit('setColorCode', newValue);
    }
  },
  modules: {
  }
})
