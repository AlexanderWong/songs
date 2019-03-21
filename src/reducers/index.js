import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Black Hole Sun", duration: "5:19" },
    { title: "Black", duration: "5:43" },
    { title: "Rooster", duration: "6:14" },
    { title: "Lithium", duration: "4:17" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
