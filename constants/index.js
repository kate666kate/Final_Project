// 从环境变量或者安全存储获取敏感信息
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// 判断当前环境是生产环境还是开发环境
const isProduction = process.env.NODE_ENV === 'production';

// 设置不同环境下的 redirectURI
const redirectURI = isProduction
  ? "https://spotify-next.herokuapp.com/spotify"
  : "http://localhost:8080/spotify";

// 设置 Spotify Web API 授权链接
const spotifyWebApiURL = `https://accounts.spotify.com/authorize/?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes}`;

// 其他 Spotify API 请求的 URL
const spotifyProfileURL = "https://api.spotify.com/v1/me?access_token=";
const spotifyPlaylistURL = "https://api.spotify.com/v1/me/playlists?access_token=";
const spotifySearchURL = "https://api.spotify.com/v1/search?q=";
const spotifyArtistURL = "https://api.spotify.com/v1/artists/";
const spotifyAlbumURL = "https://api.spotify.com/v1/albums/";

// 导出需要的变量或者函数
export { clientID, clientSecret, spotifyWebApiURL, spotifyProfileURL, spotifyPlaylistURL, spotifySearchURL, spotifyArtistURL, spotifyAlbumURL };
