/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_SignUpSignIn",
        forgotPassword: "B2C_1_PasswordReset",
        editProfile: "B2C_1_Edit"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://equitablesharp.b2clogin.com/equitablesharp.onmicrosoft.com/B2C_1_SignUpSignIn",
        },
        forgotPassword: {
            authority: "https://equitablesharp.b2clogin.com/equitablesharp.onmicrosoft.com/B2C_1_PasswordReset",
        },
        editProfile: {
            authority: "https://equitablesharp.b2clogin.com/equitablesharp.onmicrosoft.com/B2C_1_Edit"
        }
    },
    authorityDomain: "equitablesharp.b2clogin.com"
}