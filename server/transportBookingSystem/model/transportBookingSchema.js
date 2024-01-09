const mongoose = require('mongoose');

const transportBookingSchema = new mongoose.Schema(
  { userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'USER',
    required: true
  },
  institution:{
    type: String,
    required: true
  },
    department:{
      type: String,
      required: true
    },
    eventManager: {
      type: String,
      required: true
    },
    eventName: {
      type: String,
      required: true
    },
    eventDate: {
      type: Date,
  
    },
    eventDateType: {
      type: String,
      required: true
    },
    eventStartDate: {
      type: Date,
    },
    eventEndDate: {
      type: Date,
    },

    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },


    selfOrGuest:{
      type: String,
      required: true
    },
    noOfPerson:{
      type: Number,
      required: true
    },
naneOfGuest:{
  type: String,
  required: true
},
mobNoOfGuest:{
  type: Number,
  required: true
},
pickupLocation:{
  type: String,
  required: true
},
dropLocation:{
  type: String,
  required: true
},



    email: {
      type: String,
      required: true
    },
    
    bookedTransportId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transport',
      required: true
    },
    bookedTransport: {
      // type: mongoose.Schema.Types.Subdocument,

      type: Object,
      required: true,
    },

    bookedTransportName: {
      type: String,
      required: true
    },
    organizingClub: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    altNumber: {
      type: Number
    },
    rejectionReason: {
      type: String,
    },
    isApproved: {
      default: "Request Sent",
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// transportBookingSchema.index({ eventDate: 1 }, { expireAfterSeconds: 86400 });
const TransportBooking = mongoose.model('TransportBooking', transportBookingSchema);

module.exports = TransportBooking;
