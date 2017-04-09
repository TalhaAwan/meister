'use strict';

// const Page = require ( './page.model').model;
const config = require ( '../../config/environment');
const Controller = {};

/**
 * Creates a new page
 */
 Controller.create = function (req, res) {
    var page = {
        pageLayout: req.body.pageLayout,
        title: req.body.title,
        createdBy: req.user._id
    };

    Page.create(page, function(err, result){
        if(err){
            res.status(500).json(err);
        }
        else{
            res.redirect(req.get('referer'));
        }
    })
};


Controller.submitContactMessage = function(req, res){

    req.flash("contactSuccessMessage", "Your Message Has Been Sent Successfully");
    res.redirect('/contact');

}


Controller.home = function(req, res){

  res.render('page/home', {
    title: "Home"
});
}


Controller.about = function(req, res){

  res.render('page/about', {
    title: "About"
});
}

Controller.contact = function(req, res){
  res.render('page/contact', {
    title: "Contact",
    successMessage: req.flash('contactSuccessMessage')
});
}

module.exports = Controller;
