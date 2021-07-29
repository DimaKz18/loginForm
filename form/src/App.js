import {Provider} from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from "./redux/redux-store";
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
          <Switch >
              <Route exact path='/' render={() => <Login />}/>
              <Route path='/main' render={() => <MainPage />}/>
          </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
