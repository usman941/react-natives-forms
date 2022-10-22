import { View, Text,Animated,opacity } from 'react-native'
import React from 'react'
import Styles from './Styles'
import App from '../App'

const FormHeader = ({leftHeading,
  rightHeading,
  SubHeading,
  leftHeaderTransLateX=40,
  leftHeaderTransLateY=-20,
  RightHeaderOpacity=-0}) => {
  return (
    <>
    <View style={{flexDirection:'row',justifyContent:"center"}}>
    <Animated.Text style={[Styles.MyText,{transform:[{translateX:
    leftHeaderTransLateX}]}]}>
      {leftHeading}
    </Animated.Text>
    <Animated.Text style={[Styles.MyText,
    {opacity:RightHeaderOpacity,transform:[{translateY:
      leftHeaderTransLateY
    }]}]}>
       {rightHeading}
    </Animated.Text>
</View>
<Text style={{fontSize:18,fontWeight:'bold',color:'black',textAlign:"center"}} >
  {SubHeading}
</Text>
</>
  )
}

export default FormHeader