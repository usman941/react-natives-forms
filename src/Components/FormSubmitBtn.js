import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'


const FormSubmitBtn = ({title,onPress}) => {
  return (
   <TouchableOpacity onPress={onPress} style={Styles.container}>
<Text style={{color:"white",fontSize:25}}>
    {title}
</Text>
   </TouchableOpacity>
  )
}
const Styles=StyleSheet.create({
    container:{
        height:45,
        backgroundColor:"rgba(27,27,51,0.4)",
        justifyContent:'center',
        borderRadius:8,
        alignItems:'center'

    }
})
export default FormSubmitBtn