export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const SET_GENDER = 'SET_GENDER' 
export const SET_CATEGORY = 'SET_CATEGORY' 
export const SET_COLOR = 'SET_COLOR' 
export const SET_PRICE = 'SET_PRICE' 
export const SET_RATE = 'SET_RATE' 
export const OPEN_FILTER_PRODUCT = 'OPEN_FILTER_PRODUCT' 

export const GET_CURRENT_USER = "GET_CURRENT_USER" 


export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

export const closeSidebar = () => ({
  type: CLOSE_SIDEBAR
}); 

export const setGender = (genderProduct) => ({
  type: SET_GENDER,
  payload : genderProduct
}); 

export const setCategory = (categoryProduct) => ({
  type: SET_CATEGORY,
  payload : categoryProduct
}); 

export const setColor = (colorProduct) => ({
  type: SET_COLOR,
  payload : colorProduct
});

export const setPrice = (priceProduct) => ({
  type: SET_PRICE,
  payload : priceProduct
});

export const setRate = (rateProduct) => ({
  type: SET_RATE,
  payload : rateProduct
});

export const openFilterProduct = (boolean) => ({
  type: OPEN_FILTER_PRODUCT,
  payload : boolean
});

export const getCurrentUser = (user) => ({
  type: GET_CURRENT_USER,
  payload : user
});