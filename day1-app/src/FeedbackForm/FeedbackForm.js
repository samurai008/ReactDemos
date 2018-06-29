import React from 'react'

const formStyle = {
    maxWidth: 460 + "px"
}

export default class FeedbackForm extends React.Component {

    constructor() {
        super();

        this.state = {
            name: '',
        }

    }

    render () {

        return (
            <div style={formStyle}>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="feedback">Feedback</label>
                        <textarea name="feedback" class="form-control"></textarea>
                    </div>

                    <button class="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )

    }

}