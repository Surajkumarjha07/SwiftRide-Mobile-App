import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from '../Logo';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigation: any = useNavigation();

    const handleSignUp = async () => {
        if (!email || !name || !password || !role) {
            return Alert.alert("Enter credentials first!");
        }

        try {
            const response = await fetch((role == "user" ? "http://localhost:4000/user/actions/sign-up": "http://localhost:4000/captain/actions/registerCaptain"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, name, password, role }),
                credentials: "include"
            });

            if (response.ok || response.status === 200) {
                Alert.alert("You are registered now!");
            }
        } catch (error) {
            Alert.alert("Some error occured on network side!");
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.formArea}>
                <Logo />

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='E-mail'
                        placeholderTextColor={"gray"}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Name'
                        placeholderTextColor={"gray"}
                        value={name}
                        onChangeText={setName}
                        keyboardType='default'
                        autoCapitalize='none'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor={"gray"}
                        value={password}
                        onChangeText={setPassword}
                        keyboardType='visible-password'
                        autoCapitalize='none'
                        secureTextEntry={true}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder='Role'
                        placeholderTextColor={"gray"}
                        value={role}
                        onChangeText={setRole}
                        keyboardType='default'
                        autoCapitalize='none'
                        style={styles.input}
                    />

                </View>
            </View>

            <View style={styles.signUpArea}>
                <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                    <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                <Text style={{ textAlign: "center" }}>
                    Already have an account?
                    <Text
                        style={{ color: "#48494a", textDecorationLine: "underline", fontWeight: "condensed" }}
                        onPress={() => navigation.navigate('LogIn')}
                    >
                        {' '}Log In
                    </Text>
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    formArea: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 42
    },

    inputArea: {
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "auto",
        gap: 24,
        width: "70%",
    },

    signUpArea: {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        gap: 24
    },

    signUpButton: {
        backgroundColor: "#48494a",
        paddingVertical: 6,
        borderRadius: 10,
        width: "100%"
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        width: "100%",
    }


})