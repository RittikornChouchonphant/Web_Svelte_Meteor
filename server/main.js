import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Collection } from '../imports/api/Collection';
import { Quiz } from '../imports/api/Quiz';

const insertQuestion = (textQuestion, user) => Collection.insert({ text: textQuestion, userId: user._id, createdAt: new Date(), })
const insertQuiz = (question, correctAnswer, answers) => Collection.insert({ text: textQuestion, userId: user._id, createdAt: new Date(), })


/* Meteor.methods({
  SignUpValidator: function (email, username, password) {
    const user1 = Accounts.findUserByUsername(username);
    const user2 = Accounts.findUserByEmail(email);
    if (user1.username == username || user2.emails == email) {
      console.log("Sorry, that username or email is already taken");
      return "Sorry, that username or email is already taken";
    }
    else {
      Accounts.createUser({
        username: username,
        password: password,
        emails: email,
      });
      console.log("User created successfully!");
      return "User created successfully!";
    }
  }
}); */

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  const user = Accounts.findUserByUsername('Rittikorn');
  console.log(user);
  if (Collection.find().count() === 0) {
    [
      'First Question',
      'Second Question',
      'Third Question',
      'Forth Question',
      'Fifth Question',
      'Sixth Question',
    ].forEach(textQuestion => insertQuestion(textQuestion, user))
  }
});
