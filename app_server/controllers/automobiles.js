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
            facilities : ['Cars' , 'Bikes' , 'Trucks' , 'Lorries']

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
    res.render('reviews', {title: 'Review Starbucks'});
};
module.exports = {
    homelist,
    tyresinfo,
    oilsinfo,
    spareinfo,
    addReview,
    main
};