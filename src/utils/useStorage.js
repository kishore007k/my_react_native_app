import {createContext} from 'react';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';

export const useStorage = createContext();

const useStorageFunc = async ({uid}) => {
  const uploadUri = imagePath;
  const fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

  setUploading(true);
  const task = storage().ref(fileName).putFile(uploadUri);
  task.on('state_changed', taskSnapshot => {
    setTransferred(
      Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100,
    );
  });

  task.then(docs => {
    console.log('Image uploaded to the bucket!', docs);
  });
  try {
    await task;
    setUploading(false);
  } catch (e) {
    console.log(e);
  }

  const url = await storage().ref('images/profile-1.png').getDownloadURL();
  return url;
};
