import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Posts from './Posts';
import LoadingBar from 'react-redux-loading';
import AddPost from './AddPost';
import PostPage from './PostPage';
import Nav from './Nav';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="container">
                        <Nav />
                        {this.props.loading
                            ? null
                            : <div>
                                <Route path="/" exact component={Posts} />
                                <Route path="/category/:id" exact component={Posts} />
                                <Route path="/post/:id" exact component={PostPage} />
                                <Route path="/new" exact component={AddPost} />
                            </div>}
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ categories }) {
    console.log(Object.keys(categories).length);
    return {
        loading: categories.constructor === Object && Object.keys(categories).length === 0
    }
}

export default connect(mapStateToProps)(App)