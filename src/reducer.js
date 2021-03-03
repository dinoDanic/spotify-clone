export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after develpoing !!!!!!
  // token: null,
  //"BQDlGmtXZ1-RtQj8peGPuoqvCl_5lYmigtIj26q6bJb7pZlYc5-g9ohguD-OopXiouoUfrE5kJoJQIH0Q7xsBAxZp_enoeE9K3qZyMhQ9IjdWHUozAA8z6DF7uFe-GfkWUKB132bJO2yfXdMAAJd0b1mYBZrlxtAripxOX3wLLbgdv64OsQh",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
