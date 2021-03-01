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
import colors from '../../config/colorsConfig/index';
import header from '../../config/headerConfig/index';
import style from './style';
import FooterStudent from '../../component/footer/footerStudent/index';
import FooterCompany from '../../component/footer/footerCompany';

function StudentProfile(props) {

    const { UserName } = props.route.params;
    const { id } = props.route.params;
    const { studentUserName } = props.route.params;


    // const [userName, setuserName] = useState(null)

    const [studentname, setName] = useState(null)
    const [emailId, setEmail] = useState(null)
    const [telephoneNumber, setTelephoneNumber] = useState(null)
    const [title, setTitle] = useState(null)
    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)

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


    useEffect(() => {
        database().ref('/Students/' + studentUserName + "/").once('value')
            .then((snapshot) => {
            
                setSchoolName(snapshot.val().SSCSchoolName)
                setSscPassingYear(snapshot.val().SSCPassingYear)
                setSscScoredMarks(snapshot.val().SSCScoredMarks)

                setCollageName(snapshot.val().HSCCollageName)
                setHscPassingYear(snapshot.val().HSCPassingYear)
                setHscScoredMarks(snapshot.val().HSCScoredMarks)

                setUniversityName(snapshot.val().UniversityName)
                setProgram(snapshot.val().Program)
                setUniversityPassingYear(snapshot.val().UniversityPassingYear)
                setUniversityScoredCGPA(snapshot.val().UniversityScoredCGPA)

                setName(snapshot.val().StudentName)
                setEmail(snapshot.val().StudentEmailId)
                setTelephoneNumber(snapshot.val().StudentPhone)
                setTitle(snapshot.val().StudentTitle)
                setCountry(snapshot.val().StudentCountry)
                setCity(snapshot.val().StudentCity)
  
            })
            .catch((error)=>{
                alert('Error Fetching Data')
            })

    }, []);

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
                      Student Profile Details
                    </Text>
                    <ScrollView
                        showsVerti jcalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <View>
                            <List>
                                <ListItem itemDivider >
                                    <Text style={style.f7}>Student Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{studentname}</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Text style={style.f7}>StudentTitle:</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{title}</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Text style={style.f7}>Student Email Id:</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{emailId}</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Text style={style.f7}>Student Phone Number:</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{telephoneNumber}</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Text style={style.f7}>Student Country / City</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{country + ", " + city}</Text>
                                </ListItem>
        
                                <ListItem itemDivider>
                                    <Text style={style.f7}>SSC School Name</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{schoolName}</Text>
                                </ListItem>
                               
                                <ListItem itemDivider>
                                    <Text style={style.f7}>SSC Passing Year</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{sscPassingYear}</Text>
                                </ListItem>

                                <ListItem itemDivider>
                                    <Text style={style.f7}>SSC Scored Marks</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{sscScoredMarks}</Text>
                                </ListItem>

                                <ListItem itemDivider>
                                    <Text style={style.f7}>Student Collage Name</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{collageName}</Text>
                                </ListItem>

                                <ListItem itemDivider>
                                    <Text style={style.f7}>Student School Name</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{schoolName}</Text>
                                </ListItem>

                                <ListItem itemDivider>
                                    <Text style={style.f7}>HSC Passing Year</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{hscPassingYear}</Text>
                                </ListItem>

                                <ListItem itemDivider>
                                    <Text style={style.f7}>HSC Scored Marks</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{hscScoredMarks}</Text>
                                </ListItem>

                                <ListItem itemDivider>
                                    <Text style={style.f7}>Student University Name</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{universityName}</Text>
                                </ListItem>

                                <ListItem itemDivider>
                                    <Text style={style.f7}>Student Selected Program</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{program}</Text>
                                </ListItem>

                                <ListItem itemDivider>
                                    <Text style={style.f7}>University Scored CGPA</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{universityScoredCGPA}</Text>
                                </ListItem>

                                <ListItem itemDivider>
                                    <Text style={style.f7}>University Passing Year</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={style.f8}>{universityPassingYear}</Text>
                                </ListItem>

                            </List>

                        </View>
                    </ScrollView>
                </View>
            </View>

            <FooterCompany {...{ UserName: UserName }} />

        </>
    );
};
export default StudentProfile;