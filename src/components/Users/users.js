import Vue from '../../main'

const storeUser = {};
export default storeUser




storeUser.getUsers = () => {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "users",
      method: "GET"
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
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
        resolve(response.data);
    }, error => {
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
    context.updated = true;
  }, error => {
    context.updated = false;
  });
};


storeUser.delete = (context, id) => {
  Vue.http({
    url: "users/" +id,
    method: "DELETE",
  }).then(response => {
    context.deleted = true;
  }, error => {
    context.deleted = false;
  });
};

