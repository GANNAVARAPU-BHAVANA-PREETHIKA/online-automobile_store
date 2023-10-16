const main = (req,res) => {
    res.render('main',{
        title: 'AUTOMOBILES',
        pageHeader:{
        title : 'S³',
        strapline : 'Sai Enterprises !'}})
    };

const homelist = (req,res) => {
    res.render('home',{
        title: 'AUTOMOBILES',
        pageHeader:{
            title : 'S³',
            strapline : 'Sai Enterprises !'
        },
        tyres: [{
            name : 'Tyres',
            facilities : ['Cars' , 'Bikes' , 'Trucks' ]

        }],
        engineoils : [{
            name : 'Engine oils',
            facilities : ['Castrol', 'Servo','Mobil Super']
        }], 
        spareparts : [{
            name : 'Spare Parts', 
            facilities : ['Break pads' , 'Chains' , 'Break Levers' , 'Batteries' , ' Chain lubricants' ]
        }]
    });
};
const tyresinfo = (req,res) => {
    res.render('tyresinfo', {title : 'Tyres'});
};
const oilsinfo =(req,res) => {
    res.render('oilsinfo' , {title : 'Engine oils'});
};
const spareinfo =(req,res) => {
    res.render('spareinfo' , {title : 'Spare parts'});
};
const addReview = (req, res) => {
    res.render('reviews', {title: 'Review'});
};
const addReview1 = (req, res) => {
    res.render('reviews1', {title: 'Review'});
};
const addReview2 = (req, res) => {
    res.render('reviews2', {title: 'Review'});
};
const purchase = (req, res) => {
    res.render('purchase', {title: 'Cart'});
};
const purchase1 = (req, res) => {
    res.render('purchase1', {title: 'Cart'});
};
const purchase2 = (req, res) => {
    res.render('purchase2', {title: 'Cart'});
};
module.exports = {
    homelist,
    tyresinfo,
    oilsinfo,
    spareinfo,
    addReview,
    addReview1,
    addReview2,
    main,
    purchase,
    purchase1,
    purchase2
};