<template>

  <div class="alert alert-success" v-if="deleted">
    <p>User deleted</p>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>Email</th>
        <th>Username</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in usersList">
        <td> {{ user.email }} </td>
        <td> {{ user.username }} </td>
        <td> <a v-link="{ name: 'users.edit', params: { userId: user.id }}">Edit</a> |
             <a @click="deleteUser(user.id, $index)" href="javascript:void(0)">Delete</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
    import users from "../Users/users.js"
    export default{
        data(){
            return{
                usersList: [],
                deleted: false
            }
        },

        route: {
          data() {
            return users.getUsers().then(response => {
              this.usersList = response;
            })
          }
        },
      methods : {
        deleteUser(id, index) {

          users.delete(this, id);
          this.usersList.splice(index, 1)
        }
      }
    }
</script>
