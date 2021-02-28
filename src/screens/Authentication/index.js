import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import database from '@react-native-firebase/database';
import app from '@react-native-firebase/app';
import { Button, Item, Input, Label } from 'native-base';
import colors from '../../config/colorsConfig/index';
import heaedr from '../../config/headerConfig/index';
import style from './style';

function Login(props) {

    const [status, setStatus] = useState('Log In To Your Account')
    const [name, setName] = useState('null')
    const [password, setPassword] = useState(null)

    const authenticator = () => {
        setStatus('Please wait...')
        if (name.trim() === '' || name === 'null') {
            setStatus('No User Find')
        }
        else {
            window.userName = name.split('@')[0];

            database().ref("/Companies/" + window.userName + "/").once('value')
                .then((snapshot) => {
                    if (snapshot.val().UserName === window.userName) {
                        setStatus('User Found, Validating')
                        if (snapshot.val().Password === password) {
                            setStatus('Successfully Logged In')
                            props.navigation.navigate("CompanyHome", {UserName: window.userName})

                        }
                        else {
                            setStatus('Invalid Credentials')
                        }
                    }
                    else {
                        database().ref("/Students/" + window.userName + "/").once('value')
                            .then((snapshot) => {
                                setStatus('User Found, Validating')
                                if (snapshot.val().userName === window.userName) {
                                    setStatus('Found Student')
                                }
                                else {
                                    setStatus('No User Find')
                                }
                            })
                            .catch((error) => {
                                setStatus('Server Error')
                            })
                    }
                })
                .catch((error) => {
                    database().ref("/Students/" + window.userName + "/").once('value')
                        .then((snapshot) => {

                            if (snapshot.val().userName === window.userName) {
                                if (snapshot.val().StudentPassword === password) {
                                    setStatus('Successfully Logged In')
                                    props.navigation.navigate("StudentHome", {UserName: window.userName})

                                }
                                else {
                                    setStatus('Invalid Credentials')
                                }
                            }
                            else {
                                setStatus('No User Find')
                            }
                        })
                        .catch((error) => {
                            setStatus('Server Error')
                        })
                })
        }

    }

    const toCompanyRegister = () => {
        props.navigation.navigate("CompanyRegister")
    }

    const toStudentRegister = () => {
        props.navigation.navigate("StudentRegister")
    }

    return (
        <>
            <View style={style.container}>

                <View style={style.bg}>
                    <Image
                        source={{
                            uri: heaedr.backgroundURI
                        }}
                        style={style.img}
                    >
                    </Image>
                </View>

                <View style={style.subContainer1} >

                    <Text style={style.t1}>
                        {heaedr.headerText_01} {heaedr.headerText_02}
                    </Text>

                    <Text
                        style={style.t2}>
                        {heaedr.headerText_03}
                    </Text>

                </View>

                <View
                    style={style.subContainer2}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={style.subContainer2_1}>
                            <Text
                                style={style.f3}>
                                {status}
                            </Text>

                            <Item floatingLabel
                                style={style.inp1}
                            >
                                <Label>Your Email Address</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setName(text)}
                                    keyboardType="email-address"
                                    keyboardAppearance="dark"
                                />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Your Account Password</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setPassword(text)}
                                    secureTextEntry={true}
                                    keyboardType="default"
                                    keyboardAppearance="dark"
                                />
                            </Item>

                            <Button block success style={style.button3}
                                onPress={() => authenticator()}
                            >
                                <Text style={style.b1}>
                                    Login To Your Account
                                </Text>
                            </Button>

                            <Text
                                style={style.f2}>
                                New Member ?
                            </Text>

                            <Button block warning style={style.button1}
                                onPress={() => toStudentRegister()}
                            >
                                <Text style={style.b1}>
                                    Register Account As Student
                                </Text>
                            </Button>

                            <Button block warning style={style.button2}
                                onPress={() => toCompanyRegister()}
                            >
                                <Text style={style.b1}>
                                    Register Account As Company
                                </Text>
                            </Button>

                        </View>

                    </ScrollView>

                </View>

            </View>

        </>
    );
};


export default Login;
