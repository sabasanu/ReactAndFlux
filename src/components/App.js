import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CoursesPage from './CoursesPage';
import PageNotFound from './PageNotFound';
import ManageCoursePage from "./ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
