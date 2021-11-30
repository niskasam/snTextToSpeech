import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [textToSpeech, setTextToSpeech] = React.useState('You are awesome!')

  const speak = () => {
    Speech.speak(textToSpeech);
  };

  const clear = () => {
    setTextToSpeech("");
  }

  return (
    <View style={styles.container}>
      <TextInput
       onChangeText={text => setTextToSpeech(text)}
       style={styles.input}
       placeholder="Input the text that you want to hear"
       value={textToSpeech}>


      </TextInput>
      <Pressable
     style={styles.btnContainer}
     onPress={speak}>
     <Text
     style={styles.btn}>Press to hear</Text>
     </Pressable>
     <Pressable
     style={styles.btnContainer}
     onPress={clear}>
     <Text
     style={styles.btnRed}>Clear text</Text>
     </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    minWidth: "50%",
  },

  btnContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10,
  },

  btn:{
    color: 'white',
    width: "80%",
    backgroundColor: '#118C4F',
    textAlign:'center',
    height: 50,
    borderRadius: 4,
    padding: 10,
    fontSize: 18,
  },

  
  btnRed:{
    color: 'white',
    width: "80%",
    backgroundColor: '#f44336',
    textAlign:'center',
    height: 50,
    borderRadius: 4,
    padding: 10,
    fontSize: 18,
  },

});
