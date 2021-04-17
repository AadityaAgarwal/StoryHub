import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import Constants from 'expo-constants';

export default class WriteStory extends React.Component{

  render(){
   
    return(
      <View>
     <TouchableOpacity style={styles.textContainer}>
     <Text style={styles.text}>Story Hub</Text>
     </TouchableOpacity>
     
     <View>
     <TextInput
     style={styles.inputBox}
     placeholder="Story Title"
     />
     </View>

      <View>
     <TextInput
     style={styles.inputBox}
     placeholder="Author Name"
     />
     </View>

      <View>
     <TextInput
     style={{
        marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    padding:100,
    marginTop:10,
     }}
     placeholder="Story"
     
     />
     </View>

      <TouchableOpacity style={{
         backgroundColor:"pink",
       padding:20,
       width:200,
       alignContent:"center",
       alignSelf:"center",
       marginTop:10,
      }}>
     <Text style={{
        alignSelf:"center",
      alignContent:"center",
      fontWeight:"bold",
      fontSize:20,
     }}>Submit</Text>
     </TouchableOpacity>

      </View>
    )
 
  }
}

const styles=StyleSheet.create({
  text:{
     alignSelf:"center",
      alignContent:"center",
      fontWeight:"bold",
      fontSize:20,
  },
  textContainer: {
     backgroundColor:"pink",
       padding:20,
  },
   inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    
    marginTop:10,
  },
})