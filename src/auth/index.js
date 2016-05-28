/**
 * Created by Danny on 26/05/2016.
 */

import Vue from "../main"
import { router } from '../main'

export default {

  signup (context, email, username, password) {
    Vue.http({
      url: "auth/signup",
      method: 'POST',
      data: {
        email: email,
        username: username,
        password: password
      }

    }).then(response => {
      context.success = true;
    }, response => {
      context.reponse = response.data;
      context.error = true;
    });

  }

}
