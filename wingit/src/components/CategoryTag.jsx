import React from 'react';

function CategoryTag(props) {
    return (
        <div className="category-link wobble-vertical-on-hover">
          <a href={"#" + props.title}className="category">{props.title}</a>
        </div>
        );

}

export default CategoryTag;