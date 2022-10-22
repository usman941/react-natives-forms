import { View, Text ,TouchableWithoutFeedback,StyleSheet} from 'react-native'
import React from 'react'

const FormSelectedButton = ({title,backgroundColor,style}) => {
  return (
    <TouchableWithoutFeedback>
    <View style={[styles.contanier ,style, {backgroundColor}]}>
       <Text style={styles.title }>
        {title}
       </Text>
    </View>
  </TouchableWithoutFeedback>
  )
}
const styles=StyleSheet.create({
    contanier:{
        height:45,
        width:'50%',
        backgroundColor: '#343434',
        justifyContent:'center'
      },
      title:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
      }
})

export default FormSelectedButton