import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/paymentModel.js"; // Adjust the path accordingly
import nodemailer from "nodemailer"; // Import nodemailer
import Razorpay from "razorpay";

export const checkout = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
        // note_key: "email sent succefully to TWCPL"
    
    };
    const order = await instance.orders.create(options);
    
    res.status(200).json({
        success: true,
        order,
    });
};

export const paymentVerification = async (req, res) => {  
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature  } = req.body;

     
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
        .update(body.toString())
        .digest("hex");


        console.log("sig received ", razorpay_signature);
        console.log("sig generated ", expectedSignature);
     const isAuthentic = razorpay_signature === expectedSignature;
    //  const isAuthentic = razorpay_order_id === razorpay_payment_id;

    console.log("payment done now checking");

    try{var instance = new Razorpay({ key_id: 'rzp_test_QKHlS7OlJZ9Vgn', key_secret: 'AX2FH1gl38cJDzkGT3uWhlqh' })

    const response = await instance.payments.fetch(razorpay_payment_id);
    console.log(response);
  }
    catch(error){
      console.log("Errrooroor");

    }

        if (isAuthentic) {
            // Database comes here
            // var instance = new Razorpay({ key_id: 'rzp_test_QKHlS7OlJZ9Vgn', key_secret: 'AX2FH1gl38cJDzkGT3uWhlqh' })

            //     const response = await instance.payments.fetch(razorpay_payment_id);
            //     console.log(response);

            // await Payment.create({
            //     razorpay_order_id,
            //     razorpay_payment_id,
            //     razorpay_signature,
            //     firstname,
            //      lastname, 
            //      email, 
            //      address,
            //      phonenumber
            //     }); 


                // function sendEmailNotification(formData) {
                //     const transporter = nodemailer.createTransport({
                //       service: "gmail",
                //       auth: {
                //         user: "parveenprajapati9310@gmail.com", // Update with your Gmail address
                //         pass: "davajvjvmpyfjlri", // Update with your Gmail password
                //       },
                //     });
                  
                   
                //     const mailOptions = {
                //       from: "parveenprajapati9310@gmail.com",
                //       to: "parveenprajapati6010@gmail.com",
                //       subject: "Customer booking Detail",
                //       html: `<p>New registration details11:</p>
                //       <p>Name: ${firstname}</p>
                //        <p>Lastname: ${lastname}</p>
                //        <p>Email: ${email}</p>
                //        <p>Address: ${address}</p>
                //        <p>Address: ${phonenumber}</p>
                //        <p>razorpay_order_id: ${formData.razorpay_order_id}</p>
                //       <p>razorpay_payment_id: ${formData.razorpay_payment_id}</p>`,
                //     };
                  

                //     const mailOptions1 = {
                //         from: "parveenprajapati9310@gmail.com",
                //         to: "ishantsah58@gmail.com",
                //         subject: "Customer booking Detail",
                //         html: `<p>New registration details11:</p>
                //         <p>Name: ${firstname}</p>
                //          <p>Lastname: ${lastname}</p>
                //          <p>Email: ${email}</p>
                //          <p>Address: ${address}</p>
                //          <p>Address: ${phonenumber}</p>
                //          <p>razorpay_order_id: ${formData.razorpay_order_id}</p>
                //         <p>razorpay_payment_id: ${formData.razorpay_payment_id}</p>`,
                //       };
                  
                //     transporter.sendMail(mailOptions, function (error, info) {
                //       if (error) {
                //         console.log("Email error: " +error);
                //       } else {
                //         console.log("Email sent: " + info.response);
                //       }
                //     });
                //     transporter.sendMail(mailOptions1, function (error, info) {
                //         if (error) {
                //           console.log("Email error: " +error);
                //         } else {
                //           console.log("Email sent: " + info.response);
                //         }
                //       });
                //   }
                //   sendEmailNotification(req.body);
                  
                
             

            res.redirect(
            `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
            );
            } else {

                // function sendEmailNotification(formData) {
                //     const transporter = nodemailer.createTransport({
                //       service: "gmail",
                //       auth: {
                //         user: "parveenprajapati9310@gmail.com", // Update with your Gmail address
                //         pass: "davajvjvmpyfjlri", // Update with your Gmail password
                //       },
                //     });
                  
                //     const mailOptions = {
                //       from: "parveenprajapati9310@gmail.com",
                //       to: formData.email,
                //       subject: "Customer booking Detail",
                //       html: `<p>New registration details:</p>
                //              <p>payment failed</p>
                //              <p>again try</p>`,
                //     };
                  
                //     transporter.sendMail(mailOptions, function (error, info) {
                //       if (error) {
                //         console.log("Email error: " +error);
                //       } else {
                //         console.log("Email sent: " + info.response);
                //       }
                //     });
                  
                //   }
                //   sendEmailNotification(req.body);
                  
                
            res.status(400).json({
            success: false,
            });
  }
};

