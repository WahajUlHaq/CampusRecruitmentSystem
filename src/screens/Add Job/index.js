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
import colors from '../../config/colorsConfig/index';
import header from '../../config/headerConfig/index';
import style from './style';
import { acc } from 'react-native-reanimated';
import FooterCompany from '../../component/footer/footerCompany';


function AddJob(props) {

    const { UserName } = props.route.params;
    const [status, setStatus] = useState('Post your job here')
    const [jobTitle, setJobName] = useState(null)
    const [description, setJobDescription] = useState(null)
    const [skills, setSkills] = useState(null)

    const [eligiblity, setEligiblity] = useState(null)
    const [address, setAddress] = useState(null)
    const [salary, setSalary] = useState(null)


    const registerJob = () => {

        if (jobTitle === null || jobTitle === "") {
            setStatus('Error Try Again')
        }

        else if (description === null || description === "") {
            setStatus('Error Try Again')
        }

        else if (skills === null || skills === "") {
            setStatus('Error Try Again')
        }

        else if (eligiblity === null || eligiblity === "") {
            setStatus('Error Try Again')
        }

        else if (address === null || address === "") {
            setStatus('Error Try Again')
        }

        else if (salary === null || salary === "") {
            setStatus('Error Try Again')
        }


        else {

            let id = Math.floor(Math.random() * 10000) + 14 * 50670 

            database().ref('Companies/' + UserName + "/Jobs/" + jobTitle + "/").update({
                Title: jobTitle,
                Description: description,
                Skills: skills,
                Eligiblity: eligiblity,
                Address: address,
                Salary: salary,
                id : id
            })

                .then(() => {

                    database().ref('Jobs/' + id + "/").update({
                        Title: jobTitle,
                        Description: description,
                        Skills: skills,
                        Eligiblity: eligiblity,
                        Address: address,
                        Salary: salary,
                        userName: UserName,
                        id : id
                    })
                        .then(() => {
                            setStatus('Job Posted Successfully.')
                        })
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
                                Enter All Job Details
                    </Text>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Job Title</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={27}
                                    onChangeText={(text) => setJobName(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Job Description</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setJobDescription(text)}
                                    keyboardType="email-address"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Skills Required</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={25}
                                    onChangeText={(text) => setSkills(text)}
                                    keyboardType="number-pad"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Minimum HSC marks</Label>
                                <Input
                                    autoCompleteType="off"
                                    maxLength={20}
                                    onChangeText={(text) => setEligiblity(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Job Location</Label>
                                <Input
                                    autoCompleteType="off"
                                    onChangeText={(text) => setAddress(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>

                            <Item floatingLabel
                                style={style.inp2}>
                                <Label>Job Expected Salary</Label>
                                <Input
                                    autoCompleteType="off"                                
                                    onChangeText={(text) => setSalary(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark" />
                            </Item>


                            <Button block success style={style.button3}
                                onPress={registerJob}>
                                <Text style={style.b1}>
                                    Post this job vacancie
                                 </Text>
                            </Button>

                        </View>
                    </ScrollView>
                </View>
            </View>

            <FooterCompany {...{ UserName: UserName }}/>
        </>
    );
};

export default AddJob;
