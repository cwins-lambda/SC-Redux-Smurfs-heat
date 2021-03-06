import { FETCHING_SMURFS, SMURFS_FETCHED, ADDING_SMURF, SMURF_ADDED, ERROR, SMURF_DELETED, DELETING_SMURF, SMURF_UPDATED, UPDATING_SMURF } from '../actions';


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   smurfsFetched: false,
   addingSmurf: false,
   smurfAdded: false,
   updatingSmurf: false,
   smurfUpdated: false,
   deletingSmurf: false,
   smurfDeleted: false,
   error: null   
 }


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
      });
    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false,
        smurfsFetched: true
      });
    case ADDING_SMURF:
      return Object.assign({}, state, {addingSmurf: true});
    case SMURF_ADDED:
      return Object.assign({}, state, {
        smurfs: [...action.payload],
        addingSmurf: false,
        smurfAdded: true
      });
    case DELETING_SMURF:
      return Object.assign({}, state, {deletingSmurf: true});
    case SMURF_DELETED:
      return Object.assign({}, state, {
        smurfs: [...action.payload],
        deletingSmurf: false,
        smurfDeleted: true
      })
    case UPDATING_SMURF:
      return Object.assign({}, state, {updatingSmurf: true});
    case SMURF_UPDATED:
      return Object.assign({}, state, {
        smurfs: [...action.payload],
        updatingSmurf: false,
        smurfUpdated: true
      })
    default:
      return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
