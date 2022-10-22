import { View,
   Text, 
   Animated,
   TouchableWithoutFeedback,
    ScrollView,
    
    Dimensions, // React dimentions Api
  } from 'react-native'
import React, { useRef } from 'react'
import Styles from './src/Styles'
import FormHeader from './src/FormHeader'
import FormSelectedButton from './src/Components/FormSelectedButton'
import LoginForm from './src/Components/LoginForm'
import SignUpForm from './src/Components/SignUpForm'
const {width}=Dimensions.get('window');

const App = () => {
  //const animation=useRef(new Animated.Value(0)).current;

//   const RightHeaderOpacity=animation.interpolate({  // it take an object
// inputRange:[0,width],
// outputRange:[1,0],
// });
// const leftHeaderTransLateX=animation.interpolate({  // it take an object
//   inputRange:[0,width],
//   outputRange:[0,40],
//   });
 

  return (
    <View style={[Styles.container,{paddingTop:120}]} >
        <View style={Styles.HeadingView}>
        <FormHeader leftHeading='Welcome'
         rightHeading=' Back'
        //  RightHeaderOpacity={RightHeaderOpacity}
        //  leftHeaderTransLateX={leftHeaderTransLateX}
        
         SubHeading='Usman Ghani'/>
        </View>
    <View style={{paddingHorizontal:20,flexDirection:'row',marginBottom:20}}>

     <FormSelectedButton 
     backgroundColor="rgba(27,27,51,1)"
     style={Styles.borderLeft} title="login"/>
     <FormSelectedButton backgroundColor="rgba(27,27,51,0.4)" 
     style={Styles.borderRigt}title="signup"/>
     
    </View>
    <ScrollView 
    horizontal 
    pagingEnabled
    showsHorizontalScrollIndicator={false} // to hide horizontal indicator
    scrollEventThrottle={16}
    // onScroll={Animated.event([{nativeEvent:{contentOffset:{X:animation}}}],
    //   {useNativeDriver:false}
    //   )}
    
    >
      <ScrollView>
     <LoginForm/>
     </ScrollView>
     <ScrollView>
     <SignUpForm />
     </ScrollView>
    </ScrollView>
    </View>
  )
}

export default App