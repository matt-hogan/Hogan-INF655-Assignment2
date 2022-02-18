import React from "react";
import PropTypes from "prop-types";

export default function Task({ title }) {
    return(
        <div>
            {title}
        </div>
    )
}

Task.propTypes={
    title: PropTypes.string,
    // description: PropTypes.string,
    // id: PropTypes.number,
}