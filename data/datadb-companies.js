/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(verify, db) {
    var loadImage = require('./load-images')(db);

    var data = [
        {name: 'Marvel', image: loadImage({url:'http://www.cinemaemuitomais.com/wp-content/uploads/2013/11/Marvel-Logo1.jpg', name: 'marvel-logo.jpg', type: 'jpg'}) },
        {name: 'G.I. Joe', image: loadImage({url:'http://th05.deviantart.net/fs70/PRE/i/2011/292/f/9/gi_joe_logo_v_2_by_viperaviator-d4dawn1.png', name: 'gijoe-logo.png', type: 'png'}) },
        {name: 'Cobra', image: loadImage({url:'http://img3.wikia.nocookie.net/__cb20130921162321/transformers-vs-gi-joe-the-unit/images/d/dc/Gi_joe_cobra_logo.jpg', name: 'cobra-logo.jpg', type: 'jpg'}) },
        {name: 'Shield', image: loadImage({url:'http://shieldtv.net/wp-content/uploads/2013/06/S.H.I.E.L.D.-logo-6.jpg', name: 'shield-logo.jpg', type: 'jpg'}) },
        {name: 'Hyndra', image: loadImage({url:'http://img2.wikia.nocookie.net/__cb20120709063105/marvelcinematicuniverse/images/8/82/Hydra_logo.png', name: 'hyndra-logo.jpg', type: 'png'}) },
        {name: 'Justice League', image: loadImage({url:'http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/082013/untitled-1_92.png', name: 'justiceleague-logo.jpg', type: 'png'}) }
    ];
    console.log(data);
    verify('company', data);
};