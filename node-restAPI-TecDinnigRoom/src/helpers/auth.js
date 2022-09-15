const helpers = {};

helpers.isAuthenticated = (req, res, next)  => {
    if(req.isAuthenticated()){
        return next();
    }
};

helpers.isNotAuthenticated = (req, res, next)  => {
    if(!req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg','You need to be logged out in order to access this section');
    res.redirect('/');
};

module.exports = helpers;