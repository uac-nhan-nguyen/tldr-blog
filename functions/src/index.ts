import * as functions from "firebase-functions";

export const ping = functions.https.onRequest((request, response) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  response.send("To be or not to be");
});
