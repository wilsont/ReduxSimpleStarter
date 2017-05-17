import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends React.Component {
    componentDidMount() {

            this.props.fetchPosts();

    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            const href = `/posts/${post.id}`;
            return (
                <li
                    key={post.id}
                    className="list-group-item"
                >
                    <Link to={href}>
                        {post.title}
                    </Link>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        add a post
                    </Link>
                </div>

                <h3>Posts</h3>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);