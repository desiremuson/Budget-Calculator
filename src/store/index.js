import Vue from "vue";
import Vuex from "vuex";

import rolex from "../assets/img1.jpg";
import suit from "../assets/img2.jpg";
import iphone from "../assets/img3.jpg";
import shoes from "../assets/img4.jpg";
import bag from "../assets/img5.jpg";
import buger from "../assets/img6.jpg";
import coffee from "../assets/img7.jpg";
import spaghetti from "../assets/img8.jpg";
import fries from "../assets/img9.jpg";
import salad from "../assets/img10.jpg";
import cake from "../assets/img11.jpg";
import pizza from "../assets/img12.jpg";
import runningShoes from "../assets/img13.jpg";
import bicycle from "../assets/img14.jpg";
import specs from "../assets/img15.jpg";
import camera from "../assets/img16.jpg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    salary: 25000,
    itemCount: 0,
    cartItems: [],
    allItems: [
      {
        id: 1,
        name: "Rolex",
        price: 6500,
        url: rolex,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        name: "Suit",
        price: 1700,
        url: suit,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        name: "Iphone 8",
        price: 3500,
        url: iphone,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 4,
        name: "Shoes",
        price: 830,
        url: shoes,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 5,
        name: "Handbag",
        price: 370,
        url: bag,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 13,
        name: "Nike shoe",
        price: 470,
        url: runningShoes,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 14,
        name: "Bicycle",
        price: 980,
        url: bicycle,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 15,
        name: "Specs",
        price: 270,
        url: specs,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 16,
        name: "Camera",
        price: 370,
        url: camera,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 6,
        name: "Burger",
        price: 80,
        url: buger,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 7,
        name: "Coffee",
        price: 50,
        url: coffee,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 8,
        name: "Spaghetti",
        price: 170,
        url: spaghetti,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 9,
        name: " Fries",
        price: 45,
        url: fries,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 10,
        name: "Salad",
        price: 36,
        url: salad,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 11,
        name: "Cake",
        price: 18,
        url: cake,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 1,
        name: "Pizza",
        price: 130,
        url: pizza,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  getters: {},
  mutations: {
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === item.id);
        if (bool) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }

      state.itemCount++;
    },
    removeItem(state, payload) {
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id == payload.id);

        if (bool) {
          let index = state.cartItems.findIndex((el) => el.id === payload.id);

          if (state.cartItems[index]["quantity"] !== 0) {
            state.cartItems[index]["quantity"] -= 1;
            state.itemCount--;
          }
          if (state.cartItems[index]["quantity"] === 0) {
            state.cartItems.slice(index, 1);
          }
        }
      }
    },
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    removeItem: (context, payload) => {
      context.commit("removeItem", payload);
    },
  },
  modules: {},
});
