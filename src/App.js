import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/addStudent';
import AddTeacher from './Components/addTeacher';
import EditStudent from './Components/editStudent';
import EditTeacher from './Components/editTeacher';
import HomePage from './Components/home';
import StudentDetails from './Components/studentDetails';
import TeacherDetails from './Components/teacherDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route  path="/student/add">
          <AddStudent/>
        </Route>
        <Route  path="/student/edit/:id">
          <EditStudent/>
        </Route>
        <Route  path="/student">
          <StudentDetails/>
        </Route>



        <Route  path="/teacher/add">
          <AddTeacher/>
        </Route>
        <Route  path="/teacher/edit/:id">
          <EditTeacher/>
        </Route>
        <Route  path="/teacher">
          <TeacherDetails/>
        </Route>
        

        

      </Switch>
      
    </div>
  );
}

export default App;
