import {Provider} from 'react-redux'
import store from '../../redux/store/store'
import NavigationBar from '../Navigation/Navigation';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Mainpage from '../Mainpage';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import Game from '../Game/Game';
 

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <div >
          <NavigationBar />

          <Switch>

          <Route exact path="/" >
            <Mainpage />
          </Route>
          <Route exact path="/registration" >
            <Registration />
          </Route>
          <Route exact path="/login" >
            <Login />
          </Route>
          <Route exact path="/game" >
            <Game />
          </Route>
          </Switch>
        </div>

    <div className="App">
    </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
