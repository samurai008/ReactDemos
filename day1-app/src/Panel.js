import React from 'react';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';

class Panel extends React.Component {
    render() {
        return (
            <div>
                <h3>Panel Component</h3>
                <EmployeeDetails />
            </div>
        )
    }
}

class Panel2 extends React.Component {
    render() {
        return (
            <div>
                <h3>Panel2 Component</h3>
            </div>
        )
    }
}

export {Panel, Panel2};