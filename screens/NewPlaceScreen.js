import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';
import {useDispatch } from 'react-redux';
import ImagePciker from '../components/ImagePicker';

const NewPlaceScreen = props => {
  const dispatch = useDispatch();
  
    const [titleValue, setTitleValue] = useState('');

    const titleChangeHandler = text => {
     
        setTitleValue(text);
    }

    const savePlaceHanllder = () => {
        dispatch(placesActions.addPlace(titleValue));
        props.navigation.goBack();
    }
    return (
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={titleChangeHandler}
            value={titleValue}
          />
          <ImagePciker />
          <Button
            title="Save Place"
            color={Colors.primary}
            onPress={savePlaceHanllder}
          />
        </View>
      </ScrollView>
    );
    
}

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
};

const styles = StyleSheet.create({
    form: {
      margin: 30
    },
    label: {
      fontSize: 18,
      marginBottom: 15
    },
    textInput: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginBottom: 15,
      paddingVertical: 4,
      paddingHorizontal: 2
    }
  });

export default NewPlaceScreen;