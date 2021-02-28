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
import { acc } from 'react-native-reanimated';

function StudentRegister(props) {
    const [status, setStatus] = useState('Student Profile Registeration')
    const [userName, setuserName] = useState(null)

    const [studentName, setName] = useState(null)
    const [emailId, setEmail] = useState(null)
    const [telephoneNumber, setTelephoneNumber] = useState(null)
    const [title, setTitle] = useState(null)
    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)
    // const [address, setAddress] = useState(null)

    const [schoolName, setSchoolName] = useState(null)
    const [sscPassingYear, setSscPassingYear] = useState(null)
    const [sscScoredMarks, setSscScoredMarks] = useState(null)

    const [collageName, setCollageName] = useState(null)
    const [hscPassingYear, setHscPassingYear] = useState(null)
    const [hscScoredMarks, setHscScoredMarks] = useState(null)

    const [universityName, setUniversityName] = useState(null)
    const [program, setProgram] = useState(null)
    const [universityPassingYear, setUniversityPassingYear] = useState(null)
    const [universityScoredCGPA, setUniversityScoredCGPA] = useState(null)
    const [accountPassword, setAccountPassword] = useState(null)

    const registerStudent = () => {

        if (studentName === null || studentName === "") {
            setStatus('Error Try Again')
        }

        else if (emailId === null || emailId === "") {
            setStatus('Error Try Again')
        }

        else if (telephoneNumber === null || telephoneNumber === "") {
            setStatus('Error Try Again')
        }

        else if (title === null || title === "") {
            setStatus('Error Try Again')
        }

        else if (country === null || country === "") {
            setStatus('Error Try Again')
        }

        else if (city === null || city === "") {
            setStatus('Error Try Again')
        }

        else if (schoolName === null || schoolName === "") {
            setStatus('Error Try Again')
        }

        else if (sscPassingYear === null || sscPassingYear === "") {
            setStatus('Error Try Again')
        }

        else if (sscScoredMarks === null || sscScoredMarks === "") {
            setStatus('Error Try Again')
        }

        else if (collageName === null || collageName === "") {
            setStatus('Error Try Again')
        }

        else if (hscPassingYear === null || hscPassingYear === "") {
            setStatus('Error Try Again')
        }

        else if (hscScoredMarks === null || hscScoredMarks === "") {
            setStatus('Error Try Again')
        }

        else if (universityName === null || universityName === "") {
            setStatus('Error Try Again')
        }

        else if (universityPassingYear === null || universityPassingYear === "") {
            setStatus('Error Try Again')
        }

        else if (universityScoredCGPA === null || universityScoredCGPA === "") {
            setStatus('Error Try Again')
        }

        else if (program === null || program === "") {
            setStatus('Error Try Again')
        }

        else if (accountPassword === null || accountPassword === "") {
            setStatus('Error Try Again')
        }

        else {

            window.userName = emailId.split('@')[0];

            database().ref('Students/' + window.userName + "/").update({

                StudentName: studentName,
                StudentEmailId: emailId,
                StudentPassword: accountPassword,
                StudentPhone: telephoneNumber,
                StudentTitle: title,
                StudentCountry: country,
                StudentCity: city,
                userName: window.userName,

                SSCSchoolName: schoolName,
                SSCPassingYear: sscPassingYear,
                SSCScoredMarks: sscScoredMarks,

                HSCCollageName: collageName,
                HSCPassingYear: hscPassingYear,
                HSCScoredMarks: hscScoredMarks,

                UniversityName: universityName,
                Program: program,
                UniversityPassingYear: universityPassingYear,
                UniversityScoredCGPA: universityScoredCGPA
            })

                .then(() => {
                    setStatus('Registered')
                })

                .catch((error) => {
                    setStatus(error)

                })

        }
    }

    return (
        <>
            <View
                style={style.container}>

                <View style={style.bg}>
                    <Image
                        source={{
                            uri: header.backgroundURI
                        }}
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


                            <Text style={style.f4}>
                                Personal Information*
                            </Text>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Student Name</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={16}
                                    onChangeText={(text) => setName(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Email Id</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setEmail(text)}
                                    keyboardType="email-address"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Telephone Number</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={15}
                                    onChangeText={(text) => setTelephoneNumber(text)}
                                    keyboardType="number-pad"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Title (App Developer)</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={20}
                                    onChangeText={(text) => setTitle(text)}
                                    keyboardType="default"
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

                            {/* EDUCATION INFO */}

                            <Text style={style.f4}>
                                SSC Carrer Information*
                            </Text>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>School Name</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={16}
                                    onChangeText={(text) => setSchoolName(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>SSC Passing Year</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setSscPassingYear(text)}
                                    keyboardType="email-address"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>SSC Scored Marks</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={15}
                                    onChangeText={(text) => setSscScoredMarks(text)}
                                    keyboardType="number-pad"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Text style={style.f4}>
                                HSC Carrer Information*
                            </Text>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Collage Name</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={16}
                                    onChangeText={(text) => setCollageName(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>HSC Passing Year</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setHscPassingYear(text)}
                                    keyboardType="email-address"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>HSC Scored Marks</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={15}
                                    onChangeText={(text) => setHscScoredMarks(text)}
                                    keyboardType="number-pad"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Text style={style.f4}>
                                University Carrer Information
                            </Text>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>University Name</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={16}
                                    onChangeText={(text) => setUniversityName(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Program (BS in CS)</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={16}
                                    onChangeText={(text) => setProgram(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>University Passing Year</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setUniversityPassingYear(text)}
                                    keyboardType="email-address"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>University Scored GPA</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={15}
                                    onChangeText={(text) => setUniversityScoredCGPA(text)}
                                    keyboardType="number-pad"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Account Password</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setAccountPassword(text)}
                                    secureTextEntry={true}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Button block success style={style.button3}
                                onPress={registerStudent}>
                                <Text style={style.b1}>
                                    Register As Student
                                 </Text>
                            </Button>

                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default StudentRegister;
