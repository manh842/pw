var push = require("web-push");
// let vapidKeys = push.generateVAPIDKeys();
let vapidKeys = {
  publicKey:
    "BCunyz9S3BE1JhXo2R4H0yA_mvxXNEHQ3jY1EQHYmcNDfqItj_06dfmpwXmSh_axruLQVtUfwZBi4c7vkeabpfU",
  privateKey: "NpW2d5mxc6kVQ5eTCDDUYhVK91kDztg5AaHoNNwd0ek",
};
// console.log(vapidKeys);
push.setVapidDetails(
  "mailto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/ccEyu4MKGY8:APA91bG9IeosIJ8ewYXBRs9NYF8QxkzCjGL6QBJs-z_pJmIJEJMNStQ6K0J1NeZiERZlHQ3zn-ozk_fVYMqYsjSWODxJ6BpIBPZlJoUbg3P7YfsAC4C6cisxb60HjCurc4KGwKiuB4Vr",
  expirationTime: null,
  keys: {
    p256dh:
      "BHCAKm_4kgS941u8q45DkyCa-chrcO7u35sBygq_xVJpv3pGbdSQYdCPOAwrBn4Ke8jpmLb38Y0aEKs61lR2F0E",
    auth: "UwCyzsowhdP6EMvGfRPnAg",
  },
};
push.sendNotification(sub, "test message");
