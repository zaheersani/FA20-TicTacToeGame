import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';

export default function App() {
  const [getBtnTxt, setBtnTxt] = useState('X');

  return (
    <View style={styles.container}>
      <View style={styles.viewRowContainer}>
        <TouchableWithoutFeedback onPress={() => { console.log('Touchable Clicked') }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { console.log('Touchable Clicked') }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { console.log('Touchable Clicked') }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.viewRowContainer}>
        <TouchableWithoutFeedback onPress={() => { console.log('Touchable Clicked') }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { console.log('Touchable Clicked') }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { console.log('Touchable Clicked') }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.viewRowContainer}>
        <TouchableWithoutFeedback onPress={() => { console.log('Touchable Clicked') }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { console.log('Touchable Clicked') }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { console.log('Touchable Clicked') }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  viewRowContainer: { flexDirection: 'row', justifyContent: "space-between" },
  buttonText: { fontSize: 100 },
  buttonContainer: { width: '33%', height: 100, borderColor: 'black', borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
