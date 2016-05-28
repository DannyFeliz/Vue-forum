import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import Promise from 'es6-promise';

import App from "./components/App"
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Topic from "./components/Topic"
import Topics from "./components/Topics"
import NewTopic from "./components/NewTopic"
import UsersList from "./components/Users/List"
import UsersEdit from "./components/Users/Edit"

require("./assets/css/main.css");

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000';

export var router = new VueRouter;
export default Vue;
// export default Promise.polyfill();


// Routes
router.map({
  '/': {
    name: 'home',
    component: Home
  },
  "/signin": {
    name: 'auth.signin',
    component: SignIn
  },
  "/signup": {
    name: 'auth.signup',
    component: SignUp
  },
  "/section/:sectionId": {
    name: 'section',
    component: Topics
  },
  "/topic/:topicId": {
    name: 'topic',
    component: Topic
  },
  "/topic/new": {
    name: "topic.new",
    component: NewTopic
  },
    "/users":  {
    name: "users.list",
    component: UsersList
  },
  "/users/:userId":  {
    name: "users.edit",
    component: UsersEdit
  }
});

// Start router
router.start(App, "#app");
