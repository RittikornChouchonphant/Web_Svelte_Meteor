import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { QuizDetails } from '../imports/api/QuizDetails';
import { Quiz } from '../imports/api/Quiz';

const insertQuestion = (no, obj) => { QuizDetails.insert({ No: no, Obj: obj }) }

const SEED_USERNAME = 'Raskit';
const SEED_PASSWORD = 'Websveltemeteor22';
const SEED_EMAIL = 'raskit22@gmail.com';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      email: SEED_EMAIL,
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  if (QuizDetails.find().count() === 0) {
    [
      { Question: "Question 1", Choice1: "Choice1", Choice2: "Choice2" },
      { Question: "Question 2", Choice1: "Choice1", Choice2: "Choice2" },
      { Question: "Question 3", Choice1: "Choice1", Choice2: "Choice2" },
      { Question: "Question 4", Choice1: "Choice1", Choice2: "Choice2" },
      { Question: "Question 5", Choice1: "Choice1", Choice2: "Choice2" },
    ].forEach((quiz, index) => insertQuestion(index, quiz));
  }

//   const handle = Messages.find({ roomId }).observeChanges({
//     added: (id) => {
//       count += 1;
//   }

//   if (!initializing) {
//     this.changed('counts', roomId, { count });
//   }

//   Meteor.publish('secretData', function () {
//     if (this.userId === 'superuser') {
//       return SecretData.find();
//     } else {
//       // Declare that no data is being published. If you leave this line out,
//       // Meteor will never consider the subscription ready because it thinks
//       // you're using the `added/changed/removed` interface where you have to
//       // explicitly call this.ready
//       return [];
//     }
//   },

//   removed: (id) => {
//   count -= 1;
//   this.changed('counts', roomId, { count });
//  }

});
