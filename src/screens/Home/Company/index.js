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
    Picker,
    FlatList
} from 'react-native';


import database from '@react-native-firebase/database';
import app from '@react-native-firebase/app';
import { Button, Item, Input, Label, Card,  CardItem } from 'native-base';
import colors from '../../../config/colorsConfig/index';
import header from '../../../config/headerConfig/index';
import style from './style';
import FooterCompany from '../../../component/footer/footerCompany/index'
function CompanyHome(props) {

    //const [companyName, setCompanyName] = useState(null)
    const { UserName } = props.route.params;

    const [Alldata, setData] = useState([])
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        database().ref("/").child("Companies/" + UserName + "/Applications/").on("child_added", (result) => {
            Alldata.push(result.val());
            setJobs(Alldata);
        })
    }, []);

    const moreInfo = (e, a) => {
        props.navigation.navigate("StudentProfile", { UserName: UserName, id: e, studentUserName: a })
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
                        Job Applications
                    </Text>

                    <ScrollView
                        showsVerti jcalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <FlatList
                            data={jobs}
                            key={jobs.key}
                            renderItem={(data) => {
                                return (
                                    <Card>
                                    <CardItem>
                                        <Text style={style.font1}>
                                            {data.item.StudentName} &nbsp;
                                            <Text style={{color: colors.textColorInsideBox_SubHeading, fontSize: 15}}>
                                             ({data.item.StudentTitle})
                                        </Text>
                                        </Text>
                                        <Button style={style.button} onPress={() => moreInfo(data.item.JobID,data.item.StudentID)}>
                                            <Text style={style.btnText}>More Info</Text>
                                        </Button>
                                    </CardItem>
                                </Card>
                                   
                                )
                            }}
                            keyExtractor={users => users.id} />

                        {/* // <View>
                                    //     <View style={style.myMainDispayCont}>
                                    //         <Text style={style.font1}>{data.item.StudentName}{"\n"}
                                    //             <Text style={{ fontSize: 17, paddingTop: 18, color: colors.buttonColor }}>
                                    //                {data.item.JobTitle}
                                    //             </Text>
                                    //         </Text>
                                    //         <Button style={style.button} block success>
                                    //         </Button>
                                    //         <TouchableOpacity
                                    //             style={style.button1}
                                    //             onPress={() => moreInfo(data.item.JobID,data.item.StudentID)}
                                    //             activeOpacity={0.9}>
                                    //             <Text
                                    //                 style={{ height: "80%", paddingTop: 12, paddingLeft: 12, paddingRight: 10, color: 'white', fontWeight: 'bold' }}>
                                    //                 More Info
                                    // </Text>
                                    //         </ TouchableOpacity>

                                    //     </View>
                                    // </View> */}

                    </ScrollView>
                </View>

            </View>
            <FooterCompany {...{ UserName: UserName }} />

        </>
    );
};

export default CompanyHome;