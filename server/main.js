import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Collection } from '../imports/api/Collection';
import { Quiz } from '../imports/api/Quiz';

const insertQuestion = (textQuestion, user) => Collection.insert({ text: textQuestion, userId: user._id, createdAt: new Date(), })
const insertQuiz = (question, correctAnswer, answers) => Collection.insert({ text: textQuestion, userId: user._id, createdAt: new Date(), })


const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  const user = Accounts.findUserByUsername(SEED_USERNAME);
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
