import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Picker
} from 'react-native';


import database from '@react-native-firebase/database';
import app from '@react-native-firebase/app';
import { Button, Item, Input, Label } from 'native-base';
import colors from '../../../config/colorsConfig/index';
import header from '../../../config/headerConfig/index';
import style from './style';

function CompnayRegister(props) {
    const [status, setStatus] = useState('Company Profile Registeration')
    const [companyName, setCompanyName] = useState(null)
    const [emailId, setEmailid] = useState(null)
    const [password, setPassword] = useState(null)
    const [number, setNumber] = useState(null)
    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)
    const [address, setAddress] = useState(null)

    const CompanyRegister = () => {
        if (companyName === null || companyName === "") {
            setStatus('Error Try Again')
        }

        else if (emailId === null || emailId === "") {
            setStatus('Error Try Again')
        }

        else if (password === null || password === "") {
            setStatus('Error Try Again')
        }

        else if (number === null || number === "") {
            setStatus('Error Try Again')
        }

        else if (country === null || country === "") {
            setStatus('Error Try Again')
        }

        else if (city === null || city === "") {
            setStatus('Error Try Again')
        }

        else if (address === null || address === "") {
            setStatus('Error Try Again')
        }

        else {

            window.userName = emailId.split('@')[0];

            database().ref('Companies/' + window.userName + "/").update({
                CompanyName: companyName,
                CompanyEmailID: emailId,
                Password: password,
                CompanyPhone: number,
                Country: country,
                City: city,
                BranchAddress: address,
                UserName: window.userName
            })
                .then(() => {
                    setStatus('Registered Successfully')
                })
                .catch(() => {
                    setStatus('Error Contact Admin')
                })
        }
    }

    return (
        <>
            <View
                style={style.container}>

                <View style={style.bg}>
                    <Image
                        source={{ uri: header.backgroundURI }}
                        style={style.img}
                    >
                    </Image>
                </View>

                <View style={style.subContainer1} >

                    <Text
                        style={style.t1}>
                        {header.headerText_01} {header.headerText_02}
                    </Text>
                    <Text
                        style={style.t2}>
                        {header.headerText_03}
                    </Text>
                </View>

                <View
                    style={style.subContainer2}>
                    <Text
                        style={style.f3}>
                        {status}
                    </Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>

                        <View style={style.subContainer2_1}>

                            <Item floatingLabel
                                style={style.inp1}>
                                <Label>Company Name</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={16}
                                    onChangeText={(text) => setCompanyName(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Email Id</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setEmailid(text)}
                                    keyboardType="email-address"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Telephone Number</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={15}
                                    onChangeText={(text) => setNumber(text)}
                                    keyboardType="number-pad"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Country</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={20}
                                    onChangeText={(text) => setCountry(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>City</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={20}
                                    onChangeText={(text) => setCity(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Branch Address</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={100}
                                    onChangeText={(text) => setAddress(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Account Password</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setPassword(text)}
                                    secureTextEntry={true}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Button block success style={style.button3}
                                onPress={CompanyRegister}>
                                <Text style={style.b1}>
                                    Register As Company
                                 </Text>
                            </Button>

                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default CompnayRegister;
