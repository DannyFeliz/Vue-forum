/**
 * Created by Danny on 26/05/2016.
 */
import Vue from '../main';
const store = {};


export default store

store.status = {
  topic: null
};

store.getSections = () => {
  return new Promise((resolve, reject) => {
      Vue.http({
        url: "sections",
        method: 'GET'
      }).then(response => {
        resolve(response.data);
      });
  });
};

store.getTopicsBySection = (id) => {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "topic",
      method: "GET",
      params: { "section_id" : id }
    }).then(response => {
      resolve(response.data)
    });
  });
}
