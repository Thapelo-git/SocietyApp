import React,{useState} from 'react';
import { View,SafeAreaView, Text ,StatusBar,Image,StyleSheet,
    TextInput,TouchableOpacity,CheckBox, ScrollView} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"
import Separator from '../data/Separator.jsx';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import {Display} from '../utils'
const SignIn=({navigation})=>{
    const [isPasswordShow,setPasswordShow]=useState(false)
    const [isSelected,setSelection]=useState(false)
    const ReviewSchem =yup.object({
        email:yup.string().required().min(6),
        password:yup.string().required().min(6),
    })
    return(
        <SafeAreaView>
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
            <View>
              
                <View style={styles.headerContainer} 
                >
                    <Separator
                height={StatusBar.currentHeight}
                />
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icons name="keyboard-backspace" size={20} style={{ padding: 5 }}></Icons> 
                </TouchableOpacity>
                <Text style={styles.headerTitle}></Text>
                </View>

            <ScrollView>
                <View style={{alignItems:'center',marginTop:5}}>
                    <Image source={require('../images/logo.png')}/>
                </View>
            <Formik 
               initialValues={{email:'',password:''}}
               validationSchema={ReviewSchem}
               onSubmit={(values,action)=>{
                   action.resetForm()
                Submit(values)
               }}
               >
                   {(props)=>(
                       <View>
            <View style={[styles.inputContainer,{marginTop:60}]}>
                <View style={styles.inputSubContainer}>
                    <Icon name="email" size={22}
                    color='black'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="Enter your email"
                    selectionColor='gainsboro'
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    onBlur={props.handleBlur('email')}
                    style={styles.inputText}
                    />
                </View>
             
            </View>
            <Text style={styles.errortext}>{props.touched.email && props.errors.email}</Text>
            <Separator height={15}/>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                <Icon name="lock" size={22}
                    color='black'
                    style={{marginRight:10}}/>
                 <TextInput
                 secureTextEntry={isPasswordShow? false :true}
                 placeholder="Enter your Password"
                 selectionColor='gainsboro'
                 onChangeText={props.handleChange('password')}
                value={props.values.password}
                 onBlur={props.handleBlur('password')}
                 style={styles.inputText}/>
                 <Feather
                 name={isPasswordShow?"eye-off":"eye"} size={22}
                 color='black'
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />
                </View>

            </View>
            <Text style={styles.errortext}>{props.touched.password && props.errors.password}</Text>
            <Text></Text>
            <View style={styles.forgotPasswordContainer}>
                <View style={styles.toggleContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}/>
                    
                    <Text style={styles.rememberMeText}>Remember me</Text>
                </View>
                <Text style={styles.forgotPasswordText}
                onPress={()=>navigation.navigate('ForgetScreen')}
                >Forget Password</Text>
            </View>
    
            <TouchableOpacity style={styles.signinButton}
            onPress={()=>navigation.navigate('TabScreen')}>
                <Text style={styles.signinButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text style={styles.accountText}>
                    Don't have account?
                </Text>
                <Text style={styles.signupText}
                onPress={()=>navigation.navigate('SignUp')}
                >Sign Up</Text>
            </View>
            </View>)}
            </Formik> 
            </ScrollView>
            </View>

            
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
        
    },
    headerContainer:{
       flexDirection:'row' ,
       alignItems:'center',
       justifyContent:'center',
       paddingVertical:20,
       paddingHorizontal:20
    },
    headerTitle:{
      fontSize:20,
      lineHeight:20 * 1.4,
      width:Display.setWidth(80),
      textAlign:'center'  

    },
    title:{
fontSize:20,
lineHeight:20 * 1.4,
marginTop:50,
marginBottom:10,
marginHorizontal:20
    },
    content:{
        fontSize:20,
        marginTop:10,
        marginBottom:20,
        marginHorizontal:20,
    },
    inputContainer:{
        backgroundColor: '#F8F6F6',
        //backgroundColor:'#F5F5F5',
        paddingHorizontal:10,
        height:40,
        marginHorizontal:20,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:'black',
        justifyContent:'center',
        borderWidth:1,
        padding:10,
       marginBottom:-10
    },
    inputSubContainer:{
       
        flexDirection:'row',
        alignItems:'center'
    },
    inputText:{
        fontSize:18,
        textAlignVertical:'center',
        padding:0,
        height:Display.setHeight(6),
        color:'black',
        flex:1

    },
    forgotPasswordContainer:{
        marginHorizontal:20,
        flexDirection:'row',
        marginTop:-30,
        alignItems:'center',
        justifyContent:'space-between',
        padding:10

    },
    rememberMeText:{
        marginLeft:10,
        fontSize:12,
        lineHeight:12 * 1.4,
        color:'grey'
    },
    forgotPasswordText:{
        fontSize:12,
        lineHeight:12 * 1.4,
        color:'#0225A1',
        fontWeight:'bold'
    },
    signinButton:{
        backgroundColor:'#0225A1',
        borderRadius:8,
        height: 40,
        marginHorizontal:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
      elevation:2,
    },
    signinButtonText:{
        fontSize:18,
        lineHeight:18 * 1.4,
        color:'#fff',
        
    },
    signupContainer:{
        alignContent: 'center',
        alignItems: 'baseline',
        marginHorizontal:20,
        justifyContent:'center',
        paddingVertical:'15%',
        flexDirection:'row',
        alignItems:'center',
        
    },
    accountText:{
        fontSize:13,
        lineHeight:13 * 1.4,
        color:'gray'
    },
    signupText:{
        fontSize:13,
        lineHeight:13 * 1.4,
        color:'#0225A1',
        marginLeft:5,

    },
    errortext:{
        color:'red',
        paddingHorizontal:20,
        marginHorizontal:20,
        justifyContent:'center',
        padding:10,
    },
    toggleContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    checkbox:{
        color:'#0225A1'
    }
   

})

export default SignIn