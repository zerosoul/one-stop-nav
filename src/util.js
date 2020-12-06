const getPrefixPath = (url) => {
  let iconPrefix = '';
  try {
    let urlObj = new URL(url);
    iconPrefix = `${urlObj.origin}${urlObj.pathname}`.endsWith('/') ? url : `${url}/`;
  } catch (error) {
    console.log({ error });
  }
  return iconPrefix;
};

export { getPrefixPath };
