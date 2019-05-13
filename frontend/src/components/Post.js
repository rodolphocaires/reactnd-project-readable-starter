import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Post extends Component {
    render() {
        const { post } = this.props;

        console.log('Post', post);

        return (

            <div>
                {post &&
                    <Fragment>
                        <h3>{post.title}</h3>
                        <p>by {post.author}</p>
                        <p>{post.body}</p>
                    </Fragment>
                }
            </div>
        )
    }
}

function mapStateToProps({ posts }, { id }) {
    console.log('id', id);
    console.log('posts', posts);
    return {
        post: Object.values(posts).find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post);