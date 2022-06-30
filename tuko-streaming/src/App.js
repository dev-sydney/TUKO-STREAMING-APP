import './App.scss';
import HomeComponent from './components/HomeComponent';
import SearchResultsContainer from './components/header/searchContainer/SearchResultsContainer';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import store from './Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App" style={{ width: '100%' }}>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route
              style={{ width: '100%' }}
              exact
              path="/search"
              component={SearchResultsContainer}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
