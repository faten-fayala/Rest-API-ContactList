import { GET_CONTACT } from '../Actions/type';


const initialState= { contact:[]
};


const ContactReducer = ( state = initialState , action) => {

    switch(action.type){
        case GET_CONTACT : 
        return {
          ...state,
          contact: action.payload
        };
        
        
        default : return state ;
    }

}
export default ContactReducer;