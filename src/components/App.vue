<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <nav>
        <ul class="list-inline">
          <li><a v-link="{ name: 'home' }">Home</a></li>
          <li><a v-link="{ name: 'topic.new' }">Post a topic</a></li>
          <li><a v-link="{ name: 'users.list' }">Users</a></li>
          <li class="pull-right"><a v-link="{ name: 'auth.signin' }">Sign in</a></li>
          <li class="pull-right"><a v-link="{ name: 'auth.signup' }">Sign up</a></li>
          <li class="pull-right"><a >Sign out</a></li>
          <li class="pull-right">Hi, Danny!</li>
        </ul>
      </nav>
    </div>
    <div class="panel-body">
      <router-view></router-view>
    </div>
  </div>



</template>
