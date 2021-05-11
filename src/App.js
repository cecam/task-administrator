import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ProjectProvider from './context/projectContext'
import TaskProvider from './context/taskContext'
import AlertProvider from './context/alertContext'

import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import Layout from './components/layout/Layout'

function App() {
  return (
    <AlertProvider>
      <ProjectProvider>
        <TaskProvider>
          <Router>
            <Layout>
                <Switch>
                  <Route path="/:id" component={ProjectPage}>
                  </Route>
                  <Route exact path="/" component={HomePage}>
                  </Route>
                </Switch>
            </Layout>
          </Router>
        </TaskProvider>
      </ProjectProvider>
    </AlertProvider>
  );
}

export default App;
