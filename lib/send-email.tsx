"use server";

import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData : FormData) => {


    console.log("Running")
    console.log(FormData.get("message"))

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'robin.cavlek@hotmail.no',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      });
  }