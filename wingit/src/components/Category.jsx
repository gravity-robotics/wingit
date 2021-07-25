import React from 'react';

function Category(props) {
    return (
        <div className="category-link wobble-vertical-on-hover">
          <a href={"#" + props.title}className="category">{props.title}</a>
        </div>
        );

}

export default Category;