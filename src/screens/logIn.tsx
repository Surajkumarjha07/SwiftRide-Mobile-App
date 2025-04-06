import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Logo from '../Logo';
import { useNavigation } from '@react-navigation/native';

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation: any = useNavigation();

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
                        placeholder='Password'
                        placeholderTextColor={"gray"}
                        value={password}
                        onChangeText={setPassword}
                        keyboardType='visible-password'
                        autoCapitalize='none'
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>
            </View>

            <View style={styles.loginArea}>
                <TouchableOpacity style={styles.logInButton}>
                    <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
                        Log In
                    </Text>
                </TouchableOpacity>

                <Text style={{ textAlign: "center" }}>
                    Don't have an account?
                    <Text
                        style={{ color: "#48494a", textDecorationLine: "underline", fontWeight: "condensed" }}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        {' '}Create one
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
        justifyContent: "center",
        alignItems: "center",
        gap: 100
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

    loginArea: {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        gap: 24
    },

    logInButton: {
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