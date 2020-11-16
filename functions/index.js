var admin = require("firebase-admin");

var serviceAccount = require("./keys/service-account.json");

// We supress these logs when not in NODE_ENV=debug for cleaner Mocha output
// const console = { log: debug };

console.log("initializing app on index.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://connor-demo-app-16fb0.firebaseio.com",
});

exports.api = require("./src/api");

// const db = admin.firestore();

// const result = exampleUser(db);
// console.log("result");
// console.log(result);

// async function exampleUser(db) {
//   const docRef = db.collection("users").doc("alovelace");

//   await docRef.set({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   });

//   const snapshot = await db.collection("users").get();
//   snapshot.forEach((doc) => {
//     console.log(doc.id, "=>", doc.data());
//   });
// }
