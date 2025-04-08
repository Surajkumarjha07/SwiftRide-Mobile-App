import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation: any = useNavigation();

    return (
        <>
            <View style={styles.screen}>
                <View style={styles.upperArea}>
                    <Logo />
                </View>

                <View style={styles.lowerArea}>
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

                    <View style={styles.signUpArea}>
                        <TouchableOpacity style={styles.signUpButton}>
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
                                {' '}Sign Up
                            </Text>
                        </Text>

                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#1d1f26"
    },

    upperArea: {
        height: "30%",
        justifyContent: "center",
        alignItems: "center"
    },

    lowerArea: {
        backgroundColor: "white",
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 24,
        paddingVertical: 65
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        width: "70%",
    },

    signUpArea: {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        marginTop: 24
    },

    signUpButton: {
        backgroundColor: "#48494a",
        paddingVertical: 6,
        borderRadius: 10,
        width: "100%"
    },

    error: {
        width: "70%",
        height: 52,
        alignSelf: "center",
        marginTop: 16,
        backgroundColor: "white",
        shadowColor: "gray",
        elevation: 8,
        shadowRadius: 3.5,
        shadowOpacity: 0.25,
        borderRadius: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
    },

    errorText: {
        fontSize: 16,
        color: "gray",
    }
})