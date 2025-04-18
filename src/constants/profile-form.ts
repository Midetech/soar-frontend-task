interface ProfileFormField {
    name: "username" | "name" | "email" | "password" | "address" | "dateOfBirth" | "city" | "postalCode" | "country" | "permanentAddress";
    label: string;
    type: string;
    placeholder: string;
}

export const profileFormFields: ProfileFormField[] = [{
    name: "name",
    label: "Your Name",
    type: "text",
    placeholder: "Enter your full name",
},
{
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
},

{
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email address",
},
{
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "**********",
},
{
    name: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
    placeholder: "Select your date of birth",
},
{
    name: "address",
    label: "Present Address",
    type: "text",
    placeholder: "Enter your present address",
},
{
    name: "permanentAddress",
    label: "Permanent Address",
    type: "text",
    placeholder: "Enter your permanent address",
},
{
    name: "city",
    label: "City",
    type: "text",
    placeholder: "Enter your city",
},
{
    name: "postalCode",
    label: "Postal Code",
    type: "text",
    placeholder: "Enter your postal code",
},
{
    name: "country",
    label: "Country",
    type: "text",
    placeholder: "Enter your country",
},

];
