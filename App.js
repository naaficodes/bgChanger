import React,{useState} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,StatusBar} from 'react-native';

const App=()=>{
  // State Hook
  const [randomColor,setRandomColor]=useState('rgb(32,0,126)');

  const changeBG=()=>{
    // Math.random by default gives value between 0 and 1
    // Thats why it's multiplied by 256
    let color=`rgb(${Math.floor((Math.random() *256))},${Math.floor((Math.random() *256))},${Math.floor((Math.random() *256))})`;
    setRandomColor(color);
  }

  const resetBG=()=>{
    // Background color to black
    setRandomColor('rgb(0,0,0)');
  }

return(
  <>
  <StatusBar backgroundColor={randomColor}/>
  <View style={[styles.container,{backgroundColor:randomColor}]}>

    <TouchableOpacity onPress={changeBG}>
    <Text style={styles.text}>Tap here</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={resetBG}>
    <Text style={[styles.text]}>Reset</Text>
    </TouchableOpacity>
  
  </View>
  
  </>
)
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:30,
    backgroundColor:"#db2cd9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:'#ffffff',
    borderRadius:15,
    textTransform:"uppercase"
  }
})