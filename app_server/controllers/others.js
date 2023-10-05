const about = (req, res) => {
    res.render('about-text', { title: 'About' });
};

/* GET 'signin' page */
const signin = (req, res) => {
    res.render('signin', { title: 'signin' });
  };
  /* GET 'register' page */
const register = (req, res) => {
    res.render('register', { title: 'register' });
  };

module.exports = {
    about,
    register,
    signin
};