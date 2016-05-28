<template>

  <div class="alert alert-danger" v-if="error">
    <p>Could not sign you up!</p>
  </div>


  <div class="alert alert-success" v-if="success">
    <p>You're done!</p>
  </div>

  <form autocomplete="off" @submit.prevent="signup" v-if="!success">
    <div class="form-group">
      <label for="email" class="form-group">Email</label>
      <input class="form-control"
             type="email" v-model="email" id="email" placeholder="you@example.com" required>
    </div>

    <div class="form-group">
      <label for="username" class="form-group">Username</label>
      <input class="form-control" type="text" v-model="username" id="username" required>
    </div>

    <div class="form-group">
      <label for="password" class="form-group">Password</label>
      <input class="form-control" type="password" v-model="password" id="password" required>
    </div>

    <button type="submit" class="btn btn-default">Sign Up</button>

  </form>

</template>

<script>
  import auth from '../auth/index.js';
  import Vue from '../main.js'
  import { router } from "../main";
  export default {
    data () {
      return {
        email: null,
        username: null,
        password: null,
        success: false,
        error: false,
        response: null
      }
    },
    methods: {
      signup (e) {
        auth.signup(this, this.email, this.username, this.password);

        console.log("Submited");
      }
    },
    watch: {
      'success': (val, oldVal) => {
      if (val) {
        console.log(this);
          router.go({"name": "home"})
        }
        console.log('new: %s, old: %s', val, oldVal)
      }
    }
  }

</script>
