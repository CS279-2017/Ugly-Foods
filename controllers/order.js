/**
 * Created by Alec on 2/27/2017.
 */
//get order page
exports.index = (req, res, next) => {

    res.render('order', {
        title: 'Order'
    });
};

/**
 * POST /account/profile
 * Update profile information.
 */
exports.postOrder = (req, res, next) => {
    req.flash('success', { msg: 'Placeholder for placing order.' });
    res.redirect('/');
};