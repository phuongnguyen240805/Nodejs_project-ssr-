
class SiteController {

    // [GET]: /
    index(req, res) {
        res.render('home', {
            layout: 'main',
            title: 'Home Page',
        });
    };

    // [GET]: /signup
    signup(req, res) {
         res.render('signup', {
            layout: 'main',
            title: 'SignUp Page',
        });
    };
};

module.exports = new SiteController;
