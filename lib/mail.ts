import { Resend } from "resend";
import { mailOptions, transporter } from "./nodemailer";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
  email: string,
  token: string
) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: email,
  //   subject: 'Confirm your email',
  //   html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
  // })

  await transporter.sendMail({
    ...mailOptions,
    to: email,
    subject: 'Confirm your email',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sign in to Mailmeteor</title>
      <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
    </head>
    
    <body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
      <table role="presentation"
        style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
        <tbody>
          <tr>
            <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
              <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
                <tbody>
                  <tr>
                    <td style="padding: 40px 0px 0px;">
                      <div style="text-align: left;">
                        <div style="padding-bottom: 20px;"><img src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png" alt="Company" style="width: 56px;"></div>
                      </div>
                      <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                        <div style="color: rgb(0, 0, 0); text-align: left;">
                          <h1 style="margin: 1rem 0">Verify your email</h1>
                          <p style="padding-bottom: 16px">Click the link below to verify your email.</br>This link will expire in 1 hour.</p>
                          <p style="padding-bottom: 16px"><a href=${confirmLink} target="_blank"
                              style="padding: 12px 24px; border-radius: 4px; color: #FFF; background: #2B52F5;display: inline-block;margin: 0.5rem 0;">Verify your email</a></p>
                          <p style="padding-bottom: 16px">If you didn’t ask to sign in, you can ignore this email.</p>
                          <p style="padding-bottom: 16px">Thanks</p>
                        </div>
                      </div>
                      <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;">
                        <p style="padding-bottom: 16px">Next Auth Utility</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    
    </html>`
  })
}

export const sendPasswordResetEmail = async (
  email: string,
  token: string
) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: email,
  //   subject: 'Reset your password',
  //   html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
  // })

  await transporter.sendMail({
    ...mailOptions,
    to: email,
    subject: 'Reset your password',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset your password</title>
      <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
    </head>
    
    <body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
      <table role="presentation"
        style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
        <tbody>
          <tr>
            <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
              <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
                <tbody>
                  <tr>
                    <td style="padding: 40px 0px 0px;">
                      <div style="text-align: left;">
                        <div style="padding-bottom: 20px;"><img src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png" alt="Company" style="width: 56px;"></div>
                      </div>
                      <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                        <div style="color: rgb(0, 0, 0); text-align: left;">
                          <h1 style="margin: 1rem 0">Trouble signing in?</h1>
                          <p style="padding-bottom: 16px">We've received a request to reset the password for this user account.</p>
                          <p style="padding-bottom: 16px"><a href=${resetLink} target="_blank"
                              style="padding: 12px 24px; border-radius: 4px; color: #FFF; background: #2B52F5;display: inline-block;margin: 0.5rem 0;">Reset
                              your password</a></p>
                          <p style="padding-bottom: 16px">If you didn't ask to reset your password, you can ignore this email.</p>
                          <p style="padding-bottom: 16px">Thanks</p>
                        </div>
                      </div>
                      <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;">
                        <p style="padding-bottom: 16px">Next Auth Utility</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    
    </html>`
  })
}

export const sendTwoFactorEmail = async (email: string, token: string) => {
  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: email,
  //   subject: 'Confirm your email',
  //   html: `<p>Your 2FA code: <b>${token}</b></p>`
  // })

  await transporter.sendMail({
    ...mailOptions,
    to: email,
    subject: 'Your 2FA code',
    // html: `<p>Your 2FA code: <b>${token}</b></p>`
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify your login</title>
      <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
    </head>
    
    <body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
      <table role="presentation"
        style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
        <tbody>
          <tr>
            <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
              <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
                <tbody>
                  <tr>
                    <td style="padding: 40px 0px 0px;">
                      <div style="text-align: left;">
                        <div style="padding-bottom: 20px;"><img src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png" alt="Company" style="width: 56px;"></div>
                      </div>
                      <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                        <div style="color: rgb(0, 0, 0); text-align: left;">
                          <h1 style="margin: 1rem 0">Verification code</h1>
                          <p style="padding-bottom: 16px">Please use the 2FA verification code below to sign in.</p>
                          <p style="padding-bottom: 16px"><strong style="font-size: 130%">${token}</strong></p>
                          <p style="padding-bottom: 16px">If you didn’t request this, you can ignore this email.</p>
                          <p style="padding-bottom: 16px">Thanks</p>
                        </div>
                      </div>
                      <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;">
                        <p style="padding-bottom: 16px">Next Auth Utility</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    
    </html>`
  })
}