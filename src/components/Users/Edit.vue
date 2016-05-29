<template>


  <div class="alert alert-success" v-if="updated">
    <p>User updated</p>
  </div>
  <form class="form-group" @submit.prevent="update()">
    <input type="hidden" v-model="id">
    <div class="form-group">
      <label for="email">Email</label>

      <input type="text" id="email" v-model="email" class="form-control">
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username"  v-model="username" class="form-control">
    </div>

    <button type="submit" class="btn btn-default">Edit</button>

  </form>

</template>
<script>
    import user from "./users"
    export default{
        data(){
            return{
                id: null,
                email: null,
                username: null,
                updated: false
            }
        },

        route: {
          data() {
            return user.getUserById(this.$route.params.userId).then(user => {
                this.id = user.id;
                this.email = user.email;
                this.username = user.username;
              });
          }
        },
      methods: {
        update () {
          let userData = {
            id: this.id,
            email: this.email,
            username: this.username
          };
          user.update(this, userData);
        }
      }
    }
</script>
