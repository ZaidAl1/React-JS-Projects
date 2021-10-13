import React from 'react';
import PropTypes from 'prop-types';

const ReposItem = ({repo}) => {
    return (
        <div>
     <h1>
            <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a> 
     
     </h1>
        </div>
    )
}

ReposItem.propTypes = {
    repos: PropTypes.object.isRequired,
}


export default ReposItem;