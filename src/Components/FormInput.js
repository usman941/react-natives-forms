import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const FormInput = (props) => {
  const {PlaceHolder,lable}=props
  return (
    <View>
     <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>
        {lable}
       </Text>
       <TextInput 
       {...props} // distructure props
       placeholder={PlaceHolder}
       style={Styles.InputStyle}>

       </TextInput>
    </View>
  )
}
const Styles=StyleSheet.create({
    InputStyle:{
        borderWidth:2,
        borderColor:'#1b1b33',
    height:35,
    borderRadius:8,
    fontSize:13,
    paddingLeft:10,
    fontWeight:'bold',
    marginBottom:20,
    }
})
export default FormInput