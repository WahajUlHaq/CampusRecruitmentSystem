import { StyleSheet } from 'react-native';
import colors from '../../../config/colorsConfig/index';

export default StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    subContainer1:
    {
        width: "100%",
        height: "25%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer2:
    {
        height: "75%",
        width: "100%",
        borderTopLeftRadius: 23,
        borderTopEndRadius: 23,
        backgroundColor: colors.innerBoxColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer2_1:
    {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg:
    {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
    },
    img: {
        width: "100%",
        height: "100%"
    },
    inp1:
    {
        marginBottom: 10,
        marginTop: 22
    },
    inp2:
    {
        marginBottom: 10,
    },
    t1:
    {
        fontSize: 30,
        fontWeight: 'normal',
        color: "white",

    },
    t2:
    {
        fontSize: 30,
        fontWeight: 'normal',
        color: "white"
    },
    f3:
    {
        marginTop: 20,
        marginBottom: 10,
        color: colors.textColorInsideBox_Heading,
        fontSize: 23,
        fontWeight: 'bold',
    },
    f7:
    {
        color: colors.buttonColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
    f8:
    {
        color: colors.textColorInsideBox_Heading,
        fontSize: 16,
    },
    button1:
    {
        backgroundColor: colors.buttonColor,
        width: "100%",
        borderRadius: 20,
    },
    button2:
    {
        backgroundColor: colors.buttonColor,
        width: "60%",
        marginTop: 20,
        borderRadius: 20,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    button3:
    {
        backgroundColor: colors.buttonColor,
        width: "100%",
        marginTop: 20,
        borderRadius: 20,
        marginBottom: 15,
    },
    b1:
    {
        fontSize: 18,
        color: "white"
    },
    button1:
    {
        backgroundColor: colors.buttonColor,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "50%",
        marginTop: 20,
        marginBottom: 40,
        paddingTop: 2,
        borderRadius: 10,
        height: "70%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 8,
    },
});