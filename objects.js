var playlist = {};

playlist = { artist : 'song' };


function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName]:'songTitle'});
}
