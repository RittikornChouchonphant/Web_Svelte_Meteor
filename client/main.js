import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

Meteor.startup(() => {
  new App({
    target: document.getElementById('app'),
    hydratable: true
  });
});

import('meteor/meteor').then(({ Meteor }) => {
  formSubmit = document.getElementById('formSubmit')
  formSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let file = document.querySelector('#arquivo').files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
      let buffer = new Uint8Array(reader.result)
      let { type, name } = file
      Meteor.call('upload', { name, type, buffer }, (err, res) => {
        if(err) throw err
        alert(`sucesso! ${res}`)
      });
    };
    reader.readAsArrayBuffer(file)
  });
});
