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
import FooterCompany from '../../../component/footer/footerCompany/index'
function CompanyHome(props) {

    //const [companyName, setCompanyName] = useState(null)
    const { UserName } = props.route.params;

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
          
                    </Text>
                    <ScrollView
                        showsVerti jcalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>

                      <View>
                          <Text>
                              Company Home
                          </Text>
                      </View>

                    </ScrollView>


                </View>

            </View>
            <FooterCompany {...{ UserName: UserName }} />

        </>
    );
};

export default CompanyHome;