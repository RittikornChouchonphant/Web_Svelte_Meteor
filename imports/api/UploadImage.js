import { Mongo } from 'meteor/mongo';

export const Adverts = new Mongo.Collection('abverb');

Images = new FilesCollection({
    collectionName: 'Images',
    storagePath: () => {
        return `~/public/uploads/`;
    },
    allowClientCode: true, // Required to let you remove uploaded file
    onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.ext)) {
            return true;
        } else {
            return 'Limit 10mb';
        }
    }
});
// if client subscribe images
if (Meteor.isClient) {
    Meteor.subscribe('files.images.all');   
};

// if server publish images
if (Meteor.isServer) {
    Images.allowClient();
    Meteor.publish('files.images.all', () => {
        return Images.collection.find();
    });
};