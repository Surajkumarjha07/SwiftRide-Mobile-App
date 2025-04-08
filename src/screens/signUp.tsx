import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Animated, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [location, setLocation] = useState<string>("new-york");
    const navigation: any = useNavigation();
    const [showError, setShowError] = useState<boolean>(false);
    const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);

    const handleSignUp = async () => {
        if (!email || !name || !password || !role) {
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 2000);
            return;
        }

        try {
            const response = await fetch((role === "user" ? "http://localhost:4000/user/actions/sign-up" : "http://localhost:4000/captain/actions/registerCaptain"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(role === "user" ? { email, name, password, role } : { email, name, password, role, location }),
                credentials: "include"
            });

            if (response.ok || response.status === 200) {
                setSignUpSuccess(true);
            }
        } catch (error) {
            Alert.alert("Some error occured on network side!");
        }
    }

    const handleSetText = (text: string) => {
        setRole(text);
        setShowModal(false);
    }

    const errorAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (showError || signUpSuccess) {
            errorAnim.setValue(0);

            Animated.timing(errorAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, [showError]);


    return (
        <>
            <View style={styles.screen}>
                {
                    showError &&
                    <Animated.View style={[
                        styles.error,
                        {
                            opacity: errorAnim,
                            transform: [
                                {
                                    translateY: errorAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [-20, 10],
                                    }),
                                },
                            ],
                        },
                    ]}>
                        <Text style={styles.errorText}>
                            {
                                signUpSuccess ? "Congrats! registered successful" : showError ?
                                    "Enter credentials first!" : "Some error occured on network side!"
                            }
                        </Text>
                    </Animated.View>
                }

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
                        editable={showModal ? false : true}
                        onPress={() => setShowModal(true)}
                    />

                    {
                        showModal &&
                        <Pressable style={StyleSheet.absoluteFill} onPress={() => setShowModal(false)}>
                            <View style={styles.modalOverlay}>
                                <Pressable
                                    style={styles.modal}
                                    onPress={() => { }}
                                />
                                <View style={styles.modal}>
                                    <Text style={styles.modalText} onPress={() => handleSetText("user")}>
                                        User
                                    </Text>
                                    <Text style={styles.modalText} onPress={() => handleSetText("captain")}>
                                        Captain
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    }

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
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#1d1f26",
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

    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modal: {
        width: "40%",
        backgroundColor: "white",
        position: "absolute",
        top: "40%",
        borderRadius: 16,
        paddingVertical: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 10,
    },

    modalText: {
        textAlign: "center",
        fontWeight: "medium",
        fontSize: 18,
        marginVertical: 12
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
        position: "absolute",
    },

    errorText: {
        fontSize: 16,
        color: "gray",
    }
})