import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
      { title: 'no Scruns', duration: '4:05'},
      { title: 'Mac', duration: '3:05'},
      { title: 'wonderful', duration: '2:05'},
      { title: 'nuts', duration: '1:05'},
      
  ];  
};

const selectedSongReducer = (selectedSong = null, action) => {
  
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
}); 