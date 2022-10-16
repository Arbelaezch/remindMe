/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
// import {Routes, Route, useNavigate} from 'react-router-dom'
// import {NavigationContainer} from 'react-navigation/native'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Linking,
  TouchableOpacity,
  Button,
  Alert,
  Modal,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default class App extends Component {
  state = {
    names: [
       {'name': 'Ben', 'id': 1},
       {'name': 'Susan', 'id': 2},
       {'name': 'Robert', 'id': 3},
       {'name': 'Mary', 'id': 4},
       {'name': 'Daniel', 'id': 5},
       {'name': 'Laura', 'id': 6},
       {'name': 'John', 'id': 7},
       {'name': 'Debra', 'id': 8},
       {'name': 'Aron', 'id': 9},
       {'name': 'Ann', 'id': 10},
       {'name': 'Steve', 'id': 11},
       {'name': 'Olivia', 'id': 12}
    ],
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render(props) {
    const { modalVisible } = this.state
    return (
      <View style={styles.centeredView}>
      
      {/* MODAL */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
      </Modal>


      {/* LIST */}
      {<View style={{flex :1, justifyContent: 'center', margin: 15 }}>
        <ScrollView>
            {this.state.names.map((item, index) => (
              <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                <View key = {item.id} style={styles.item}>   
                  <Text style={{ color: 'white'}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
        <Button title='Add item' onPress={addReminder}></Button>
      </View>}
      
      
      
      </View>
    );
  }
}


const styles = StyleSheet.create ({
  item: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 30,
     margin: 2,
     borderColor: '#2a4944',
     borderWidth: 1,
     backgroundColor: 'black',
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});



function navigateToReminder(id) {
  return <h2>Test</h2>
}

function addReminder() {
  Alert.alert(
    "Alert title",
    "Alert message",
    [
      {
        text: "OK",
        onPress: () => console.log("Ask me later pressed")
      }
    ]
  )
}

function reminderPage() {
  return <h2>Reminder Page</h2>
}
