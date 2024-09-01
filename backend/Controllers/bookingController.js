import User from '../models/UserSchema.js';
import Nursery from '../models/NurserySchema.js';
import Booking from '../models/BookingSchema.js';
import Stripe from 'stripe';

export const getCheckoutSession = async(req,res) => {
    try {

        // get currently booked nursery
        const nursery = await Nursery.findById(req.params.nurseryId);
        const user = await User.findById(req.userId);

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        // create stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            success_url:`${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url:`${req.protocol}://${req.get('host')}/nurserys/${nursery.id}`,
            customer_email:user.email,
            client_reference_id:req.params.nurseryId,
            line_items:[
                {
                    price_data:{
                        currency:'bdt',
                        unit_amount:nursery.ticketPrice * 100,
                        product_data:{
                            name:nursery.name,
                            description:nursery.bio,
                            images:[nursery.photo]
                        }
                    },
                    quantity:1
                }
            ]
        })

        // create new booking
        const booking = new Booking({
            nursery: nursery._id,
            user:user._id,
            ticketPrice:nursery.ticketPrice,
            session:session.id
        })

        await booking.save();

        res.send(200).json({
            success: true,
            message: 'Successfully Paid',
            session
        })
        
    } catch (err) {
        res.send(500).json({
            success: false,
            message: 'Error creating checkout session',
            session
        })
    }
}