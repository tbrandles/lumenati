//  *********************************   //
//  *                               *   //
//  *         SERVER ROUTES         *   //
//  *                               *   //
//  *********************************   //
// console.log('Server>Config>routes.js is running!!'.blue);

var users = require('../controllers/users.js');
var markers = require('../controllers/markers.js');
var groups = require('../controllers/groups.js');

module.exports = function(app) {

    app.post('/register', users.register);
    app.post('/login', users.login);
    app.use(userAuth);

    // Single User
    app.post('/logout', users.logout);
    app.get('/user', users.sessionUser);
    app.post('/marker/new', markers.add);
    app.get('/marker/show/all', markers.show_all);
    app.get('/marker/show/filter/food', markers.filter_food);

    // Groups
    app.post('/group/new', groups.create);
    app.post('/group/join', groups.join);
    app.get('/group/lastmarker/:_id', groups.lastmarker)
    app.post('/marker/group/new/:_id', markers.addGroupMarker);
    app.get('/marker/group/show/all/:_id', markers.show_group_all);

};

// ESTABLISHING MIDDLEWARE FUNCTION
function userAuth(req,res,next){
    if(req.session.user){
        // console.log(req.session.user);
        next();
    } else {
        res.sendStatus(401);
    }
}
