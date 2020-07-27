import React from 'react';
import ProjectPage from './Page/ProjectPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Route path="/" component={ProjectPage}/>
  );
}

export default App;
