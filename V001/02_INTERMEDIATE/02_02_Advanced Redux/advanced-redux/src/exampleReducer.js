// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

// Define your initial state
const initialState = {
        data: [],
        loading: false,
        error: null,
      };
      
      // Define your reducer function
      const exampleReducer = (state = initialState, action) => {
        switch (action.type) {
          case 'FETCH_DATA_REQUEST':
            return {
              ...state,
              loading: true,
              error: null,
            };
          case 'FETCH_DATA_SUCCESS':
            return {
              ...state,
              data: action.payload,
              loading: false,
            };
          case 'FETCH_DATA_FAILURE':
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
          default:
            return state;
        }
      };
      
      export default exampleReducer;
      