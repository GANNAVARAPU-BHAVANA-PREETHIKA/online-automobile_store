const about = (req, res) => {
    res.render('about-text', { title: 'About' });
};


module.exports = {
    about,
};