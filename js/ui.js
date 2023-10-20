let topic = document.getElementById('topic');
let selectList = document.createElement("select");
selectList.className = "form-control";
let selectedTopic = '';
let selectedSubject = '';
selectList.addEventListener('change', function handleClick(event) {
    selectedTopic = selectList.value;
    populateSubject(selectList.value)
    clearErrorMessages();
    //submitme();
});
//selectList.onchange = populateSubject(selectList.value);
topics.forEach((item, index) => {
    var option = document.createElement("option");
    // option.onclick = populateSubject(index);
    option.value = item.name;
    option.text = topics.name;
    option.innerHTML = item.name;
    selectList.appendChild(option);
});
topic?.appendChild(selectList);


function clearErrorMessages() {
    if (selectedTopic) document.getElementById('myText4').innerHTML = '';
    if (selectedSubject) document.getElementById('myText5').innerHTML = ''
}
let sales = document.getElementById('Subject');
let selectSubject = document.createElement("select");
selectSubject.className = "form-control";

function populateSubject(selectedValue) {
    let index = topics.findIndex(item => item.name == selectedValue);
    if (index != -1) {
        sales.innerHTML = '';
        selectSubject.innerHTML = '';
        if (topics[index].subjects[0].hasOwnProperty('name')) {
            topics[index].subjects.forEach((item) => {
                var option = document.createElement("option");
                option.value = item.name;
                option.text = item.name;
                option.innerHTML = item.name;
                selectedSubject = topics[index].subjects[0].name;
                selectSubject.appendChild(option);
            });
            sales.appendChild(selectSubject);
        }
    }
}
selectSubject.addEventListener('change', function handleClick(event) {
    selectedSubject = selectSubject.value;
    console.log('selected subject ', selectedSubject)
});

//Create and append the options
function showHideScreensBasedOnConfig() {
    if (localStorage.getItem("chatActive") == 'true') {
        document.getElementById("myDIV").style.display = "block";
        document.getElementById("textalign").style.display = "block";
        return
    } else {
        if (defaultLanguage != "") {
            widgetLangauge = defaultLanguage;
            document.getElementById("myForm").style.display = "none";
            document.getElementById("showhide").style.display = "block";
            document.getElementById("flagContainer").style.display = "none";
        } else {
            document.getElementById("myForm").style.display = "none";
            document.getElementById("showhide").style.display = "block";
            document.getElementById("flagContainer").style.display = "none";
        }

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
    }
}

function getLanguageConfigurations(event) {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        //alert('Opera');
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        //alert('Edge');
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        let index = event.path[1];
        flagIndex = index.id
        if (flagIndex != "-1")
            captureFlagAttributes(parseInt(flagIndex));
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        let index = event.path[1];
        flagIndex = index.id
        if (flagIndex != "-1")
            captureFlagAttributes(parseInt(flagIndex));
        //alert('Safari');
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        let index = event.explicitOriginalTarget.parentElement.id;
        flagIndex = parseInt(index);
        if (flagIndex != "-1")
            captureFlagAttributes(parseInt(flagIndex));
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        //alert('IE');
    } else {
        let index = event.path[1];
        flagIndex = index.id
        if (flagIndex != "-1")
            captureFlagAttributes(parseInt(flagIndex));
    }
}

function captureFlagAttributes(Index) {
    document.getElementById('errorMessageDiv').style.display = 'none';
    languages.forEach((item, index) => {
        if (index == Index) {
            iti.setCountry(item.twoLetterCountryCode);
            //document.getElementById("phone").value = item.numberCode;
            if (widgetLangauge && widgetLangauge != '')
                readJSON(item.langCode);
            else
                readJSON('en');
            widgetLangauge = item.langCode;
            document.getElementById("myForm").style.display = "block";
            document.getElementById("showhide").style.display = "none";
            if (localStorage.getItem('chatActive') == "true")
                document.getElementById("flagContainer").style.display = "none";
            else
                document.getElementById("flagContainer").style.display = "none";
        }
    })
}