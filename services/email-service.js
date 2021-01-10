const config = require("../config");
module.exports = {
  sendEmail: function (subject, content) {
    console.log("sending email!");
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(config.SENDGRIG_API_KEY);
    const msg = {
      to: config.EMAIL_TO,
      from: config.EMAIL_FROM,
      subject: subject,
      text: content,
      html: content,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email Sent!");
      })
      .catch((error) => {
        console.log("Email NOT Sent!");
        console.error(error.toString());
      });
  },
};
