import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';


class PostPage extends Component {
    render() {
        const { id } = this.props;

        return (
            <Post id={id}></Post>
        )
    }
}

function mapStateToProps({ }, props) {
    const { id } = props.match.params;

    return {
        id
    }
}

export default connect(mapStateToProps)(PostPage);