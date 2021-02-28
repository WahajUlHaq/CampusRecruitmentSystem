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
import { Button, Item, Input, Label, List, ListItem } from 'native-base';
import colors from '../../../config/colorsConfig/index';
import header from '../../../config/headerConfig/index';
import style from './style';
import FooterStudent from '../../../component/footer/footerStudent/index';

function ViewJob_User(props) {

    const { UserName } = props.route.params;
    const { id } = props.route.params;

    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [skills, setSkills] = useState(null)
    const [salary, setSalary] = useState(null)
    // const [email, setEmail] = useState(null)
    // const [number, setNumber] = useState(null)
    const [address, setAddress] = useState(null)

    useEffect(() => {

        database().ref("Jobs/" + id + "/").once('value')
            .then((snapshot) => {
                setTitle(snapshot.val().Title)
                setAddress(snapshot.val().Address)
                setSalary(snapshot.val().Salary)
                setSkills(snapshot.val().Skills)
                setDescription(snapshot.val().Description)


            })
            .catch((error) => { })
    }, []);

    const applyJob = () => {
        // database().ref('Students/' + window.userName + "/").update({

        //     StudentName: studentName,
           
        // })

        //     .then(() => {
        //         setStatus('Registered')
        //     })

        //     .catch((error) => {
        //         setStatus(error)

        //     })
        console.log('Wahaj')
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
                        Job Details
                    </Text>
                    <ScrollView
                        showsVerti jcalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <View>
                            <List>
                                <ListItem itemDivider >
                                    <Text style={style.f7}>Job Title:</Text>
                                </ListItem>

                                <ListItem>
                                    <Text style={style.f8}>{title}</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Text style={style.f7}>Description:</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{description}</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Text style={style.f7}>Skills Required:</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{skills}</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Text style={style.f7}>Starting / Total Salary:</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{salary}</Text>
                                </ListItem>
                                {/* <ListItem itemDivider>
                                    <Text style={style.f7}>Company Email Id:</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>abc@abc.com </Text>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Text style={style.f7}>Company Telephone Number:</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>+00023213423</Text>
                                </ListItem> */}
                                <ListItem itemDivider>
                                    <Text style={style.f7}>Company Address:</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{address}</Text>
                                </ListItem>
                            </List>

                            <Button block warning style={style.button2}
                                onPress={() => applyJob()}
                            >
                                <Text style={style.b1}>
                                    Apply fot this post
                                </Text>
                            </Button>


                        </View>
                    </ScrollView>
                </View>
            </View>

            <FooterStudent {...{ UserName: UserName }} />

        </>
    );
};
export default ViewJob_User;