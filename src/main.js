// Packages
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Components
import App from "./components/App"
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Topic from "./components/Topic"
import Topics from "./components/Topics"
import NewTopic from "./components/NewTopic"
import UsersList from "./components/Users/List"
import UsersEdit from "./components/Users/Edit"
import services from "../config/services.js"

// Css
require("./assets/css/main.css");

// Use statements
Vue.use(VueRouter);
Vue.use(VueResource);

// Exports
export default Vue;
export let router = new VueRouter;

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
