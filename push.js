var push = require("web-push");
let vapidKeys = push.generateVAPIDKeys();
let vapidkey = {
  publicKey:
    "BCunyz9S3BE1JhXo2R4H0yA_mvxXNEHQ3jY1EQHYmcNDfqItj_06dfmpwXmSh_axruLQVtUfwZBi4c7vkeabpfU",
  privateKey: "NpW2d5mxc6kVQ5eTCDDUYhVK91kDztg5AaHoNNwd0ek",
};
console.log(vapidKeys);
