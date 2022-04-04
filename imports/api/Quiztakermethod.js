import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Quiztaker} from './Quiztaker';

Meteor.methods({
    'Quiztaker.insert'(QCode) {
      check(Qcode, String);
   
      if (!this.no) {
        throw new Meteor.Error('Not have room.');
      }
   
      Quiztaker.insert({
        text,
      })
    },
   
    'Quiztaker.remove'(name) {
      check(name, String);
   
      if (!this.name) {
        throw new Meteor.Error('Not have room.');
      }
   
      Quiztaker.remove(name);
    },
   
    'Quiztaker.Addname'(Qcode, name) {
      check(Qcode, String);
      check(name, String);
   
      if (!this.no) {
        throw new Meteor.Error('Not have room.');
      }
   
      Quiztaker.update(Qcode, {
        $set: {
          name,
        }
      });
    }
  });