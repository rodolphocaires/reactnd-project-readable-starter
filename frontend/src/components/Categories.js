import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class Categories extends Component {
    render() {
        const { categories } = this.props;

        return (
            <div className="categories-container">
                {categories.map((category, id) => (
                    <NavLink key={id} to={`/category/${category.path}`}>{category.name}</NavLink>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ categories }) {
    return {
        categories: Object.values(categories)
    }
}

export default connect(mapStateToProps)(Categories);