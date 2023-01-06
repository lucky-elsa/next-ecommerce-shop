import { NextApiHandler } from "next";
import { Stripe } from "stripe";

const checkoutHandler: NextApiHandler = async (req, res) => {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    res.status(500).json({ message: `Missing STRIPE_SECRET_KEY` });
    return;
  }

  const stripe = new Stripe(stripeSecretKey, { apiVersion: "2022-11-15" });

  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    locale: "en",
    payment_method_types: ["card"],
    success_url:
      "http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/checkout/cancel",
    line_items: req.body,
  });

  res.status(201).json({ session: stripeCheckoutSession });
};

export default checkoutHandler;
