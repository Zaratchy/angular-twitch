const apiConfig = {
  clientId: 'o50um5ug9w4rkpypabkglf8hvsd2b9',
  authUrl: 'https://id.twitch.tv/oauth2/authorize',
  redirectUrl: 'http://localhost:4200/auth/authorize',
  baseUrl: 'https://api.twitch.tv/helix',
};

const oAuthConfig = {
  authLink: `${apiConfig.authUrl}?client_id=${apiConfig.clientId}&response_type=token&redirect_uri=${apiConfig.redirectUrl}`
};

export const environment = {
  production: false,
  api: {...apiConfig, ...oAuthConfig},
  twitch: {
    streamPlayerUrl: 'https://player.twitch.tv/?parent=localhost&channel=',
    clipPlayerUrl: 'https://clips.twitch.tv/embed?parent=localhost&clip=',
    videoPlayerUrl: 'https://videos.twitch.tv/embed?parent=localhost&video=',
    chatUrl: 'https://www.twitch.tv/embed/[USERNAME]/chat?parent=localhost',
  }
};
