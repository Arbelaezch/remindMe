/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
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
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



class ScrollViewExample extends Component {
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
     ]
  }
  render(props) {
     return (
        <View style={{flex :1, justifyContent: 'center', margin: 15 }}>
          <ScrollView>
              {this.state.names.map((item, index) => (
                <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
                  <View key = {item.id} style={styles.item}>   
                    <Text style={{ color: 'white'}}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
          <Button title='Add item' onPress={addReminder}></Button>
        </View>
     );
  }
}
export default ScrollViewExample;
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
  }
})

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


// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width: 64,
//   height: 64
// }

// const styles = {
  
// }
// state = {
//   names: [
//      {'name': 'Ben', 'id': 1},
//      {'name': 'Susan', 'id': 2},
//      {'name': 'Robert', 'id': 3},
//      {'name': 'Mary', 'id': 4},
//      {'name': 'Daniel', 'id': 5},
//      {'name': 'Laura', 'id': 6},
//      {'name': 'John', 'id': 7},
//      {'name': 'Debra', 'id': 8},
//      {'name': 'Aron', 'id': 9},
//      {'name': 'Ann', 'id': 10},
//      {'name': 'Steve', 'id': 11},
//      {'name': 'Olivia', 'id': 12}
//   ]
// }

// const App = () => (
//   <ScrollView>
//     <Text style={{ fontSize: 22 }}>Scroll me plz</Text>

//     {this.state.names.map((item, index) => (<View key = {item.id} style = {styles.item}><Text>{item.name}</Text></View>))}    <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>If you like</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>Scrolling down</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>What's the best</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>Framework around?</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 80 }}>React Native</Text>
//   </ScrollView>
// );


// export default App;



