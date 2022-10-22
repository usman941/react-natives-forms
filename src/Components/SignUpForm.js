import { View, Text,StyleSheet,Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import FormInput from './FormInput'
import FormSubmitBtn from './FormSubmitBtn'

const isValidObjForm=(obj)=>{
  return Object.values(obj).every(value=>value.trim())
}
const UpdateError=(error,stateUpdater)=>{
stateUpdater(error);
setTimeout(() => {
  stateUpdater('');
}, 2500);
}
const SignUpForm = () => {
  const [userInfo,setuserInfo]=useState({
    fulName:'',
    email:'',
    password:'',
    confirmPassword:''
  });
  const [error,setError]=useState('');
  const {fulName,email,password,confirmPassword}=userInfo
  const handleOnChangeText=(value,fieldName)=>{
setuserInfo({...userInfo,[fieldName]:value})
  }
  //console.log(userInfo);
  const isValidForm=()=>{
    // we will accept only if all of the feilds have value 
    if(!isValidObjForm(userInfo)) return UpdateError('Required all fields!',setError);
    // if valid name with  or more characters 
    if(!fulName.trim()|| fulName.length<3) return UpdateError('Invalid Name',setError);
    // only valid email is allowed 

    // password must be 8 or more characters 
    // password and conform password must be the same 

  }
  const submitForm=()=>{
    // before submitting this form we need to validate our form 
    if(isValidForm())
    {
      //submit form
      console.log(userInfo);
    }
  }
  return (
    <View style={Styles.container}>
      <FormInput 
      value={fulName}
      onChangeText={(value)=>{handleOnChangeText(value,'fulName')}}
       PlaceHolder="M.Usman Ghani" 
       title="Full Name"/>
      <FormInput 
      autoCapitalize='none'
      value={email} 
      onChangeText={(value)=>{handleOnChangeText(value,'email')}}
       PlaceHolder="example@gmail.com"
        title="Email"/>
    <FormInput 
    autoCapitalize='none'
    value={password}
    onChangeText={(value)=>{handleOnChangeText(value,'password')}}
      secureTextEntry
      PlaceHolder="******" 
       title="Password"/>
    <FormInput 
    autoCapitalize='none'
    secureTextEntry 
    value={confirmPassword}
    onChangeText={(value)=>{handleOnChangeText(value,'confirmPassword')}}
    PlaceHolder="******" 
    title="Conform Password"/>
    <FormSubmitBtn onPress={submitForm} title="Sign Up"/>
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
export default SignUpForm