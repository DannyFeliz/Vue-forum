import Vue from '../../main'

const storeUser = {};
export default storeUser

storeUser.getUsers = () => {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "users",
      method: "GET"
    }).then(response => {
      console.log(response)
      resolve(response.data)
    }).catch(error => {
      console.log(error)
      reject(error);
    })
  });
};

storeUser.getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "users/" + userId,
      method: "GET"
    }).then(response => {
      console.log(response);
        resolve(response.data);
    }, error => {
      console.log(error);
      reject(error);
    });

  });
};


storeUser.update = (context, userData) => {
  Vue.http({
    url: "users/" +userData.id,
    method: "PUT",
    data: {
      email: userData.email,
      username: userData.username
    }
  }).then(response => {
    console.log(response);
    context.updated = true;
  }, error => {
    console.log(error);
    context.updated = false;
  });
};


storeUser.delete = (context, id) => {
  Vue.http({
    url: "users/" +id,
    method: "DELETE",
  }).then(response => {
    console.log(response);
    context.deleted = true;
  }, error => {
    console.log(error);
    context.deleted = false;
  });
};

