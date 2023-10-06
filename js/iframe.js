function getParams() {
  const params = new URLSearchParams(window.location.search)
  for (const param of params) {
  }
}
if(document.getElementById('i-frame')) {
}
else{
var div = document.createElement('div');
div.style.cssText = "position: absolute; right: 0px; bottom: 0px;";
var iframe = document.createElement('iframe');
iframe.style.cssText = "position: fixed; right: 0px; bottom: 0px; border: none; height: 50px;  width:110px; z-index:2";
iframe.id = 'i-frame';
iframe.src = 'https://cfl-hobs-omni-chat-prod-lon-01.s3.eu-west-2.amazonaws.com/index.html';
//window.postMessage(parent_url, '*');
document.body.appendChild(iframe);
// div.appendChild(iframe);

window.addEventListener('message', receiveMessage, false);
// window.addEventListener('ApplicationLoaded', receiveMessage, false);
function receiveMessage(event) {
  if (event.data == "loaded") {
    let parent_url = window.location.href;
    let obj = {
      name: "parenturl",
      parentUrl: parent_url
    }
    iframe.contentWindow.postMessage(JSON.stringify(obj), "*");
  }
  else if (event.data == "IframeHeightMinimized") {
    if (window.innerWidth < 769) {
      document.getElementById("i-frame").style.height = '50px'
      document.getElementById("i-frame").style.width = '100%'
      document.getElementById("i-frame").style.zIndex = "1101";
    }
    else {
      document.getElementById("i-frame").style.height = '50px'
      document.getElementById("i-frame").style.width = '435px'
      document.getElementById("i-frame").style.zIndex = "1101";

    }
  }
  else if (event.data == "IframeWidthAdjusted") {
    document.getElementById("i-frame").style.height = '50px'
    document.getElementById("i-frame").style.width = '110px'
    document.getElementById("i-frame").style.zIndex = "1101";
  }
  else if (event.data == "IframeHeightMaximized") {
    if (window.innerWidth < 769) {
      document.getElementById("i-frame").style.height = '567px'
      document.getElementById("i-frame").style.width = '100%'
      document.getElementById("i-frame").style.zIndex = "1101"
    }
    else {
      document.getElementById("i-frame").style.height = '567px'
      document.getElementById("i-frame").style.width = '445px'
      document.getElementById("i-frame").style.zIndex = "1101";
    }
    document.getElementById("i-frame").style.zIndex = "1101";
  }
  else if (event.data == "ChatMinimized") {
    document.getElementById("i-frame").classList.add('livechat-collapsed');
    document.getElementById("i-frame").classList.remove('livechat-expanded');
  }
  else if (event.data == "ChatExpanded") {
    document.getElementById("i-frame").classList.add('livechat-expanded');
    document.getElementById("i-frame").classList.remove('livechat-collapsed');
  }
  //   else {
  //     document.getElementById("i-frame").style.height = '50px'
  //     document.getElementById("i-frame").style.width = '435px'
  //     document.getElementById("i-frame").style.zIndex = "999";
  //   }
}

iframe.onload = function () {
  iframe.contentWindow.postMessage('refresh', "*");

}

window.onbeforeunload = function () {
  if (localStorage.getItem("firstName") && localStorage.getItem("lastName") && localStorage.getItem("phone")) {
    localStorage.setItem('chatExpirytime', new Date());
  }
};
};





