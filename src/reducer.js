export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null
  // token:
  //   "BQAiGal2aQ1fIHLGZI3NWu7ZxNvVavq4KbUxm7w0mDlw3R_zSykGl8h-s4kHVrcEhMfXqam0D-WypKBR8NxSpZqWq-xDah9JeLI77kk-Yper4-CVLqFRcYKjSKSQCLGErCt2BfZctKNHx4UoJoqhaV7v87b7fD89CxL5ctEccM28GoN_"
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };
    default:
      return state;
  }
};
export default reducer;
