import { View, Text,StyleSheet,Dimensions,TextInput } from 'react-native'
import React from 'react'
import FormInput from './FormInput'
import FormSubmitBtn from './FormSubmitBtn'

const LoginForm = () => {
  return (
    <View style={Styles.container}>
   <FormInput
   PlaceHolder="example@gmail.com" title="Email"/>
   <FormInput PlaceHolder="******" title="Password"/>
   <FormSubmitBtn title="login"/>
      </View>
  )
}
const Styles=StyleSheet.create({
    container:{
        marginTop:10,
       paddingHorizontal:20,
       // backgroundColor:'black',
        width:Dimensions.get('window').width,
        },
}
    )
export default LoginForm