import React, { useEffect, useState } from 'react';
import { getCourses } from '../api/courseApi';
import CoursesList from './CoursesList';

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then(c => setCourses(c));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CoursesList courses={courses}></CoursesList>
    </>
  );
}
export default CoursesPage;
