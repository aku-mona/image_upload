import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch ,Route, Redirect} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <>
   <Router>
      <Navbar/>
      <Switch>
        <Route path='/register' component={Register} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/upload' component={FileUpload}/>
        <Route render={() => <Redirect to="/login" />} />
        {/* <Route path="*" component={Register} /> */}
      </Switch>
   </Router>
   </>
  );
}

export default App;
