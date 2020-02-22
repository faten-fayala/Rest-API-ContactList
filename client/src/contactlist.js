import React, { Component } from "react";
import { connect } from "react-redux";
import ContactItem from "./contactitem";
import { getcontact } from "./Actions/contactAction";
class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
      this.props.getcontact()
  }
  render() {
    return (<div>
      <div  className="contact_list_page">
        <h1 className="title">CONTACT LIST PAGE</h1>
        <div className="contact_description">
          {this.props.contacts.contact.map(el => (
          <ContactItem contact={el} />
        ))}
        </div>
        
      </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.ContactReducer
  };
};
export default connect(mapStateToProps, { getcontact })(ContactList);
