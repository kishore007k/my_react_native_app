/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const HomeScreen = () => {
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState('');
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const pickImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(imageFile => {
      const uri = imageFile.path;
      setImage(uri);
      setImagePath(uri);
    });
  };

  const uploadImageToStorage = async () => {
    const uploadUri = imagePath;
    const fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    setUploading(true);
    const task = storage().ref(fileName).putFile(uploadUri);
    task.on('state_changed', taskSnapshot => {
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
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
    const url = await storage().ref(fileName).getDownloadURL();
    setImage(url);
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={pickImageFromGallery}>
        <Text>+</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{uri: image}} style={{width: 300, height: 300}} />
      )}
      <TouchableOpacity onPress={uploadImageToStorage}>
        <Text>Upload</Text>
      </TouchableOpacity>
      {uploading ? (
        <View>
          <ActivityIndicator size="large" color="#014e96s" />
        </View>
      ) : (
        <View>
          <Text>Done</Text>
        </View>
      )}
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
