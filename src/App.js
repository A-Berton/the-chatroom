import React from 'react';
import { Grid} from '@material-ui/core';
import Header from './components/Header';
import CommentList from './components/CommentList';
import ContactList from './components/ContactList';
import { Provider } from 'react-redux'
import store from "./redux/store";
import './App.css';

function App(){
  return (
    <Provider store={store}>
      <div>
        <Header/>
          <div className="content">
            <Grid container className="chatSection">
              <ContactList/>
              <CommentList/>
            </Grid>
          </div>
      </div>
    </Provider>
  );
}

export default App;
