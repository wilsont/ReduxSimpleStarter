import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsShow extends React.Component {
    componentDidMount() {
        if (!this.props.post) {
            const {id} = this.props.match.params;

            this.props.fetchPost(id);
        }
    }

    onDeleteClick() {
        const {id} = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <div>loading</div>;
        }

        return (
            <div>
                <div className="text-xs-right">

                    <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
                        Delete
                    </button>

                    <Link to="/" className="btn btn-primary">
                        Back
                    </Link>
                </div>


                {post.title}


            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    console.log(ownProps.match.params.id);
    console.log(posts);

    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);