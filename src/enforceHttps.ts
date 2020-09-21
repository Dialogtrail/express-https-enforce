
const enforceHttps = (whitelist: string[] = []) => (req, res, next) => {
  const isSecure = checkRequest(whitelist, req);
  if (isSecure) {
    next();
  } else {
    redirectToHttps(req, res);
  }
};

const checkRequest = (whitelist: string[], req) => {
  if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
    return true;
  } else if (whitelist.includes(process.env.NODE_ENV)) {
    return true;
  }
  return false;
};

const redirectToHttps = (req, res) => {
  if (req.method === 'GET') {
    res.redirect(301, 'https://' + req.headers.host + req.originalUrl);
  } else {
    res.status(403).send('Please use HTTPS when submitting data to this server.');
  }
};

export { enforceHttps };
