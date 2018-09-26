import React from 'react';
import { Scence, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scence key="auth">
                <Scence 
                    key="login"
                    component={LoginForm}
                    title="Please Login"
                /> 
            </Scence>

            <Scence key="main">
                <Scence 
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                />

                <Scence key="employeeCreate" component={EmployeeCreate} title="Employees" />
                <Scence key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
            </Scence>
        </Router>
    );
};

export default RouterComponent;
