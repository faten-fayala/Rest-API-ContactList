import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import ContactList from "./contactlist";
import AddContact from "./AddContact";
import EditContact from "./EditContact";

import store from "./store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path="/" component={App} />
      <Route exact path="/get_contact" component={ContactList} />
      <Route exact path="/update_contact/:id" component={EditContact}/>
       <Route exact path="/new_contact" component={AddContact}/> 
      
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
