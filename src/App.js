// import IndexRoute from "./router/Index";
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Login from './views/login/Login'
import AppMain from './components/AppMain'
import './App.css'
function App() {
  return (
    // <IndexRoute></IndexRoute>
    <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={()=>{
            return(
              localStorage.getItem('token')?
              <AppMain />:
              <Redirect to='/login' />
            )
          }} />
        </Switch>
    </HashRouter>
  );
}

export default App;

/**
 * <Route path="/login" component={Login} />
 * Route中component展示组件的,在函数组件可以直接使用props
 * 如果用render 展示组件的，在函数组件需要使用withRouter包裹
 */
