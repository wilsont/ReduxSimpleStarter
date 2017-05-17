import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

    renderField = (field) => {
        const { meta: { touched, error} } = field;
        const css = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={css}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                 {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        //console.lxxog(values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
               <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                   <Field
                       name="title"
                       label="Title"
                       component={this.renderField}
                   />
                   <Field
                       name="tags"
                       label="Tags"
                       component={this.renderField}
                   />
                   <Field
                       name="content"
                       label="Content"
                       component={this.renderField}
                   />
                   <button type="submit" className="btn btn-primary">Submit</button>
               </form>
                <div className="text-xs-right">
                    <Link to="/posts" className="btn btn-danger">
                        back
                    </Link>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate,
})(
    connect(null, { createPost })(PostsNew)
);