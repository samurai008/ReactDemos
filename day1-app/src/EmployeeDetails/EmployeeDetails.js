import React from 'react'

const CustomStyle = {
    padding: 10 + "px",
    margin: 20 + "px"
}

export default class EmployeeDetails extends React.Component {
    

    render() {
        return (
            <div style={CustomStyle}>
                <h4>John Doe</h4>
                <ul>
                    <li>23 yrs</li>
                    <li>Delhi</li>
                </ul>
            </div>
        )
    }
}