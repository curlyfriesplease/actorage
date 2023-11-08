export const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://develop.d1rjna21ytrvho.amplifyapp.com/';

  return base_url;
};
