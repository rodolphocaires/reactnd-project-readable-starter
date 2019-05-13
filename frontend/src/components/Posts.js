import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import { Link } from 'react-router-dom';

class Posts extends Component {
    render() {
        const { posts } = this.props;

        console.log('Posts', posts);

        return (
            <div>
                <Categories></Categories>
                {posts.map((post) => (
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        posts: Object.values(posts)
    }
}

export default connect(mapStateToProps)(Posts);