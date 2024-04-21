import nodemailer from 'nodemailer'


let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: "narmadeshwarshivling.co@gmail.com",
        pass: "wdryjyjlzpistmgp"
    }
})


export const mailer = (req, res) => {

    const mailOption = {
        from: "narmadeshwarshivling.co@gmail.com",
        to: "narmadeshwarshivling.co@gmail.com",
        subject: "Narmadeshwar Shivling enquiry from website.",
        text: `Hello Himanshu,\nYour Narmadeshwar Shivling enquiry is:- \n Name:-${req.params.name}, \n Contact:-${req.params.contact}`
    }

    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email response :--", info.response);
        }
    })
    res.json({ message: "mail send successfully" })

}