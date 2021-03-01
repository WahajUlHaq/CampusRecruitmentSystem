import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import color from '../colorsConfig/index'
import Login from '../../screens/Authentication/index';
import StudentRegister from '../../screens/Registeration/student/index';
import CompnayRegister from '../../screens/Registeration/company/index';
import StudentHome from '../../screens/Home/Student/index';
import CompanyHome from '../../screens/Home/Company/index';
import AddJob from '../../screens/Add Job/index';
import Application_User from '../../screens/Application/Student';
import ViewJob_User from '../../screens/ViewJob/Students';
import StudentProfile from '../../screens/StudentProfile/index';
import AllStudents from '../../screens/Application/AllUsers';

// import AllJobs_Student from '../../screens/Jobs/index'
const Stack = createStackNavigator();

function Navigation(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen hideNavBar={true} name="Login" component={Login}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
              height: 0
            },
            headerTintColor: '#3250ce',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen hideNavBar={true} name="CompanyRegister" component={CompnayRegister}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: color.headerColor,
              height: 40
            },
            headerTintColor: color.headerArrowColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />


        <Stack.Screen hideNavBar={true} name="StudentRegister" component={StudentRegister}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: color.headerColor,
              height: 40
            },
            headerTintColor: color.headerArrowColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen hideNavBar={true} name="StudentHome" component={StudentHome}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: color.headerColor,
              height: -10
            },
            headerTintColor: '#3250ce',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen hideNavBar={true} name="CompanyHome" component={CompanyHome}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: color.headerColor,
              height: -10
            },
            headerTintColor: '#3250ce',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen hideNavBar={true} name="AddJob" component={AddJob}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: color.headerColor,
              height: -10
            },
            headerTintColor: '#3250ce',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen hideNavBar={true} name="Application_User" component={Application_User}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: color.headerColor,
              height: -10
            },
            headerTintColor: '#3250ce',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen hideNavBar={true} name="ViewJob_User" component={ViewJob_User}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: color.headerColor,
              height: -10
            },
            headerTintColor: '#3250ce',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen hideNavBar={true} name="StudentProfile" component={StudentProfile}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: color.headerColor,
              height: -10
            },
            headerTintColor: '#3250ce',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen hideNavBar={true} name="AllStudents" component={AllStudents}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: color.headerColor,
              height: -10
            },
            headerTintColor: '#3250ce',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
} 
Application_User

export default Navigation;



