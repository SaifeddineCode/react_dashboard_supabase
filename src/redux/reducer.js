import { CLOSE_SIDEBAR, GET_CURRENT_USER, OPEN_FILTER_PRODUCT, SET_CATEGORY, SET_COLOR, SET_GENDER, SET_PRICE, SET_RATE, TOGGLE_SIDEBAR } from './actions';

const initialStateBar = {
  isSidebarOpen: false
};

const initialStateFilterProducts = {
  filterSideIsOpened : false,
  gender : [],
  category : "",
  colors : [],
  price : "",
  rating :""
}

export const initialCurrentUser = {
  currentUser : ""
}



 
export const sidebarReducer = (state = initialStateBar, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen
      };

    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen :false,
      }
    default:
      return state;
  }
};


export const filterProductReducer = (state = initialStateFilterProducts ,action) => {
  switch (action.type) {

    case OPEN_FILTER_PRODUCT: 
    return {
      ...state,
      filterSideIsOpened : action.payload
    } 
    case SET_GENDER:
      return {
        ...state,
        gender : action.payload
      }
    case SET_CATEGORY:
      return {
        ...state,
        category : action.payload
      }
      case SET_COLOR:
      return {
        ...state,
        colors : action.payload
      }
      case SET_PRICE:
      return {
        ...state,
        price : action.payload
      }
      case SET_RATE:
      return {
        ...state,
        rating : action.payload
      }

    default : return state
  }
}


export const currentLoggedInReducer = (state = initialCurrentUser,action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
}