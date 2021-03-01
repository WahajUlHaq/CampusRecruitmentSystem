import {StyleSheet} from 'react-native';
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
        marginTop: 30,
        marginBottom: 15,
        color: "#353535",
        fontSize: 23,
        fontWeight: 'bold',
    },
    f2:
    {
        color: "#353535",
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
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
        width: "100%",
        marginTop: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    button3:
    {
        backgroundColor: colors.buttonColor,
        width: "100%",
        marginTop: 20,
        borderRadius: 20,
        marginBottom: 15
    },
    b1:
    {
        fontSize: 18,
        color: "white"
    },
    // myMainDispayCont:
    // {
    //     marginLeft: 5,
    //     marginRight: -40,
    //     flex: 1,
    //     height: 70,
    //     flexDirection: 'row',
    //     width: "100%",
    //     backgroundColor: 'white',
    //     marginBottom: 10,
    //     borderBottomColor: '#D3D3D3',
    //     borderBottomWidth: 2,

    // },
    // button1:
    // {
    //     backgroundColor: colors.buttonColor,
    //     marginLeft: 'auto',
    //     marginRight: 10,
    //     marginTop: 10,
    //     paddingTop: 2,
    //     borderRadius: 10,
    //     height: "70%",
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 7,
    //     },
    //     shadowOpacity: 0.43,
    //     shadowRadius: 9.51,
    //     elevation: 8,
    // },
    // font1:
    // {
    //     paddingTop: 10,
    //     color: 'black',
    //     fontSize: 19,
        
    // },
    // button:
    // {
    //     backgroundColor: colors.buttonColor,
    //     marginLeft: 'auto',
    //     marginRight: 30,
    //     marginTop: 10
    // }
    myMainDispayCont:
    {
        marginLeft: 5,
        marginRight: -40,
        flex: 1,
        height: 70,
        flexDirection: 'row',
        width: "100%",
        backgroundColor: 'white',
        marginBottom: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 2,

    },
    button1:
    {
        backgroundColor: colors.buttonColor,
        marginLeft: 'auto',
        marginRight: 10,
        marginTop: 10,
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
    button:
    {
        backgroundColor: colors.buttonColor,
        marginLeft: 'auto',
        // marginRight: 30,
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 8,
    },
    btnText:{
        color: '#fff',
        fontWeight: 'bold'
    },
    font1:
    {
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black',
        fontSize: 18,
        width: "75%",
        fontWeight: '600',
        marginRight: 'auto'
    },
});