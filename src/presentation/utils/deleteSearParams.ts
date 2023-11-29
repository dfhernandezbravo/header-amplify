const deleteSearParams = (keys: string[]) => {
  let url = new URL(window.location.href);
  keys.forEach((key) => {
    url.searchParams.delete(key);
  });

  return url;
};

export default deleteSearParams;
