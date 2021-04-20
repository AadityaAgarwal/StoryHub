import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid
} from 'react-native';
import Constants from 'expo-constants';
import db from '../config';

export default class WriteStory extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      author: '',
      story: '',
    };
  }

  // collections = async () => {
  //   db.collection('stories').doc("story1").update({
  //     author: this.state.author,
  //     title:this.state.title,
  //     constent:this.state.story
  //   });


    
  //   var msg="Your Story Has been Submitted"
  //   ToastAndroid.show(msg,ToastAndroid.SHORT)
  // };

  render() {
    console.log(this.state.title);
    return (
      <View>
        <TouchableOpacity style={styles.textContainer}>
          <Text style={styles.text}>Story Hub</Text>
        </TouchableOpacity>

        <View>
          <TextInput
            style={styles.inputBox}
            placeholder="Story Title"
            onChangeText={(text) => {
              this.setState({ title: text });
            }}
            value={this.state.title}
          />
        </View>

        <View>
          <TextInput
            style={styles.inputBox}
            placeholder="Author Name"
            onChangeText={(text) => {
              this.setState({ author: text });
            }}
            value={this.state.author}
          />
        </View>

        <View>
          <TextInput
            style={{
              marginTop: 50,
              width: '80%',
              alignSelf: 'center',
              height: 200,
              textAlign: 'center',
              borderWidth: 4,
              marginTop: 10,
            }}
            placeholder="Story"
            onChangeText={(text) => {
              this.setState({ story: text });
            }}
            value={this.state.story}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'pink',
            padding: 20,
            width: 200,
            alignContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}
          onPress={//this.collections()
          async()=>{
            db.collection('stories').doc("story1").update({
              author: this.state.author,
              title:this.state.title,
              constent:this.state.story
            });
        
        
            
            var msg="Your Story Has been Submitted"
            ToastAndroid.show(msg,ToastAndroid.SHORT)
          }
          }>
          <Text
            style={{
              alignSelf: 'center',
              alignContent: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textContainer: {
    backgroundColor: 'pink',
    padding: 20,
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,

    marginTop: 10,
  },
});
