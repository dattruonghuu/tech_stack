
// action creator has 1 job
// create action:
// plain JS functions that return actions
export const selectLibrary = (libraryId) => {
  return {
    // have type and payload
    // type: command or instruct to reducer
    type: 'select_library',
    payload: libraryId
  };
};