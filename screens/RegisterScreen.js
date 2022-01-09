import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageURL, setImageURL] = useState('')
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            var user = userCredential.user
            user.updateProfile({
                displayName: name,
                photoURL: imageURL? imageURL:"https://zupimages.net/up/22/01/nu7y.jpeg"
            }).then(function () {

            }).catch(function (error) {

            })
            navigation.popToTop()
    
        })
        .catch((error) => {
            var errorMessage = error.message
            alert(errorMessage)
        })
    }
    return (
        <View style={styles.container}>
            <Input 
                placeholder="Enter your name or pseudo"
                label="Name"
                leftIcon={{type:'material',name:'badge'}}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input 
                placeholder="Enter your email"
                label="Email"
                leftIcon={{type:'material',name:'email'}}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input 
                placeholder="Enter your password"
                label="Password"
                leftIcon={{type:'material',name:'lock'}}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Input 
                placeholder="Enter your avatar"
                label="Profile picture"
                leftIcon={{type:'material',name:'face'}}
                value={imageURL}
                onChangeText={text => setImageURL(text)}
            />
            <Button    
                title="Register" 
                style={styles.button}
                onPress={register}
            />
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})