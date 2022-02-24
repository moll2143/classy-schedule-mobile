import React from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'

const WelcomeScreenFun = ({navigation}) => {
     const login = () => navigation.navigate("Login")

  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Welcome Screen"/>
        </Card>
        <Button style={styles.buttonStyle} onPress={login}>Login</Button>
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      
    },
    cardStyle:{
        backgroundColor:"purple"
    },
    buttonStyle:{
        borderColor:"purple"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
  

export default WelcomeScreenFun;


