import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './ReposItem';

const Repos = ({ repos }) => {
    return repos.map( repos => <RepoItem repo={repos} key={repos.id} /> )
}

Repos.PropTypes={
    repos: PropTypes.array.isRequired,
}

export default Repos;