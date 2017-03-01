'use strict';

const stripe = require('stripe')(process.env.STRIPE_SKEY);

/**
 * GET /stripe
 * Stripe API example.
 */
exports.getStripe = (req, res) => {
  res.render('stripe', {
    title: 'Stripe Payment',
    publishableKey: process.env.STRIPE_PKEY
  });
};

/**
 * POST /stripe
 * Make a payment.
 */
exports.postStripe = (req, res) => {
  const stripeToken = req.body.stripeToken;
  const stripeEmail = req.body.stripeEmail;
  stripe.charges.create({
    amount: 395,
    currency: 'usd',
    source: stripeToken,
    description: stripeEmail
  }, (err) => {
    if (err && err.type === 'StripeCardError') {
      req.flash('errors', { msg: 'Your card has been declined.' });
      return res.redirect('/stripe');
    }
    req.flash('success', { msg: 'Your card has been successfully charged.' });
    res.redirect('/stripe');
  });
};
