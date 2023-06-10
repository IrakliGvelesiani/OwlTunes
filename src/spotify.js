// https://developers.spotify.com/
// https://developer.spotify.com/documentation/web-playback-sdk

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://owltunes.netlify.app/";

const clientId = "59ca426a641e46efa6369c7fdee86f73";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const signinUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
