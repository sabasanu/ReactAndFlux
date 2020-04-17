import React from 'react';

const ManageCoursePage = props => (
  <>
    <h2>Manage course</h2>
    {props.match.params.slug}
  </>
);

export default ManageCoursePage;