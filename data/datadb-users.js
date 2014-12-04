/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(verify) {
    var data = [
        {name:"Daniel Henrique", lastName:"Joppi", birthday:"1984-08-08T00:00:00.000Z", email:"daniel.joppi@suiteplus.com"}
    ];
    verify('user', data);
};