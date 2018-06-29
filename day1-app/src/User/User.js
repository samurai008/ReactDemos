import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <img src={this.props.imgUrl} width="200" height="200" className="img-thumbnail" />
                </div>
                <div>
                    <span>{this.props.name}</span>
                </div>
            </div>
        )
    }
}

User.defaultProps = {
    name: "anonymous",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
}

export default User;