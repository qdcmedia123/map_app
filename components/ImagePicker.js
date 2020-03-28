import React from "react";
import { View, Button, Text, StyleSheet, Image, Alert } from "react-native";
import Colors from "../constants/Colors";
import * as ImagePicker from 'expo-image-picker';
import * as  Permissions from 'expo-permissions';

const ImgPicker = props => {

  const verifyPermission = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if(result.status !== 'granted') {
      Alert.alert('Insuffient permisssion', 'You need to gran caremra permission to use this app.', [{text: 'Okay'}])
    return false;
    }
    return true;

  }

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission();

    if(!hasPermission) {
      return;
    }
    ImagePicker.launchCameraAsync();
  };
  
  return (
    <View style = {styles.imagePicker}>
      <View style={styles.imagePreview}>
        <Text> No image picked yet.</Text>
        <Image style = {styles.image} />
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    imagePicker:{
        alignItems: 'center'
    },
    imagePreview: {
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc'
        

    },
    image:{
        width:'100%'
    }
});

export default ImgPicker;
