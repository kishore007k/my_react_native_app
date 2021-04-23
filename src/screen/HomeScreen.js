/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
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
import {AuthContext} from '../components/AuthContext';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState('');
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const {user} = useContext(AuthContext);

  const pickImageFromGallery = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
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
    const task = storage().ref(`${user.uid}/${fileName}`).putFile(uploadUri);
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
    const url = await storage().ref(`${user.uid}/${fileName}`).getDownloadURL();
    setImage(url);
  };

  const takePhotoUsingCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      cropping: true,
    }).then(imageFile => {
      const uri = imageFile.path;
      setImage(uri);
      setImagePath(uri);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {image && (
        <Image source={{uri: image}} style={{width: 300, height: 300}} />
      )}
      {uploading ? (
        <View>
          <ActivityIndicator size="large" color="#014e96s" />
          <Text>{transferred} %</Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={uploadImageToStorage}
          style={styles.uploadBtn}>
          <Text style={styles.uploadBtnText}>Upload</Text>
        </TouchableOpacity>
      )}

      <ActionButton buttonColor="#0a7ae2">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={takePhotoUsingCamera}>
          <Image
            source={require('../assets/icon/camera.png')}
            style={styles.actionButtonIcon}
          />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#db346c"
          title="Choose Photo"
          onPress={pickImageFromGallery}>
          <Image
            source={require('../assets/icon/gallery.png')}
            style={styles.actionButtonIcon}
          />
        </ActionButton.Item>
      </ActionButton>
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
  actionButtonIcon: {
    width: 30,
    resizeMode: 'contain',
  },
  uploadBtn: {
    backgroundColor: '#db346c',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  uploadBtnText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    elevation: 5,
  },
});
