import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Title from './shared/Title';
import Loader from './shared/Loader';
import Layout from './shared/Layout';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import contactsOperations from './redux/contacts/contactsOperations';
import contactsSelectors from './redux/contacts/contactsSelectors';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import { authOperations } from './redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((route, idx) => {
              return route.private ? (
                <PrivateRoute key={idx} {...route} />
              ) : (
                <PublicRoute
                  key={idx}
                  {...route}
                  restricted={route.restricted}
                />
              );
            })}
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);