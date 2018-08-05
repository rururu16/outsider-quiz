'use strict';
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const{ dialogflow } = require('actions-on-google');

const app=dialogflow({
	verification: {'Authorization': 'Bearer amaruma'}
});

app.intent('Default Welcome Intent', conv=> {
	conv.ask('こんにちは、クイズです。'　+
	'「クイズを出して」と言ってください。')
	});
app.intent('Quiz',conv=>{
	conv.close('クイズインテントが起動しました。')
});

exports.quiz = functions.https.onRequest(app);
