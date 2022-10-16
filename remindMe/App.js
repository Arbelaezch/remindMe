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
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      activeItemName: '',
      activeItemId: null,

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
    }
  };

  reminderModal(item) {
    this.setState({ 
      modalVisible: true,
      activeItemName: item.name,
      activeItemId: item.id,
    });
  }

  closeModal() {
    this.setState({
      modalVisible: false,
      activeItemId: null,
      activeItemName: '',
    });
  }

  render() {

    return (
      <View style={styles.centeredView}>
      
      {/* MODAL */}
      <Modal
        itemId={this.state.activeItemId}
        itemName={this.state.activeItemName}
        animationType='slide'
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.reminderModal(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{this.state.activeItemName}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.closeModal()}
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
              <TouchableOpacity onPress={() => this.reminderModal(item)}>
                <View key = {item.id} style={styles.item}>   
                  <Text style={{ color: 'white'}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
        
      </View>}
      
      <Button title='Add item' onPress={addReminder}></Button>
      
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
    marginTop: 10,
    marginBottom: 10,
  },

  modalView: {
    flex: 1,
    backgroundColor: "white",
    // borderRadius: 20,
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
    textAlign: "center",
    color: 'black',
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
