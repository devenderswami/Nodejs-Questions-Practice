const jwt = require('jsonwebtoken');

const secretkey = "2b2e9a9d1f6b4c7a8d0f3e5c8b1e2a4f";

function authenticationMiddleware(req, res, next) {

    // Extract the JWT token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

     // If token is not present, return 401 Unauthorized
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

    // Verify the JWT token
    jwt.verify(token,secretkey,(err,user)=>{
        if(err){
            // If token is invalid, return 403 Forbidden
            return res.status(403).json({ message: 'Forbidden' });
        }

    // If token is valid, attach the user object to the request and call the next middleware
    req.user = user;
    next();



    })


  }

  module.exports = authenticationMiddleware;
