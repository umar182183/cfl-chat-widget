// let apiGatewayEndpoint = "https://76n3dlzv6f.execute-api.eu-west-2.amazonaws.com/Prod"; //Initiate chat API link//
// //let contactFlowId = "15856449-4585-4c95-a151-5dbceaedb0f3";
// let contactFlowId = "43e97251-1940-4ad6-a43e-d2d2227dbe21";
// let instanceId = "56d03e5a-6bb1-427d-8588-6515f40ff580";
// let customerid = 'U2FsdGVkX18oAOiN6yaSe2ZFDSO1h2chaJLuAX+ugLQ=';
// let feedbackAPIURL = "https://8vxltlk3dj.execute-api.eu-west-2.amazonaws.com/prod/agent/feedback"; //Feedback API URL
// let destroyChatAPIURL = "https://76n3dlzv6f.execute-api.eu-west-2.amazonaws.com/Prod/"; //For deleting user from dynamo table
// let customerName = 'CFL';
// let region = "eu-west-2";
// let startingHours = 8;
// let endingHours = 20;
// let defaultLanguage = ""; //For Default Language and bypass Flags screen
// let source = "WEB"; //Source either MOBILE/WEB//
// let logoImage = "dummylogo.png"; //02-Dialect_White_logo.png// 
// let headersColor = ""; //Color configurations for headers background and button colorslet 
// let textColor = ""; // Color configurations for headers text colorlet languages = [
// { langCode : "de",    // twoLetterCountryCode : "DE",    // flag : "de.svg" ,    // },    {
// langCode: "en",
//     twoLetterCountryCode: "GB",
//     flag: "gb.svg",
// }
//,    // { langCode : "es",    // twoLetterCountryCode : "ES",    // flag : "es.svg",    // },    // { langCode : "pt",    // flag : "pt.svg",    // twoLetterCountryCode : "PT",    // }]

let topics = [{
        name: "Please select a topic",
        subjects: [{
            name: 'Please select a subject'
        }]
    },
    {
        name: "Sales",
        subjects: [{
            name: ' New sales enquiry'
        }, {
            name: 'Renewals'
        }, {
            name: 'Add products'
        }]
    },
    {
        name: "Tech support",
        subjects: [{
                name: 'No internet'
            },
            {
                name: 'Speed issues'
            },
            {
                name: 'WiFi Issues'
            },
            {
                name: 'Internet dropouts'
            },
            {
                name: 'Other'
            },
        ]
    },
    {
        name: "Customer services",
        subjects: [{
                name: 'Billing'
            },
            {
                name: 'Installation'
            },
            {
                name: 'Service call'
            },
            {
                name: 'Account management'
            },
            {
                name: 'Cancellation'
            }
        ]
    }
];


 let apiGatewayEndpoint = "https://v05t0e3ki2.execute-api.eu-central-1.amazonaws.com/Prod"; //Initiate chat API link
 let contactFlowId = "15856449-4585-4c95-a151-5dbceaedb0f3"; 
 let instanceId = "a65f970f-0f59-444e-b421-5ec6ec74c116";
 let customerid = 'U2FsdGVkX19fD62A8ctKnTFPqSfpQkFO+1bu5geryEU=';
 let feedbackAPIURL = "https://0t5tp8cvbe.execute-api.eu-central-1.amazonaws.com/dev/agent/feedback"; //Feedback API URL
 let destroyChatAPIURL = "https://0t5tp8cvbe.execute-api.eu-central-1.amazonaws.com/dev/agent/chat/web";  //For deleting user from dynamo table
 let customerName = 'Dialect';
let startingHours = 8;
let endingHours = 20;

 let region = "eu-central-1";
 let defaultLanguage = ""; //For Default Language and bypass Flags screen
 let source = "WEB"; //Source either MOBILE/WEB
 let logoImage = "02-Dialect_White_logo.png";
 let headersColor="#17AB33 "; //Color configurations for headers background and button colors
 let textColor="white"; // Color configurations for headers text color
 let languages = [
    { langCode : "de",
    twoLetterCountryCode : "DE",
    flag : "de.svg" ,
    },
    { langCode : "en",
    twoLetterCountryCode : "GB",
    flag : "gb.svg",
    },
    { langCode : "es",
    twoLetterCountryCode : "ES",
    flag : "es.svg",
    },
    { langCode : "pt",
    flag : "pt.svg",
    twoLetterCountryCode : "PT",
    }
]
