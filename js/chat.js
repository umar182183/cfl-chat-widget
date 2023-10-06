let i = true;
let transcript = [];
let startinghours = startingHours;
let closinghours = endingHours;
let old = null;
let ContactIdd = null;
let feedval = null;
let widgetLangauge = 'en';
let ids = [];
let JsonRes = {};
let parentUrl = 'not available';
let ConfiguredwebsiteURL = 'https://help.sokin.com/';
let chatExpiryMinutes = 5;
let Successsession = '';
let firstTimeDialCode = '';
let isemailValid = false;
let inAgentJoined = false;
$(document).ready(() => {
    $('input').each(function (i, item) {
        ids.push(item.id)
    });
    $('label').each(function (i, item) {
        ids.push(item.id)
    });
    $('div').each(function (i, item) {
        ids.push(item.id)
    })
    $('p').each(function (i, item) {
        ids.push(item.id)
    })
    $('h2').each(function (i, item) {
        ids.push(item.id)
    })
    $('button').each(function (i, item) {
        ids.push(item.id)
    })
    $('span').each(function (i, item) {
        ids.push(item.id)
    })
    $('textarea').each(function (i, item) {
        ids.push(item.id)
    })
    triggerWidgetLoadedEvent();
});

function triggerWidgetLoadedEvent() {
    window.parent.postMessage('loaded', '*');
}
window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
    try {
        if (typeof (event.data) == "string") {
            let eventData = JSON.parse(event.data);
            if (eventData.name == "parenturl") {
                parentUrl = eventData.parentUrl;
            }
        }
    } catch (exp) {

    }
}

async function readJSON(name) {
    let jsonRes = await $.getJSON(`./i18n/${name}.json`, function (res) {
        return res;
    })
    updateLanguage(jsonRes)
}


function updateLanguage(jsonRes) {
    try {
        ids.map((item) => {
            if (item && item == 'fname') {
                let element = document.getElementById(item);
                element.placeholder = jsonRes[item]
            } else if (item && item == 'lname') {
                let element = document.getElementById(item);
                element.placeholder = jsonRes[item]
            } else if (item && item == 'phone') {
                let element = document.getElementById(item);
                element.placeholder = jsonRes[item]
            } else if (item && item == 'email') {
                let element = document.getElementById(item);
                element.placeholder = jsonRes[item]
            } else if (item && item == 'title') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'notificationText') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'titleForContinueChat') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'startchat') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'chattingus') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'asking') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'notlike') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'extreamlylike') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'endchat') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'errorMessage' && !isValid && isTrue) {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'comment') {
                let element = document.getElementById(item);
                element.placeholder = jsonRes[item]
            } else if (item && item == 'fnameLabel') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'lnameLabel') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'phoneLabel') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            } else if (item && item == 'emailLabel') {
                let element = document.getElementById(item);
                element.innerText = jsonRes[item]
            }
        })
    } catch (err) {
        console.error('Error while Translating ', err)
    }
}

function feedbackvalue(val) {
    if (old != null) {
        document.getElementById(old).style.cssText = "transform : null";
        old = val;
        document.getElementById(val).style.cssText = "transform : scale(1.5)";
        feedval = val;
    } else {
        old = val;
        document.getElementById(val).style.cssText = "transform : scale(1.5)";
        feedval = val;
    }
    val = null;
}

function errorMessagesValidations() {
    if (document.getElementById('email').value != '' && ValidateEmail(document.getElementById('email').value))
        document.getElementById('myText3').innerHTML = '';
    else if (document.getElementById('email').value == '')
        document.getElementById('myText3').innerHTML = 'Please include your email address.';
    else if (!ValidateEmail(document.getElementById('email').value))
        document.getElementById('myText3').innerHTML = 'Invalid email';
    if (document.getElementById('fname').value != '')
        document.getElementById("myText").innerHTML = '';
    else if (document.getElementById('fname').value == '') {
        document.getElementById("myText").innerHTML = 'Please include your name.';
    }
    if (document.getElementById('lname').value != '')
        document.getElementById("lastNameText").innerHTML = '';
    else if (document.getElementById('lname').value == '') {
        document.getElementById("lastNameText").innerHTML = 'Please include your last name.';
    }
    if (document.getElementById('phone').value != '')
        document.getElementById("phoneText").innerHTML = '';
    else if (document.getElementById('phone').value == '') {
        document.getElementById("phoneText").innerHTML = 'Please include your phone.';
    }
}
if (document.getElementById("fname")) {
    document.getElementById("fname").attachEvent("onchange", function () { //call function here} )
        setTimeout(errorMessagesValidations(), 1000);
    })
}

function getcomment() {
    try {
        const Customerid = customerid;
        let comment = ''; //document.getElementById("comment").value;
        let phonenum = ''; //document.getElementById('phone').value + document.getElementById('phoneExtended').value;
        let body = {
            header: {},
            "userid": Customerid,
            "Address": phonenum,
            "Channel": "MOBILE",
            "ContactId": ContactIdd,
            "Feedback": feedval,
            "Comment": comment
        };
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
            }
        });
        if(ContactIdd!="" && feedval){
        xhr.open("PUT", feedbackAPIURL);
        xhr.setRequestHeader("Content-Type", "text/plain");
        xhr.send(JSON.stringify(body));
        document.getElementById("fname").value = '';
        document.getElementById("email").value = '';
        ContactIdd = '';
        document.getElementById(old).style.cssText = "transform : null";
        }
        old = null;
    } catch (ex) {}
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("showhide").style.display = "none";
    window.parent.postMessage({
        height: '50px',
        width: '150px'
    }, '*');

    i = true;
    // myFunction();
}

function updateHeight() {
    window.parent.postMessage({
        height: '100px',
        width: '100px'
    }, '*');
}

function closeForm() {
    //document.getElementById("showhide").style.display = "block";
    document.getElementById("flagContainer").style.display = "block";
    document.getElementById("myForm").style.display = "none";
    i = false;
    // myFunction();
}

function closeFormDuringChat() {
    //document.getElementById("showhide").style.display = "block";
    document.getElementById("flagContainer").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    i = false;
    // myFunction();
}

function hidethanks() {
    document.getElementById("Thanks").style.display = "none";
    document.getElementById("showhide").style.display = "block";
    document.getElementById("myDIV").style.display = "none";
    if (source == 'MOBILE') {
        var a = document.getElementById("flagContainer");
        a.style.display = "block";
        var x = document.getElementById("showhide");
        x.style.display = "none";

    } else if (source == 'WEB') {
        var x = document.getElementById("showhide");
        x.style.display = "block";
        var a = document.getElementById("flagContainer");
        a.style.display = "none";
    }
    window.parent.postMessage('IframeWidthAdjusted', '*');
    window.parent.postMessage('ChatMinimized', '*');
    localStorage.clear();
}

function checkvalue() {
    if (i = true) {
        openForm();
    } else {
        closeForm();
    }
}

// function myFunction() {
//     if (i) {
//         document.getElementById("myImg").src = "assets/img/DialectOpenChat-05.png";

//     } else {
//         document.getElementById("myImg").src = "assets/img/DialectOpenChat-05.svg";
//     }
//}

function show() {
    var x = document.getElementById("myDIV");
    x.style.display = "block";
}

function hide() {
    var x = document.getElementById("myDIV");
    x.style.display = "none";
    hidesendbutton();
}

function minimizeForm() {
    try {
        window.parent.postMessage('IframeHeightMinimized', '*');
        window.parent.postMessage('ChatMinimized', '*');
        var x = document.getElementById("myDIV");
        x.style.display = "none";
        var x = document.getElementById("showhide");
        x.style.display = "none";
        document.getElementById("flagContainer").style.display = "none";
        document.getElementById("activeChat").style.display = "block";
        document.getElementById("myForm").style.display = "none";
        document.getElementById("Thanks").style.display = "none";
        document.getElementById("myForm").style.display = "none";
        document.getElementById("thanks-container").style.display = "none";
    } catch (ex) {}
}

function showChatForm() {
    setWorkingHours();
    window.parent.postMessage('IframeHeightMaximized', '*');
    window.parent.postMessage('ChatExpanded', '*');
    // var x = document.getElementById("showhide");
    // x.style.display = "none";
    // x.style.opacity = 0;
    // var y = document.getElementById("myImg");
    // y.style.display = "none";
    // y.style.opacity = 0;
}

function endchatnow() {
    if (confirm('Are you sure you want to leave?')) {
        try {
            clearSession()
            deleteRecordfromDBTable();
            if (inAgentJoined) {
                document.getElementById("Thanks").style.display = "block";
                document.getElementById("myDIV").style.display = "none";
                document.getElementById('phoneExtended').value = '';
                window.parent.postMessage('IframeHeightMaximized', '*');
                window.parent.postMessage('ChatExpanded', '*');
            } else {
                showChatIcon();
                window.parent.postMessage('IframeWidthAdjusted', '*');
            }
        } catch (err) {
            console.error(err)
            showChatIcon();
        }
    }
}

function clearSession() {
    try{
    if (chatSession)
        chatSession.endChat(function () {
            clearStorage();
        })
    }
    catch(ex){}
}
let showError = [];

function showChatIcon() {
    document.getElementById("showhide").style.display = "block";
    document.getElementById("myDIV").style.display = "none";
}
window.onbeforeunload = function () {
    clearSession();
    clearStorage();
}

function clearStorage() {
    localStorage.setItem('chatActive', false);
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('phone');
    localStorage.removeItem('phoneExtended');
    localStorage.removeItem('Message');
    localStorage.removeItem('LastBrowsedURL');
    localStorage.setItem('chatExpirytime', 0);
}

function changeColor() {
    document.body.style.color = "red";
    return false;
}

function submitme() {
    var isTrue = false;
    transcript = [];
    var firstName = '';
    var lastName = '';
    var phone = '';
    var email = '';
    var isfirstNameValid = false;
    var islastNameValid = false;
    var isphoneValid = false;
    var isTopicValid = false;
    var isSubjectValid = false;
    // document.getElementById('phone').value = firstTimeDialCode;
    if (document.getElementById('fname').value != '') {
        firstName = document.getElementById('fname').value;
        isfirstNameValid = true;
        showError[0] = "";
        document.getElementById("myText").innerHTML = showError[0];
    } else {
        if (widgetLangauge == 'en') {
            showError[0] = "Please include your name.";
        } else if (widgetLangauge == 'de') {
            showError[0] = "Vorname darf nicht leer sein";
        } else if (widgetLangauge == 'fr') {
            showError[0] = "Le prénom ne peut pas être vide";
        } else if (widgetLangauge == 'fr-ca') {
            showError[0] = "Le prénom ne peut pas être vide";
        } else if (widgetLangauge == 'es') {
            showError[0] = "El nombre no puede estar vacío";
        } else if (widgetLangauge == 'es-mx') {
            showError[0] = "El nombre no puede estar vacío";
        } else if (widgetLangauge == 'pt') {
            showError[0] = "O primeiro nome não pode estar vazio";
        } else {
            showError[0] = "First Name cannot be empty";
        }
        //document.getElementById('fname').placeholder = 'First Name: *'
        document.getElementById("myText").innerHTML = showError[0];
        isfirstNameValid = false;
    }
    if (document.getElementById('lname').value != '') {
        lastName = document.getElementById('lname').value;
        showError[1] = "";
        document.getElementById("lastNameText").innerHTML = showError[1];
        islastNameValid = true;
    } else {
        isTrue = true;
        islastNameValid = false;
        if (widgetLangauge == 'en') {
            showError[1] = "Last Name cannot be empty";
        } else if (widgetLangauge == 'de') {
            showError[1] = "Nachname darf nicht leer sein";
        } else if (widgetLangauge == 'fr') {
            showError[1] = "Le nom de famille ne peut pas être vide";
        } else if (widgetLangauge == 'fr-ca') {
            showError[1] = "Le nom de famille ne peut pas être vide";
        } else if (widgetLangauge == 'es') {
            showError[1] = "El apellido no puede estar vacío";
        } else if (widgetLangauge == 'es-mx') {
            showError[1] = "El apellido no puede estar vacío";
        } else if (widgetLangauge == 'pt') {
            showError[1] = "O sobrenome não pode estar vazio";
        }
        //document.getElementById('lname').placeholder = 'Last Name: *'
        document.getElementById("myText1").innerHTML = showError[1];
    }
    if ((document.getElementById('phone').value != '' && document.getElementById('phoneExtended').value != '') && (phonenumber(document.getElementById('phone').value + document.getElementById('phoneExtended').value))) {
        phone = document.getElementById('phone').value + document.getElementById('phoneExtended').value;
        isphoneValid = true;
        showError[4] = "";
        //  document.getElementById("myText2").innerHTML = showError[2];
        //document.getElementById('phone').placeholder = 'Phone: *';
        showError[4] = "";
        document.getElementById("myText4").innerHTML = showError[4];

    } else if ((document.getElementById('phone').value != '' && document.getElementById('phoneExtended').value != '') && (phonenumber(document.getElementById('phone').value + document.getElementById('phoneExtended').value))) {

        isphoneValid = false;
        if (widgetLangauge == 'en') {
            showError[4] = "Please include your email address.";
        } else if (widgetLangauge == 'de') {
            showError[4] = "Ungültiges Telefon";
        } else if (widgetLangauge == 'fr') {
            showError[4] = "Téléphone invalide";
        } else if (widgetLangauge == 'fr-ca') {
            showError[4] = "Téléphone invalide";
        } else if (widgetLangauge == 'es') {
            showError[4] = "Teléfono inválido";
        } else if (widgetLangauge == 'es-mx') {
            showError[4] = "Teléfono inválido";
        } else if (widgetLangauge == 'pt') {
            showError[4] = "Telefone inválido";
        }
        document.getElementById("myText4").innerHTML = showError[4];

    } else {
        if (widgetLangauge == 'en') {
            showError[4] = "Phone cannot be empty";
        } else if (widgetLangauge == 'de') {
            showError[4] = "Telefon darf nicht leer sein";
        } else if (widgetLangauge == 'fr') {
            showError[4] = "Le téléphone ne peut pas être vide";
        } else if (widgetLangauge == 'fr-ca') {
            showError[4] = "Le téléphone ne peut pas être vide";
        } else if (widgetLangauge == 'es') {
            showError[4] = "El teléfono no puede estar vacío";
        } else if (widgetLangauge == 'es-mx') {
            showError[4] = "El teléfono no puede estar vacío";
        } else if (widgetLangauge == 'pt') {
            showError[4] = "Telefone não pode estar vazio";
        }
        document.getElementById("myText4").innerHTML = showError[4];

    }

    if ((document.getElementById('phone').value != '')) {
        phone = document.getElementById('phone').value;
        isphoneValid = true;
        showError[4] = "";
        //  document.getElementById("myText2").innerHTML = showError[2];
        //document.getElementById('phone').placeholder = 'Phone: *';
        showError[4] = "";
        document.getElementById("phoneText").innerHTML = showError[4];

    } 
    else {
        isphoneValid = false;
        if (widgetLangauge == 'en') {
            showError[4] = "Phone cannot be empty";
        } else if (widgetLangauge == 'de') {
            showError[4] = "Telefon darf nicht leer sein";
        } else if (widgetLangauge == 'fr') {
            showError[4] = "Le téléphone ne peut pas être vide";
        } else if (widgetLangauge == 'fr-ca') {
            showError[4] = "Le téléphone ne peut pas être vide";
        } else if (widgetLangauge == 'es') {
            showError[4] = "El teléfono no puede estar vacío";
        } else if (widgetLangauge == 'es-mx') {
            showError[4] = "El teléfono no puede estar vacío";
        } else if (widgetLangauge == 'pt') {
            showError[4] = "Telefone não pode estar vazio";
        }
        document.getElementById("phoneText").innerHTML = showError[4];

    }

    if (document.getElementById('email').value != '' && ValidateEmail(document.getElementById('email').value)) {
        email = document.getElementById('email').value;
        isemailValid = true;
        showError[2] = '';
        document.getElementById("myText3").innerHTML = showError[2];
    } else if (document.getElementById('email').value != '') {
        isemailValid = false;
        if (widgetLangauge == 'en') {
            showError[2] = "Invalid email";
        } else if (widgetLangauge == 'de') {
            showError[2] = "Ungültige E-Mail";
        } else if (widgetLangauge == 'fr') {
            showError[2] = "Email invalide";
        } else if (widgetLangauge == 'fr-ca') {
            showError[2] = "Email invalide";
        } else if (widgetLangauge == 'es') {
            showError[2] = "Correo electrónico inválido";
        } else if (widgetLangauge == 'es-mx') {
            showError[2] = "Correo electrónico inválido";
        } else if (widgetLangauge == 'pt') {
            showError[2] = "E-mail inválido";
        } else {
            showError[2] = "Invalid email";
        }
        document.getElementById("myText3").innerHTML = showError[2];
    } else if (document.getElementById('email').value == '') {
        showError[2] = 'Please include your email address.';
        document.getElementById("myText3").innerHTML = showError[2];

    } else {
        showError[2] = "";
        document.getElementById("myText3").innerHTML = showError[2];
    }
    //For Topic Selection
    if (selectedTopic == '' || selectedTopic.includes('select a topic')) {
        isTopicValid = false;
        showError[4] = "Please select a topic.";
        document.getElementById("myText4").innerHTML = showError[4];

    } else {
        showError[4] = "";
        isTopicValid = true;
        document.getElementById("myText4").innerHTML = showError[4];
    }
    if (selectedSubject == '' || selectedSubject.includes('select a subject')) {
        showError[4] = "Please include a subject.";
        isValidSubject = false;
        document.getElementById("myText5").innerHTML = showError[4];

    } else {
        showError[4] = "";
        isValidSubject = true;
        document.getElementById("myText5").innerHTML = showError[4];
    }
    if (!isfirstNameValid && !islastNameValid && !isemailValid && !isValidSubject && !isTopicValid) {
        isTrue = true;
        showError[2] = "*";
        //  document.getElementById("myText2").innerHTML = showError[2];
        //document.getElementById('phone').placeholder = 'Phone: *';
    }
    if (isfirstNameValid && islastNameValid && isphoneValid && isemailValid && isValidSubject && isTopicValid) {
        //document.getElementById("flagContainer").style.display = "none";
        document.getElementById("flagContainer").style.display = "none";
        connectChatMethods(firstName, lastName, phone, email, selectedTopic, selectedSubject);
    }
    //else if (isTrue == true) {
    //     // alert('No way');
    //     if (document.getElementById('phone').value && document.getElementById('phoneExtended').value && document.getElementById('email').value)
    //         document.getElementById("phone").required = true;
    // }
}

function SendMessage() {
    //  newobje.sendMessage(function { message: 'Hello', contentType: 'text/plain' });
}

function failureHandler(error) {
    // chat failed
    document.getElementById("disableEndChat").disabled = false;
}
$(document).ready((a) => {
    connect.ChatInterface.init({
        containerId: 'root', // This is the id of the container where you want the widget to reside
    });
    getUserDataFromlocalStorage();
});
// async function sendChat() {

//     var msg = document.getElementById("inputfield").value;
//     console.log("Clicked with message input field" + msg);
//     var e = jQuery.Event("keypress");
//     e.keyCode = 13
//     $('#inputfield').focus();
//     $('#inputfield').trigger(e);
//     var eve = element.dispatchEvent(new KeyboardEvent('keydown', {
//         'key': '13'
//     }));
//     $('#inputfield').trigger(eve);
//     console.log('Event is this', e);
//     console.log('Event is this', eve);
// }
function sendChat() {
    var message = document.getElementById("msgContent").value;

    Successsession.controller.sendMessage({
        message: message,
        contentType: "text/plain"
    })
}

//Chat Transcript Functions Start
function hideTranscript() {
    document.getElementById("myModal").style.display = "none";
    const mainDiv = document.getElementById('chatHistory');
    mainDiv.innerHTML = '';
}

function showTranscript() {
    document.getElementById("myModal").style.display = "block";
    const mainDiv = document.getElementById('chatHistory');
    transcript.forEach((item, index) => {
        if (item.ParticipantRole === 'AGENT' || item.ParticipantRole === 'SYSTEM') mainDiv.innerHTML += createAgentDiv(item);
        else mainDiv.innerHTML += createCustomerDiv(item);
    })
}

function createAgentDiv(message) {
    const agentDiv = document.createElement('div');
    agentDiv.className = 'agent';
    agentDiv.innerHTML = createNameSpan(message.DisplayName) + ' ' + createNameSpan(getTime(message.AbsoluteTime)) + '<br>' + createMessageSpan(message.Content);
    return agentDiv.outerHTML;
}

function createCustomerDiv(message) {
    const customerDiv = document.createElement('div');
    customerDiv.className = 'customer';
    customerDiv.innerHTML = createNameSpan(message.DisplayName) + ' ' + createNameSpan(getTime(message.AbsoluteTime)) + '<br>' + createMessageSpan(message.Content);
    return customerDiv.outerHTML;
}

function createNameSpan(name) {
    const span = document.createElement('span');
    span.className = 'name';
    span.innerHTML = name;
    return span.outerHTML;
}

function createMessageSpan(message) {
    const span = document.createElement('span');
    span.className = 'message';
    span.innerHTML = message;
    return span.outerHTML;
}

function getTime(Timestamp) {
    var date = new Date(Timestamp)
    var year = date.getFullYear();
    var month = (date.getMonth() + 1);
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    return formateTime(year, month, day, hour, minute, second);
}

function makeDoubleDigit(x) {
    return (x < 10) ? "0" + x : x;
}

function formateTime(year, month, day, hour, minute, second) {
    return makeDoubleDigit(year) + "-" +
        makeDoubleDigit(month) + "-" +
        makeDoubleDigit(day) + " " +
        makeDoubleDigit(hour) + ":" +
        makeDoubleDigit(minute) + ":" +
        makeDoubleDigit(second);
}

function getPDF() {
    var HTML_Width = $(".canvas_div_pdf").width();
    var HTML_Height = $(".canvas_div_pdf").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
    html2canvas($(".canvas_div_pdf")[0], {
        allowTaint: true
    }).then(function (canvas) {
        canvas.getContext('2d');
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
        }
        pdf.save("Chat transcript.pdf");
    });
};
// Chat Transcript functions End


let isValid = false;

function setWorkingHours() {
    //Detect browser language
    inAgentJoined = false;
    var language = window.navigator.userLanguage || window.navigator.language;
    //  alert(language); //works IE/SAFARI/CHROME/FF   
    //Get timestamp in locale
    const now = new Date().getHours()
    //Convert timestamp in GMT/UTC format
    // if (now >= startinghours && now <= closinghours) {
        if (localStorage.getItem('chatActive') == 'true') {
            document.getElementById("myDIV").style.display = "block";
            document.getElementById("textalign").style.display = "block";
            return
        }
        document.getElementById("flagContainer").style.display = "block";
        // alert('we are open');
        isValid = true;
        isTrue = false;
        showError[3] = "";
        document.getElementById("errorMessage").innerHTML = showError[3];
    // } else {
    //     //  alert('we are closed');
    //     isValid = false;
    //     isTrue = true;
    //     document.getElementById("inputform").style.display = "none";
    //     // document.getElementById("flagContainer").style.display = "none";
    //     //document.getElementById("myForm").style.display = "block";
    //     document.getElementById("flagContainer").style.display = "block";
    //     document.getElementById("errorMessageDiv").style.display = "flex";

    //     showError[3] = "<p>Thanks for your message. We're sorry, but our chat is now closed.</p>  <p>To quickly get help with technical issues, billing, or any other queries, please see our <a href='https://communityfibre.zendesk.com/hc/en-gb' target='_blank'> comprehensive range of guides.</a> </p>  <p>Alternatively,   our Customer Service team is available on <b>0800 082 0770</b>, 365 days a year,</p> <p><b>Monday to Friday</b> 8 am - 9 pm </p><p><b>Weekends</b> 9 am - 7 pm.</p>";
    //     document.getElementById("errorMessage").innerHTML = showError[3];

    // }
}

function ValidateEmail(inputText) {
    //var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mailformat = /(.+)@(.+){2,}\.(.+){2,}/;
    if (inputText.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}

function phonenumber(inputtxt) {
    var phoneno = /^\+?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4,50}$/;
    if ((inputtxt.match(phoneno))) {
        return true;
    } else {
        return false;
    }
}

// function detectCustomerLanguage() {
//     try {
//         console.log('user site detected url ', parentUrl);
//         if (widgetLangauge != "")
//             widgetLangauge = widgetLangauge.toLowerCase();
//         if (widgetLangauge == 'pt-br')
//             widgetLangauge = 'pt';
//         if ((widgetLangauge == "en" || widgetLangauge == "de" || widgetLangauge == "es-mx" || widgetLangauge == "es" || widgetLangauge == "fr-ca" || widgetLangauge == "fr" || widgetLangauge == "pt") && widgetLangauge != "") {
//             readJSON(widgetLangauge);
//         } else {
//             widgetLangauge = 'en';
//             readJSON(widgetLangauge);
//         }


//     } catch (err) {
//         widgetLangauge = 'en';
//         readJSON(widgetLangauge);
//     }
// }



function getUserDataFromlocalStorage() {
    let isChatActive = false;

    isChatActive = localStorage.getItem('chatActive');
    let chatStartTime = localStorage.getItem('chatExpirytime');
    let chatStartTimetemp = new Date(chatStartTime);
    let currentDate = new Date();
    if (currentDate.getMinutes() - chatStartTimetemp.getMinutes() > chatExpiryMinutes && isChatActive == "false") {
        localStorage.clear();
    } else if (isChatActive == "true") {
        // let customerName = localStorage.getItem('customerName');
        // let firstName = localStorage.getItem('firstName');
        // let email = localStorage.getItem('email');
        // let topic = localStorage.getItem('topic');
        // let subject = localStorage.getItem('subject');
        // let customerId = localStorage.getItem('customerId');
        // connectChatMethods(firstName, email, topic, subject);
        document.getElementById("flagContainer").style.display = "none";

    }
}

function connectChatMethods(pFirstName, pLastName, pPhone, pEmail, pTopic, pSubject) {
    var username = pFirstName+' '+pLastName;
    document.getElementById("disableEndChat").disabled = true;
    window.parent.postMessage({
        height: '567px',
        width: '100%'
    }, '*');
    window.parent.postMessage('IframeHeightMaximized', '*');
    window.parent.postMessage('ChatExpanded', '*');
    let isChatActive = false;
    isChatActive = localStorage.getItem('chatActive');
    show();
    closeFormDuringChat();
    if (isChatActive == "true") {
        firstName = localStorage.getItem('firstName');
        lastName = localStorage.getItem('lastName');
        phone = localStorage.getItem('phone');
        email = localStorage.getItem('email');
        document.getElementById("flagContainer").style.display = "none";
    }
    //var msg = document.getElementById('message').value;     
    // var enableAttachments = "${enableAttachments}";
    // console.log("Fname ", firstName, lastName, phone, email);
    // console.log('last browse url for api ', parentUrl);
    // console.log('detected widget language ', widgetLangauge);
    let customerAttributes =
        JSON.stringify({
            "customerName": username,
            firstName: pFirstName,
            lastName: pLastName,
            phone: pPhone,
            email: pEmail,
            topic: pTopic,
            subject: pSubject,
            enableAttachments: "true",
            // Src: source,
            // Message: widgetLangauge, //Detectedlanguage[4], //language
            LastBrowsedURL: parentUrl,
            customerId: customerName,
        })
    let newobje = connect.ChatInterface.initiateChat({
        name: username,
        username: username,
        lastName: pLastName,
        phone: pPhone,
        region: region,
        apiGatewayEndpoint: apiGatewayEndpoint,
        contactAttributes: customerAttributes,
        contactFlowId: contactFlowId,
        instanceId: instanceId,
        participantId: localStorage.getItem('participantId'),
        featurePermissions: {
            "ATTACHMENTS": true,
        }
    }, successHandler, failureHandler)
    transcript.push({
        AbsoluteTime: Date.now(),
        ContactId: "54611e31-0c70-47a3-a70b-48cdc8bea9b3",
        Content: '',
        ContentType: "text/plain",
        DisplayName: pFirstName,
        Id: "5c99f6bb-d9c2-49b6-8f29-da3a3e089f60",
        InitialContactId: "54611e31-0c70-47a3-a70b-48cdc8bea9b3",
        ParticipantId: "a66dca4c-5c57-4e73-81e2-7db1da9218c3",
        ParticipantRole: "CUSTOMER",
        Type: "MESSAGE"
    })

    function successHandler(chatSession) {
        Successsession = chatSession;
        localStorage.setItem('chatActive', true);
        window.chatSession = chatSession;
        ContactIdd = chatSession.contactId;
        // chat connected
        $("#divSpinner").fadeOut(200);
        $('#chatWrapper').fadeIn(400);
        document.getElementById("disableEndChat").disabled = false;
        //Change the incoming data set
        chatSession.incomingItemDecorator = function (item) {
            if (["SYSTEM_MESSAGE"].indexOf(item.displayName) !== -1) {
                if (widgetLangauge == 'en') {
                    item.displayName = "CFL Support";
                } else if (widgetLangauge == 'pt') {
                    item.displayName = "Dialect Assistente";
                } else if (widgetLangauge == 'es-mx') {
                    item.displayName = "Dialect Asistente";
                } else if (widgetLangauge == 'es') {
                    item.displayName = "Dialect Asistente";
                } else if (widgetLangauge == 'fr-ca') {
                    item.displayName = "Dialect Assistant";
                } else if (widgetLangauge == 'fr') {
                    item.displayName = "Dialect Assistant";
                } else if (widgetLangauge == 'de') {
                    item.displayName = "Dialect Assistent";
                }
            }
            if (["BOT"].indexOf(item.displayName) !== -1) {
                if (widgetLangauge == 'en') {
                    item.displayName = "Dialect Assistant";
                } else if (widgetLangauge == 'pt') {
                    item.displayName = "Dialect Assistente";
                } else if (widgetLangauge == 'es-mx') {
                    item.displayName = "Dialect Asistente";
                } else if (widgetLangauge == 'es') {
                    item.displayName = "Dialect Asistente";
                } else if (widgetLangauge == 'fr-ca') {
                    item.displayName = "Dialect Assistant";
                } else if (widgetLangauge == 'fr') {
                    item.displayName = "Dialect Assistant";
                } else if (widgetLangauge == 'de') {
                    item.displayName = "Dialect Assistent";
                }
            }
            if (chatSession.transcript.length > 0) {
                var transcriptItem = chatSession.transcript[chatSession.transcript.length - 1];
                if (transcriptItem.transportDetails.direction === "Incoming") {
                    var chatDescription = "Chat Initiated";
                    var name = transcriptItem.displayName;
                    if (["prod", "$LATEST", "AI Assistant", "SYSTEM_MESSAGE", "System Message"].indexOf(name) === -1) {
                        if (widgetLangauge == 'en') {
                            chatDescription = "You are now chatting with " + name;
                        } else if (widgetLangauge == 'de') {
                            chatDescription = "Sie chatten jetzt mit" + name;
                        } else if (widgetLangauge == 'es-mx') {
                            chatDescription = "Ahora estás chateando con" + name;
                        } else if (widgetLangauge == 'es') {
                            chatDescription = "Ahora estás chateando con" + name;
                        } else if (widgetLangauge == 'fr-ca') {
                            chatDescription = "Vous discutez maintenant avec" + name;
                        } else if (widgetLangauge == 'fr') {
                            chatDescription = "Vous discutez maintenant avec" + name;
                        } else if (widgetLangauge == 'pt') {
                            chatDescription = "Você agora está conversando com" + name;
                        }
                    }
                    // document.getElementById("chatDescription").innerHTML = chatDescription;
                }
            }
            return item;
        }

        chatSession.onIncoming(function (data) {
            playNotificationSound();
            if (data.ContentType == "text/plain") {
                transcript.push(data);
                if (widgetLangauge == 'en') {
                    if (data.Content == 'The agent has now disconnected, if you wish to reopen this chat with another agent, please send a message in the next 24 hours') {
                        //document.getElementById("Thanks").style.display = "block";
                        //hide();
                    }
                } else if (widgetLangauge == 'pt') {
                    if (data.Content == 'The agent has disconnected') {
                        data.Content = 'O agente se desconectou';
                        document.getElementById("Thanks").style.display = "block";
                        hide();
                    } else if (data.Content.includes('has joined the chat')) {
                        data.Content = '';
                    }
                } else if (widgetLangauge == 'es-mx') {
                    if (data.Content == 'The agent has disconnected') {
                        data.Content = 'El agente se ha desconectado';
                        document.getElementById("Thanks").style.display = "block";
                        hide();
                    }
                } else if (widgetLangauge == 'es') {
                    if (data.Content == 'The agent has disconnected') {
                        data.Content = 'El agente se ha desconectado';
                        document.getElementById("Thanks").style.display = "block";
                        hide();
                    }
                } else if (widgetLangauge == 'fr-ca') {
                    if (data.Content == 'The agent has disconnected') {
                        data.Content = 'L agent sest déconnecté';
                        document.getElementById("Thanks").style.display = "block";
                        hide();
                    }
                } else if (widgetLangauge == 'fr') {
                    if (data.Content == 'The agent has disconnected') {
                        data.Content = 'L agent sest déconnecté';
                        document.getElementById("Thanks").style.display = "block";
                        hide();
                    }
                } else if (widgetLangauge == 'de') {
                    if (data.Content == 'The agent has disconnected') {
                        data.Content = 'Der Agent hat die Verbindung getrennt';
                        document.getElementById("Thanks").style.display = "block";
                        hide();
                    }
                }
            } else if (data.ContentType == 'application/vnd.amazonaws.connect.event.participant.joined') {
                ContactIdd = data.ContactId;
                inAgentJoined = true;
            } else if (data.ContentType == 'application/vnd.amazonaws.connect.event.participant.left') {
                ContactIdd = data.ContactId;
            }
            localStorage.setItem('participantId', data.ParticipantId);
            customerChatSession = connect.ChatSession.create({
                chatDetails: { // REQUIRED
                    contactId: data.ContactId, // REQUIRED
                    participantId: data.ParticipantId, // REQUIRED
                    participantToken: "...", // REQUIRED
                },
                options: { // optional
                    region: "eu-central-1", // optional, defaults to `region` set in `connect.ChatSession.setGlobalConfig()`
                },
                type: connect.ChatSession.SessionTypes.CUSTOMER, // REQUIRED
            });
        });
        chatSession.onOutgoing(function (data) {
            if (data.ContentType == "text/plain") {
                transcript.push(data);
            }
        });
        chatSession.onChatDisconnected(function (data) {
            //document.getElementById("Thanks").style.display = "block";
            //hide();
            localStorage.clear();
            localStorage.setItem("activeChat", false);
        });
        connect.ChatInterface.init({
            containerId: 'root',
            headerConfig: {
                isHTML: true,
                render: () => {
                    closeFormDuringChat();
                    return (`
                                    <div style="color: rgb(255 255 255);
                                        background: rgb(0, 0, 0);
                                        margin-top: -1px;">
                                        <p class="firstmessage" id="chatDescription"></p>
                                    </div>
                                    `)
                }
            },
            footerConfig: {
                isHTML: true,

                render: () => {
                    return (` `)
                }
            },
        });
    }
}


function deleteRecordfromDBTable() {
    try {
        clearStorage();
        let body = {
            "contactId": ContactIdd
        };
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", destroyChatAPIURL);
        xhr.setRequestHeader("Content-Type", "text/plain");
        xhr.send(JSON.stringify(body));
    } catch (err) {
        console.error('delete record error ')
    }
}

//For class colors change
function changeClassProperties() {
    elements = document.getElementsByClassName("brand-c-b");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = headersColor;
        elements[i].style.color = textColor;
    }
}

function logoConfigurations() {
    try {
        document.getElementById("logoimg1").src = "assets/img/" + logoImage;
        document.getElementById("logoimg2").src = "assets/img/" + logoImage;
        document.getElementById("logoimg3").src = "assets/img/" + logoImage;
        document.getElementById("logoimg4").src = "assets/img/" + logoImage;
    } catch (ex) {}
}

function minimizeFlagScreen(value) {
    window.parent.postMessage('ChatMinimized', '*');
    document.getElementById("myForm").style.display = "none";
    document.getElementById("flagContainer").style.display = "none";
    document.getElementById("myDIV").style.display = "none";
    var x = document.getElementById("showhide");
    x.style.display = "block";
    if(value == 1)
    window.parent.postMessage('IframeWidthAdjusted', '*');    
}

function expandContinueChat() {
    window.parent.postMessage('ChatExpanded', '*');
    document.getElementById("myDIV").style.display = "block";
    document.getElementById("activeChat").style.display = "none";
    window.parent.postMessage('IframeHeightMaximized', '*');
}

function playNotificationSound() {
    var audio = document.getElementById("notificationSound");
    audio.play();
}
  
