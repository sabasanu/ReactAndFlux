import React, { useEffect, useState } from 'react';
import { getCourses } from '../api/courseApi';

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then(c => setCourses(c));
  },[]);

  function renderRow(course) {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{courses.map(renderRow)}</tbody>
      </table>
    </>
  );
}
export default CoursesPage;