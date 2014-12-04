/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(verify) {
    var data = [
        {name:"Florianópolis"},
        {name: "São José"},
        {name: "Palhoça"}
    ];
    verify('location', data);
};