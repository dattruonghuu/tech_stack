
// how to create reducers:
// create a function will export it by default
// function contain single switch statement
// switch over actions type and decide whether or not want to respond to
// this particular action
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};