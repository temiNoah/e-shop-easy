export const userInputs = [
  {
    id: 1,
    label: "Username",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: "Name and surname",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 3,
    label: "Email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 4,
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: 5,
    label: "Password",
    type: "password",
  },
  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 7,
    label: "Country",
    type: "text",
    placeholder: "USA",
  },
];

export const AdminFormLabel = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    label: "First Name",
    required: true
    // placeholder: "vin",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    label: " Last Name",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    label: "Email",
    required: true
    // placeholder: "vin",
  },
  {
    id: 4,
    name: "phoneNumber",
    type: "Number",
    label: "phone Number",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 5,
    name: "gender",
    type: "text",
    label: "Gender",
    required: true
    // placeholder: "vin",
  },
  {
    id: 6,
    name: "dob",
    type: "date",
    label: "dob",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 7,
    name: "country",
    type: "text",
    label: "Country",
    required: true
    // placeholder: "vin",
  },
  {
    id: 8,
    name: "state",
    type: "text",
    label: "State",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 9,
    name: "address",
    type: "text",
    label: "Address",
    required: true
    // placeholder: "vin",
  },
  {
    id: 10,
    name: "bankName",
    type: "text",
    label: "Bank Name:",
    required: true
    // placeholder: "vin",
  },
  {
    id: 11,
    name: "bankCode",
    type: "text",
    label: "Bank Code:",
    required: true
    // placeholder: "vin",
  },
  {
    id: 12,
    name: "accountNumber",
    type: "text",
    label: "Account No.",
    required: true
    // placeholder: "vin",
  },

  {
    id: 13,
    name: "lastLogin",
    type: "text",
    label: "Last Login",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 14,
    name: "isDeleted",
    type: "text",
    label: "isDeleted",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 15,
    name: "createdAt",
    type: "date",
    label: "createdAt",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 16,
    name: "updatedAt",
    type: "date",
    label: "updatedAt",
    required: true,
    // placeholder: "manufacturer",
  },
]

export const transactionLabelDetails = [
  {
    id: 1,
    name: "senderID",
    type: "text",
    label: "Sender Id",
    required: true
    // placeholder: "vin",
  },
  {
    id: 2,
    name: "senderType",
    type: "text",
    label: "sender Type",
    required: true
    // placeholder: "vin",
  },
  {
    id: 3,
    name: "receiverType",
    type: "text",
    label: "Receiver Type",
    required: true
    // placeholder: "vin",
  },
  {
    id: 4,
    name: "receiverID",
    type: "text",
    label: "Receiver Id",
    required: true
    // placeholder: "vin",
  },
  {
    id: 5,
    name: "amount",
    type: "text",
    label: "Amount",
    required: true
    // placeholder: "vin",
  },
  {
    id: 6,
    name: "reference",
    type: "text",
    label: "Reference",
    required: true
    // placeholder: "vin",
  },
  {
    id: 7,
    name: "description",
    type: "text",
    label: "Description",
    required: true
    // placeholder: "vin",
  },
  {
    id: 8,
    name: "status",
    type: "text",
    label: "Status",
    required: true
    // placeholder: "vin",
  },
  {
    id: 9,
    name: "currency",
    type: "text",
    label: "Currency",
    // required:true
  },
  {
    id: 10,
    name: "fee",
    type: "text",
    label: "Fee",
    // required:true
  },
  {
    id: 11,
    name: "method",
    type: "text",
    label: "Method"
  },
  {
    id: 12,
    name: "paymentServiceProvider",
    type: "text",
    label: "paymentServiceProvider"
  },
  {
    id: 13,
    name: "type",
    type: "select",
    label: "Type",
    options: ["order", "service-request"]
  },
  {
    id: 14,
    name: "",
    type: "hidden",
    label: ""
  },
  // {
  //   id: 15,
  //   name: "",
  //   type: "hidden",
  //   label: ""
  // }
]


export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];

export const carFormDetails = [
  {
    id: 1,
    label: "Product Id",
    type: "text",
    name: "productId",
    required: true
    // placeholder: "vin",
  },
  {
    id: 2,
    label: "name",
    type: "text",
    name: "name",
    required: true
    // placeholder: "manufacturer",
  },
  {
    id: 3,
    label: "brand",
    type: "text",
    name: "brand",
    required: true
    // placeholder: "model",
  },
  {
    id: 4,
    label: "description",
    type: "text",
    name: "description",
    required: true
    //placeholder: "date",
  },
  {
    id: 5,
    label: "category",
    type: "text",
    name: "category",
    required: false
    //placeholder: "mileage"
  },
  {
    id: 6,
    label: "availability",
    type: "text",
    name: "availability",
    required: true,
  },
  {
    id: 7,
    label: "rating",
    type: "text",
    name: "rating",
    required: true,
  },
  {
    id: 8,
    label: "Price",
    type: "text",
    name: "price",
    required: true
  },
  {
    id: 9,
    label: "unit",
    type: "text",
    name: "unit",
    required: true,
    // placeholder: "price",
  },
  {
    id: 10,
    label: "discount",
    type: "text",
    name: "discount",
    required: true,
    // placeholder: "price",
  },
]

export const serviceRequestDetails = [
  {
    id: 1,
    name: "requestName",
    type: "text",
    label: "Request Name",
    required: true
    // placeholder: "vin",
  },
  {
    id: 2,
    name: "serviceType",
    type: "select",
    label: "Service Type",
    required: true,
    options: ["electrical", "engine", "transmission", "brake", "suspension", "electrical", "exhaust", "cooling", "body-work", "others"]
    // placeholder: "manufacturer",
  },
  {
    id: 3,
    name: "contactInformation",
    type: "text",
    label: "Contact Information",
    required: true
    // placeholder: "vin",
  },
  {
    id: 4,
    name: "serviceDescription",
    type: "text",
    label: "Service Description",
    required: true
    // placeholder: "vin",
  },
  {
    id: 5,
    name: "preferredServiceDate",
    type: "Date",
    label: "Preferred Service Date",
    required: true
    // placeholder: "vin",
  },
  {
    id: 6,
    name: "serviceLocation",
    type: "text",
    label: "Service Location",
    required: true
    // placeholder: "vin",
  },
  {
    id: 7,
    name: "serviceProviderName",
    type: "text",
    label: "Service Provider Name",
    required: true
    // placeholder: "vin",
  },
  {
    id: 8,
    name: "serviceCost",
    type: "text",
    label: "Service Cost",
    required: true
    // placeholder: "vin",
  },
  {
    id: 9,
    name: "serviceFeedback",
    type: "textarea",
    label: "Service Feedback",
    required: true
    // placeholder: "vin",
  },
  {
    id: 10,
    name: "paymentInformation",
    type: "text",
    label: "Payment Information",
    required: true
    // placeholder: "vin",
  },
  {
    id: 11,
    name: "serviceStatus",
    type: "select",
    label: "Service Status",
    options: ["pending", "in-progress", "completed"],
    required: true
    // placeholder: "vin",
  },
  {
    id: 13,
    name: "hidden",
    type: "hidden",
    label: "",
    // placeholder: "vin",
  },

]

export const artisanFormLabel = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    label: "First Name",
    required: true
    // placeholder: "vin",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    label: " Last Name",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 3,
    name: "gender",
    type: "select",
    label: "Gender",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 4,
    name: "NIN",
    type: "text",
    label: "NIN",
    required: true
    // placeholder: "vin",
  },
  {
    id: 5,
    name: "nationality",
    type: "text",
    label: "nationality",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 6,
    name: "jobType",
    type: "text",
    label: "Job Type",
    required: true
    // placeholder: "vin",
  },
  {
    id: 7,
    name: "residentialAddress",
    type: "text",
    label: "Residential Address",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 8,
    name: "dob",
    type: "date",
    label: "dob",
    required: true
    // placeholder: "vin",
  },
  {
    id: 9,
    name: "email",
    type: "email",
    label: "Email",
    required: true,
  },
  {
    id: 10,
    name: "phoneNumber",
    type: "Number",
    label: "phoneNumber",
    required: true
    // placeholder: "vin",
  },
  {
    id: 11,
    name: "nextOfKin",
    type: "text",
    label: "nextOfKin",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 12,
    name: "nextOfKinPhoneNumber",
    type: "text",
    label: "nextOfKinPhoneNumber",
    required: true
    // placeholder: "vin",
  },
  {
    id: 13,
    name: "nextOfKinRelationship",
    type: "text",
    label: "nextOfKinRelationship",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 14,
    name: "yearsOfExperience",
    type: "Number",
    label: "yearsOfExperience",
    required: true
    // placeholder: "vin",
  },
  {
    id: 15,
    name: "isDeleted",
    type: "text",
    label: "isDeleted",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 16,
    name: "lastLogin",
    type: "text",
    label: "lastLogin",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 17,
    name: "createdAt",
    type: "date",
    label: "createdAt",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 18,
    name: "updatedAt",
    type: "date",
    label: "updatedAt",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 19,
    name: "bankName",
    type: "text",
    label: "Bank Name",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 20,
    name: "bankAccount",
    type: "text",
    label: "Bank Account",
    required: true,
    // placeholder: "manufacturer",
  },

]


export const dealerFormLabel = [

  {
    id: 1,
    name: "companyName",
    type: "text",
    label: "companyName",
    required: true
    // placeholder: "vin",
  },
  {
    id: 2,
    name: "physicalAddress",
    type: "text",
    label: "physicalAddress",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 3,
    name: "parentCompany",
    type: "text",
    label: "parentCompany",
    required: true
    // placeholder: "vin",
  },
  {
    id: 4,
    name: "dateFounded",
    type: "date",
    label: "Date Founded",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 5,
    name: "website",
    type: "text",
    label: "website",
    required: true
    // placeholder: "vin",
  },
  {
    id: 6,
    name: "industry",
    type: "text",
    label: "industry",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 7,
    name: "companySize",
    type: "text",
    label: "companySize",
    required: true
    // placeholder: "vin",
  },
  {
    id: 8,
    name: "companyRevenue",
    type: "text",
    label: "companyRevenue",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 9,
    name: "CEOName",
    type: "text",
    label: "CEOName",
    required: true
    // placeholder: "vin",
  },
  {
    id: 10,
    name: "companyDescription",
    type: "text",
    label: "companyDescription",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 11,
    name: "email",
    type: "text",
    label: "email",
    required: true
    // placeholder: "vin",
  },
  {
    id: 12,
    name: "phoneNumber",
    type: "text",
    label: "phoneNumber",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 13,
    name: "bankAccount",
    type: "text",
    label: "bankAccount",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 14,
    name: "bankName",
    type: "text",
    label: "bankName",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 15,
    name: "isDeleted",
    type: "text",
    label: "isDeleted",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 16,
    name: "socialMediaLinks",
    type: "text",
    label: "socialMediaLinks",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 17,
    name: "lastLogin",
    type: "text",
    label: "lastLogin",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 18,
    name: "createdAt",
    type: "date",
    label: "createdAt",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 19,
    name: "updatedAt",
    type: "date",
    label: "updatedAt",
    required: true,
    // placeholder: "manufacturer",
  },



]

export const customerFormLabel = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    label: "First Name",
    required: true
    // placeholder: "vin",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    label: "Last Name",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    label: "Email",
    required: true
    // placeholder: "vin",
  },
  {
    id: 4,
    name: "phoneNumber",
    type: "Number",
    label: "phone Number",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 5,
    name: "gender",
    type: "text",
    label: "Gender",
    required: true
    // placeholder: "vin",
  },
  {
    id: 6,
    name: "dob",
    type: "date",
    label: "dob",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 7,
    name: "country",
    type: "text",
    label: "Country",
    required: true
    // placeholder: "vin",
  },
  {
    id: 8,
    name: "state",
    type: "text",
    label: "State",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 9,
    name: "address",
    type: "text",
    label: "Address",
    required: true
    // placeholder: "vin",
  },
  {
    id: 10,
    name: "lastLogin",
    type: "text",
    label: "Last Login",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 11,
    name: "isDeleted",
    type: "text",
    label: "isDeleted",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 12,
    name: "createdAt",
    type: "date",
    label: "createdAt",
    required: true,
    // placeholder: "manufacturer",
  },
  {
    id: 13,
    name: "updatedAt",
    type: "date",
    label: "updatedAt",
    required: true,
    // placeholder: "manufacturer",
  },

]

export const adminFormLabel = [

  {
    id: 1,
    name: "requestName",
    type: "text",
    label: "Request Name",
    required: true
    // placeholder: "vin",
  },
  {
    id: 2,
    name: "serviceType",
    type: "select",
    label: "Service Type",
    required: true,
    options: ["electrical", "engine", "transmission", "brake", "suspension", "electrical", "exhaust", "cooling", "body-work", "others"]
    // placeholder: "manufacturer",
  },
  {
    id: 3,
    name: "requestName",
    type: "text",
    label: "Request Name",
    required: true
    // placeholder: "vin",
  },
  {
    id: 4,
    name: "serviceType",
    type: "select",
    label: "Service Type",
    required: true,
    options: ["electrical", "engine", "transmission", "brake", "suspension", "electrical", "exhaust", "cooling", "body-work", "others"]
    // placeholder: "manufacturer",
  },

  // {
  //   id: 1,
  //   name: "requestName",
  //   type: "text",
  //   label: "Request Name",
  //   required: true
  //   // placeholder: "vin",
  // },
  // {
  //   id: 2,
  //   name: "serviceType",
  //   type: "select",
  //   label: "Service Type",
  //   required: true,
  //   options: ["electrical", "engine", "transmission", "brake", "suspension", "electrical", "exhaust", "cooling", "body-work", "others"]
  //   // placeholder: "manufacturer",
  // },
  // {
  //   id: 3,
  //   name: "requestName",
  //   type: "text",
  //   label: "Request Name",
  //   required: true
  //   // placeholder: "vin",
  // },
  // {
  //   id: 4,
  //   name: "serviceType",
  //   type: "select",
  //   label: "Service Type",
  //   required: true,
  //   options: ["electrical", "engine", "transmission", "brake", "suspension", "electrical", "exhaust", "cooling", "body-work", "others"]
  //   // placeholder: "manufacturer",
  // },
  // {
  //   id: 1,
  //   name: "requestName",
  //   type: "text",
  //   label: "Request Name",
  //   required: true
  //   // placeholder: "vin",
  // },
  // {
  //   id: 2,
  //   name: "serviceType",
  //   type: "select",
  //   label: "Service Type",
  //   required: true,
  //   options: ["electrical", "engine", "transmission", "brake", "suspension", "electrical", "exhaust", "cooling", "body-work", "others"]
  //   // placeholder: "manufacturer",
  // },
  // {
  //   id: 3,
  //   name: "requestName",
  //   type: "text",
  //   label: "Request Name",
  //   required: true
  //   // placeholder: "vin",
  // },
  // {
  //   id: 4,
  //   name: "serviceType",
  //   type: "select",
  //   label: "Service Type",
  //   required: true,
  //   options: ["electrical", "engine", "transmission", "brake", "suspension", "electrical", "exhaust", "cooling", "body-work", "others"]
  //   // placeholder: "manufacturer",
  // },
]

export const subaccountFormLabel = [
  {
    id: 1,
    name: "userType",
    type: "select",
    label: "User Type",
    required: true,
    options: [{ name: "artisan", value: "artisan" }, { name: "dealer", value: "dealer" }, { name: "admin", value: "admin" }]
    // placeholder: "vin",
  },
  // {
  //   id: 2,
  //   name: "userID",
  //   type: "text",
  //   label: "User Id",
  //   required: true
  //   // placeholder: "vin",
  // },
  {
    id: 2,
    name: "email",
    type: "text",
    label: "Email",
    required: true
  },

  {
    id: 3,
    name: "business_name",
    type: "text",
    label: "Business Name",
    required: true
    // placeholder: "vin",
  },
  {
    id: 4,
    name: "settlement_bank",
    type: "select",
    label: "Settlement Bank",
    required: true,
    options: [],
    placeholder: "Select Bank",
  },

  {
    id: 5,
    name: "account_number",
    type: "text",
    label: "Account number",
    required: true
    // placeholder: "vin",
  },
  {
    id: 6,
    name: "percentage_charge",
    type: "text",
    label: "Percentage Charge",
    required: true
    // placeholder: "vin",
  },
  {
    id: 7,
    name: "hidden",
    type: "hidden",
    label: ""
  },
  // {
  //   id: 9,
  //   name: "createdAt",
  //   type: "text",
  //   label: "Created At",
  //   required: true
  //   // placeholder: "vin",
  // },

  // {
  //   id: 8,
  //   name: "updateddAt",
  //   type: "text",
  //   label: "Updated At",
  //   required: true
  //   // placeholder: "vin",
  // },
]

export const transactionSplitFormLabel = [
  {
    id: 1,
    name: "userType",
    type: "select",
    label: "User Type",
    options: ["artisan", "dealer"],
    required: true
    // placeholder: "vin",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    label: "Email",
    required: true
  },
  // {
  //   id: 2,
  //   name: "userID",
  //   type: "text",
  //   label: "User Id",
  //   required: true
  //   // placeholder: "vin",
  // },
  {
    id: 3,
    name: "name",
    type: "text",
    label: "Name",
    required: true
    // placeholder: "vin",
  },
  {
    id: 4,
    name: "type",
    type: "select",
    label: "Type",
    required: true,
    options: ["percentage", "flat"]
    // placeholder: "vin",
  },
  {
    id: 5,
    name: "currency",
    type: "select",
    label: "Currency",
    required: true,
    options: ["NGN", "USD"]
    // placeholder: "vin",
  },
  {
    id: 6,
    name: "country",
    type: "select",
    label: "Country",
    required: true,
    options: []
    // placeholder: "vin",
  },

  // {
  //   id: 7,
  //   name: "subaccounts",
  //   type: "text",
  //   label: "Subaccounts",
  //   required: true
  // },
  {
    id: 8,
    name: "bearer_type",
    type: "select",
    label: "Bearer Type",
    options: ["subaccount", "account"],
    required: true
  },
  {
    id: 9,
    name: "bearer_subaccount",
    type: "text",
    label: "Bearer Subaccount",
    placeholder: "",
    required: true
  },
  // {
  //   id: 10,
  //   name: "",
  //   type: "hidden",
  //   label: "",
  //   placeholder: "",
  //   required: true

  // }
  // {
  //   id: 7,
  //   name: "status",
  //   type: "text",
  //   label: "Status",
  //   required: true
  //   // placeholder: "vin",
  // },
  // {
  //   id: 11,
  //   name: "createdAt",
  //   type: "text",
  //   label: "Created At",
  //   required: true
  //   // placeholder: "vin",
  // },

  // {
  //   id: 12,
  //   name: "updateddAt",
  //   type: "text",
  //   label: "Updated At",
  //   required: true
  //   // placeholder: "vin",
  // },


]

export const notificationFormDetails = [
  {
    id: 1,
    label: "Sender",
    type: "text",
    name: "sender",
    required: true
    // placeholder: "model",
  },
  {
    id: 2,
    label: "Recipient",
    type: "text",
    name: "recipient",
    required: true
    // placeholder: "model",
  },
  {
    id: 3,
    label: "Title",
    type: "text",
    name: "title",
    required: true
    // placeholder: "vin",
  },
  {
    id: 4,
    label: "Message",
    type: "textarea",
    name: "message",
    required: true,
    width: "50%",
    resize: "vertical"
    // placeholder: "manufacturer",
  },
  {
    id: 5,
    label: "Type",
    type: "select",
    name: "type",
    required: true,
    options: ['Order', 'Payment', 'Promotion', 'service-requeest']
    // placeholder: "model",
  },
  {
    id: 6,
    label: "severity",
    type: "select",
    name: "severity",
    required: true,
    options: ['high', 'medium', 'low']
    // placeholder: "model",
  },
  {
    id: 7,
    label: "deliveryPreference",
    type: "select",
    name: "deliveryPreference",
    required: true,
    options: ['email', 'sms', 'in-app', 'push notification', 'all']
    // placeholder: "model",
  },
  {
    id: 8,
    label: "status",
    type: "select",
    name: "status",
    required: true,
    options: ['active', 'inactive']
    // placeholder: "model",
  },
  // {
  //   id: 11,
  //   label: "additionalOptions",
  //   type: "text",
  //   name: "additionalOptions",
  //   required: true
  //   // placeholder: "model",
  // },
  // {
  //   id: 12,
  //   label: "",
  //   type: "hidden",
  //   name: "",
  // },
  // {
  //   id: 13,
  //   label: "actionUrl",
  //   type: "text",
  //   name: "actionUrl",
  //   required: true
  //   // placeholder: "model",
  // },
  // {
  //   id: 14,
  //   label: "Timestamp",
  //   type: "Date",
  //   name: "timestamp",
  //   required: true
  //   // placeholder: "model",
  // },
] 