import React, { useEffect } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,

    StatusBar,
    Image
} from 'react-native';

import colors from '../../../config/colorsConfig/index'

function FooterCompany(props) {

    const navigation = useNavigation();

    // const backToLogin = () => {
    //     navigation.navigate("Login")
    // }
    // const home = () => {
    //     navigation.navigate("HomeScreen")
    // }
    const toAddJob = () => {
        navigation.navigate("AddJob",  { UserName: props.UserName })
    }
    const toApplication = () => {
        navigation.navigate("CompanyHome",  { UserName: props.UserName })
    }
    const toLogin = () => {
        navigation.navigate("Login")
    }
    const toAllStd = () => {
        navigation.navigate("AllStudents", { UserName: props.UserName })
    }
    return (

        <Footer style={styles.bg}> 
            <FooterTab style={styles.bg}>

                <Button style={styles.bg} vertical active
                    onPress={() => toAddJob()}
                >
                    <Icon active name="add" />
                    <Text>Add</Text>
                </Button>

                <Button style={styles.bg} vertical active
                    onPress={() => toApplication()}
                >
                    <Icon active name="book" />
                    <Text>Requests</Text>
                </Button>

                <Button style={styles.bg} vertical active
                    onPress={() => toAllStd()}
                >
                    <Icon active name="person" />
                    <Text>Students</Text>
                </Button>

                <Button style={styles.bg} vertical active
                    onPress={() => toLogin()}
                >
                    <Icon name="speedometer" />
                    <Text>Logout</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
}

const styles = StyleSheet.create({
    bg:
    {
        backgroundColor: colors.footerColor
    },
});
export default FooterCompany;