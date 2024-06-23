import { OrderItem } from "@/utiles/types/order/orderType";
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
   items: [{
     product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
     },
     name: { type: String, required: true },
     slug : { type: String, required: true },
     qty: { type: Number, required: true },
     image: { type: String, required: true },
     price: { type: Number, required: true },
   }],
   shippingAddress: {
     fullName: { type: String, required: true },
     address: { type: String, required: true },
     city: { type: String, required: true },
     postalCode: { type: String, required: true },
     country: { type: String, required: true },
   },
   paymentMethod: { type: String, required: true },
   paymentResult: {
     id: String,
     status: String,
     email_address: String,
   },
   taxPrice: { type: Number, required: true },

   shippingPrice: { type: Number, required: true },
   itemPrice: { type: Number, required: true },
   totalPrice: { type: Number, required: true },
   isPaid: { type: Boolean, default: false , required: true},
   paidAt: { type: Date},
   isDelivered: { type: Boolean,required: true, default: false },
   deliveredAt: { type: Date },
},
{
    timestamps: true
})

const OrderModel = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default OrderModel

export  type OrderType = {
    _id: string,
    user?: {name: string},
    items: OrderItem[],
    shippingAddress: {
        fullName: string,
        address: string,
        city: string,
        postalCode: string,
        country: string
    },
    paymentMethod: string,
    paymentResult: {
        id: string,
        status: string,
        email_address: string
    },
    taxPrice: number,
    shippingPrice: number,
    itemPrice: number,
    totalPrice: number,
    isPaid: boolean,
    paidAt: Date,
    isDelivered: boolean,
    deliveredAt: Date,
    createdAt: Date
}