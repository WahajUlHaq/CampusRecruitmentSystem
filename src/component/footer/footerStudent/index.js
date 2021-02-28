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

function FooterStudent(props) {

    const navigation = useNavigation();

    // const backToLogin = () => {
    //     navigation.navigate("Login")
    // }
    // const home = () => {
    //     navigation.navigate("HomeScreen")
    // }
    const toHome = () => {
        navigation.navigate("StudentHome",  { UserName: props.UserName })
    }
    const toApplication = () => {
        navigation.navigate("Application_User",  { UserName: props.UserName })
    }
    const toLogin = () => {
        navigation.navigate("Login")
    }
    return (

        <Footer style={styles.bg}>
            <FooterTab>

                <Button style={styles.bg} vertical active
                    onPress={() => toHome()}
                >
                    <Icon active name="home" />
                    <Text>All Jobs</Text>
                </Button>

                <Button vertical style={styles.bg} active
                    onPress={() => toApplication()}
                >
                    <Icon active name="person" />
                    <Text>Applications</Text>
                </Button>

                <Button vertical style={styles.bg} active
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
export default FooterStudent;