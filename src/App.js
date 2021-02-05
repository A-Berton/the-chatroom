import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns} from 'react-bulma-components';
import Header from './components/Header';
import CommentList from './components/CommentList';
import ContactList from './components/ContactList';
import { Provider } from 'react-redux'
import store from "./redux/store";
import './App.css';

function App(){
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
          <Columns>
            <ContactList/>
            <CommentList/>
          </Columns>
      </div>
    </Provider>
  );
}

export default App;
