window.onload  = function(){
    document.querySelector('.loading').style.display = "none";
    document.querySelector('.whatsapp').style.display = "block";
}

let users = [
     {id:7920723, name:"Morenikeji Folarin", text:"Hello world!!...", time:"7:02",newMsg:1},
     {id:2200299, name:"Omosanya Ola", text:"I appreciated:)", time:"18:56",newMsg:2},
     {id:12272000, name:"Olaoluwa omosanya", text:"lets talk something bro ?", time:"13:02",newMsg:5},
     {id:8489802, name:"Mr Adeola", text:"help please bro...", time:"15:00",newMsg:5},
     {id:12272000, name:"Olaoluwa omosanya", text:"lets talk something bro ?", time:"13:02", newMsg:5}, 
     {id:284527, name:"Mr Sam", text:"I love you javascipt :(", time:"7:02",newMsg:12}, 
     {id:858980, name:"Mark Zukerburg", text:"hope you are enjoying facebook..", time:"15:00",newMsg:5},
     {id:4188281, name:"Ibrahim", text:"i am a fullstack developer...", time:"7:02",newMsg:10},
     {id:928723, name:"Heritage", text:"How did you do this...", time:"7:02",newMsg:1},
     {id:1222000, name:"Olaoluwa omosanya", text:"lets talk something bro ?", time:"13:02", newMsg:5}, 
     {id:284527, name:"Olamilekan", text:"I love you :(", time:"7:02",newMsg:12}, 
     {id:1712110, name:"Femi", text:"Thank you boss!", time:"9:22",newMsg:3}];
let wallpaperTheme = ["https://dl.dropbox.com/s/748lrepgl77hlfm/asmani.jpeg","https://dl.dropbox.com/s/8td2sl0fmzlqco0/begani.jpeg","https://dl.dropbox.com/s/41cjs3au49pknx3/brown.jpeg","https://dl.dropbox.com/s/l0vzlor1hewn00l/green.jpeg", "https://dl.dropbox.com/s/qoa0pulm1eywiy4/light%20yellow.jpeg","https://dl.dropbox.com/s/nyjckrrtr69hvkm/red.jpeg","https://dl.dropbox.com/s/nnzxthjp4kb40fa/theme-black.jpeg","https://dl.dropbox.com/s/s69y25xkgo2zk4i/theme-blue.jpeg"]

// Auto response Messages 
let abc=["How do you think we can help increase our services to you. <quote> <b> Happy new Year in advance </b> <quote>", "How may we help you? <quote> <b> Happy new Year in advance </b> <quote>"]
let hi=["hello Ma 😘😘🥰","hello dear😅😅","hello world 😆🤣😂","Hello, Tell me something about you :)","Hello Darling♥️","Hi Beta😂","Hello Bete🤣"];
let no=["no problem","You can come back in the 2 hours","Sorry!! The service is Unavailablbe", "OOPS!!! TRY AGAIN LATER !!!"];
let what=["What is your name nigga?🤣","Nothing","😂","😏"];
let blank=["Please, do not send blank message", "   ", "You must write something like : I love you 😘😅", "please do not reply with blank 😏"];
let welcome = ["Nice to meet you dear :)","Welcome ! <br> You are highly welcome to our whatsapp page 😆😅", "hey Cute dude 🥰"];
let intro = ["My name is  Robot 2.0", "I am Robot 2.0 created by <strong> <span style='color:red'>Holarmy Tech</span></strong>.", "I am technical Robot", "My owner name is  🥰 <strong> <span style='color:purple'>Holarmy Tech</span></strong>."];

users.forEach(function(obj){
    let id = obj.id;
    let name = obj.name;
    let text = obj.text;
    let newMsg = obj.newMsg;
    let time = obj.time;
    document.querySelector(".w-chat").innerHTML += "<div onclick='arrayId(this)' data-chat-id = "+id+"> <div> <img src='https://api.sololearn.com/Uploads/Avatars/"+id+".jpg' alt="+name+"> </div> <div class='chat-fr'> <span> "+name+ " </span> <span>" 
    +text+ " </span> </div> <div class='chat-date'> <span>" +time+ "</span> <span>" +newMsg+ "</span> </div></div>";
})

// Status stories random user from chat
let status_users = [];
for (let i=0; i < 10; i++){
    let ran_num = Math.floor(Math.random()*users.length);
    if(!status_users.includes(ran_num)){
        status_users.push(ran_num);
    }
}
console.log(status_users);
for(let j = 0; j<status_users.length; j++){
    // console.log(users[j].name);
    document.querySelector('.w-stories').innerHTML +="<div class='stories'><div><img src='https://api.sololearn.com/Uploads/Avatars/"+users[status_users[j]].id+".jpg' alt="+users[status_users[j]].name+"><i class='fas fa-plus-circle'></i></div><div class='chat-fr'><span> " + users[status_users[j]].name + " </span><span>" + users[status_users[j]].time + "</span></div></div>"; 
}

// call tab random user from users array
let call_users = [];
for (let i=0; i < 5; i++){  
    let ran_num = Math.floor(Math.random()*users.length);
    if(!call_users.includes(ran_num)){
        call_users.push(ran_num);
    }
}
for(let j = 0; j<call_users.length; j++){
    document.querySelector('.w-calls').innerHTML +="<div><div> <img src='https://api.sololearn.com/Uploads/Avatars/"+users[call_users[j]].id+".jpg' alt="+users[call_users[j]].name+"></div><div class='chat-fr'><span>" + users[call_users[j]].name + "</span><span> <i class='fas fa-long-arrow-alt-up'></i> <span> (6) Today, " + users[call_users[j]].time + " </span></span></div><div class='call-icon'><i class='fas fa-phone'></i></div></div>"; 
    // console.log(users[j].name);
}

let home_chat = document.querySelectorAll(".w-chat")[0];
let stories = document.querySelectorAll(".w-stories")[0];
let calls = document.querySelectorAll(".w-calls")[0];
let plus_icon = document.querySelectorAll(".fa-plus-circle")[0];
let homeChat_icon = document.querySelectorAll(".fixed-new-chat > img")[0];
let stories_icon = document.querySelectorAll(".fixed-status-icon1")[0];
let call_icon = document.querySelectorAll(".fixed-status-icon2")[0];
function ShowStatus(){
        home_chat.style.marginLeft = "-100%";
        calls.style.marginLeft = "-100%";
        stories.style.marginLeft = "1px";
        plus_icon.style.left = "42px";
        stories_icon.style.display = "block";
        homeChat_icon.style.right = "-100%";
        call_icon.style.visibility = "hidden";
        console.log("ok");
    }
function ShowCalls(){
        stories_icon.style.display = "none";
        home_chat.style.marginLeft = "-100%";
        stories.style.marginLeft = "-100%";
        calls.style.marginLeft = "1px";
        plus_icon.style.left = "-100%";
        stories_icon.style.right = "-100%";    
        homeChat_icon.style.right = "-100%";
        call_icon.style.visibility = "visible";
    }
function ShowHomechat(){
        home_chat.style.marginLeft = "1px";
        calls.style.marginLeft = "-100%";
        stories.style.marginLeft = "-100%";
        plus_icon.style.left = "-100%";
        homeChat_icon.style.right = "15px";
        stories_icon.style.right = "-100%";
        call_icon.style.visibility = "hidden";
        stories_icon.style.display = "none";
}
var homeChat = document.querySelector(".whole-body");
var chatPage = document.querySelector(".chat-page");
var textHelp = document.querySelector('.msg-left > span');
var wallpaperBody = document.body;
var chatBtmWallpaper = document.querySelector(".w-chat-body > .chat-bottom");
var wallpaperTheme1 = document.querySelector(".wallpaper-theme");
var chatPage = document.querySelector(".chat-page");
var confirmalert = document.querySelector(".confirm-alert");
function arrayId(id){
    //https://api.sololearn.com/Uploads/Avatars/"+id+".jpg
    var userUrl = id.getAttribute("data-chat-id");
    // var userId = userUrl.match(/(\d+)/i)[0];
    let userindex  = users.findIndex(x=> x.id==userUrl);
    homeChat.style.display = "none";
    chatPage.style.display = "block";
    let imgIndex = Math.floor(Math.random()*wallpaperTheme.length);
    wallpaperBody.style.backgroundImage = "url('"+wallpaperTheme[imgIndex]+"')";
    chatBtmWallpaper.style.backgroundImage  = "url('"+wallpaperTheme[imgIndex]+"')";
    messageHeader.innerHTML = '<div class="msg-left"><span> <strong style="color:green;">'+users[userindex].name+"</strong> "+rand(welcome)+ ' <span>'+time+'</span> </span></div>';
    // textHelp.textContent;
     messageHeader.innerHTML += '<div class="msg-left"><span style="color:red;font-weight:bolder"> Type -  Help 🙋 <span>'+time+'</span> </span></div>';
    
}
function backHomechat(){
    homeChat.style.display = "block";
    chatPage.style.display = "none";
    wallpaperBody.style.backgroundColor  = "#fff";
    wallpaperBody.style.backgroundImage  = "none";
}

// console.log("Value"+users[0].id)
// W-Chat Script
var micIcon = document.querySelector(".chat-bottom > div > .fa-microphone");
var sendIcon = document.querySelector(".chat-bottom > div > .fa-paper-plane");
var textArea = document.querySelector(".chat-bottom > div > textarea");
var cameraIcon = document.querySelector(".type-inner-icon > div > .fa-camera");
function changeIcon(){
        if(!textArea.value == ""){
        micIcon.style.display = "none";
        sendIcon.style.display = "block";
        sendIcon.style.opacity = "1";
        cameraIcon.style.display = "none";
        }else  {
            micIcon.style.display = "block";
            sendIcon.style.display = "none";
            sendIcon.style.opacity = "0";
            cameraIcon.style.display = "inline-block";
        
        }
}

// chat script...
function rand(arrayName){
     var num = Math.floor(Math.random()*arrayName.length);
     console.log(num);
     var msg = arrayName[num];
    //  console.log(msg);
     return msg;
}
var messageHeader = document.querySelector(".message-header");
function messageWindowLoad(){
    document.querySelector(".onlineText").innerHTML = "online"
}
setTimeout(messageWindowLoad, 2000);
var today = new Date();
var time = today.getHours()+":"+today.getMinutes();
function responseMessage(){
    messageHeader.innerHTML += '<div class="msg-right"><span> ' + textArea.value + ' <span>'+time+'</span> </span></div>';
    document.querySelector(".onlineText").innerHTML = "Typing...";
    setTimeout(function(){
    document.querySelector(".onlineText").innerHTML = "online";
    var userMsg = textArea.value.toLowerCase(); 
    if(userMsg == "hi" || userMsg == "hello" || userMsg == "hy" || userMsg == "hyy" || userMsg == "hii" || userMsg == "helo" || userMsg == "hi bro"){
         messageHeader.innerHTML += '<div class="msg-left"><span> ' + rand(hi) + ' <span>'+time+'</span> </span></div>';
    }else if(userMsg == "kiya" || userMsg.match("hua")|| userMsg == "what" ){
         messageHeader.innerHTML += '<div class="msg-left"><span> ' + rand(what) + ' <span>'+time+'</span> </span></div>';
    }else if(userMsg == "no" || userMsg == "nahi" || userMsg == "never" || userMsg == "not" || userMsg == "ok" ){
         messageHeader.innerHTML += '<div class="msg-left"><span> ' + rand(no) + ' <span>'+time+'</span> </span></div>';
    }else if(userMsg == "who are you" || userMsg == "name" || userMsg == "your name" || userMsg == "nam" || userMsg == "whats your name" || userMsg.match("who") || userMsg.match("name")){
         messageHeader.innerHTML += '<div class="msg-left"><span> ' + rand(intro) + ' <span>'+time+'</span> </span></div>';
    }else if(userMsg == "help" || userMsg == "help me" || userMsg == "help me dear" || userMsg == "help bro"){
         messageHeader.innerHTML += '<div class="msg-left"><span><table><tr><th style="font-weight:bolder;">Type text</th></tr><tr><td>hello,hi,helo,hi</td></tr><tr><td>kiya, what </td></tr><tr><td>nahi, never, not, ok</td></tr><tr><td>nam, whats your name, who are you, name</td></tr><tr><td>blank msg send, full stop send-><strong>.</storng> </td></tr></table> <br> <strong>Note : I will improve this commanc text...</strong><span>'+time+'</span> </span></div>';
    }else {
        messageHeader.innerHTML += '<div class="msg-left"><span> ' + rand(abc)  + ' <span>'+time+'</span> </span></div>';   
     }
     // blank textarea after send message
     textArea.value = "";
     },2000)
}
function nonDevelopError(text){
    messageHeader.innerHTML += '<div class="msg-left"><span>  <strong style="color:red"> Error:</strong> '+text+' <span>'+time+'</span> </span></div>';
}
// Wallpaper Change Theme
function chatHome(){
    wallpaperTheme1.style.marginTop = "-300%";
    confirmalert.style.marginLeft = "-100%";
    setTimeout(function(){wallpaperTheme1.style.display = "none"},100);
    chatPage.style.display = "block";
}
function wallpaperTheme2(){
    wallpaperTheme1.style.marginTop = "0";chatPage.style.display = "none";
    setTimeout(function(){wallpaperTheme1.style.display = "block"},100);
}
var themeView = document.querySelector(".theme-view");
function themeBright(){
    themeView.style.display = "block"
    setTimeout(function(){themeView.style.marginTop = "0";},10);
    confirmalert.style.marginLeft = "-100%";
} 
function backtoWallpaperTheme(){
    themeView.style.marginTop = "-300%";
    setTimeout(function(){themeView.style.display = "none"},1000);
    confirmalert.style.marginLeft = "-100%";
} 
// print wallpaper theme image {}
var imageParent = document.querySelector('.theme-view > div:nth-child(2)');
for(var theme = 0; theme < wallpaperTheme.length; theme++){
    imageParent.innerHTML += '<div> <img src="'+wallpaperTheme[theme]+'" alt="" onclick="wallpaperChange(this)"> <img src="'+wallpaperTheme[theme]+'" alt="" onclick="wallpaperChange(this)"> <img src="'+wallpaperTheme[theme]+'" alt="" onclick="wallpaperChange(this)"> </div>';
}

function wallpaperChange(srcUrl){
    wallpaperBody.style.backgroundImage = "url('"+srcUrl.src+"')";
    chatBtmWallpaper.style.backgroundImage = "url('"+srcUrl.src+"')";
    confirmalert.style.marginLeft = "0";
    backtoWallpaperTheme();
    chatHome();
}

function DefaultWallpaper(){
    wallpaperBody.style.backgroundImage = "url('https://dl.dropbox.com/s/nnzxthjp4kb40fa/theme-black.jpeg')";
    chatBtmWallpaper.style.backgroundImage = "url('https://dl.dropbox.com/s/nnzxthjp4kb40fa/theme-black.jpeg')";
    console.log("defaul");
}
function RemoveWallpaper(){
    wallpaperBody.style.backgroundImage = "none";
    chatBtmWallpaper.style.backgroundImage = "none";
    wallpaperBody.style.backgroundColor = "rgb(113, 214, 113)";
    chatBtmWallpaper.style.backgroundColor = "rgb(113, 214, 113)";
    console.log("removed");
}
var colorValue = document.querySelector(".wallpaper-theme > div > div  > input[type='color']");
function SolidColor(){
    wallpaperBody.style.backgroundImage = "none";
    chatBtmWallpaper.style.backgroundImage = "none";
    wallpaperBody.style.backgroundColor = colorValue.value;
    chatBtmWallpaper.style.backgroundColor = colorValue.value;
    console.log(colorValue.value);
}
function confirmAlert(){
 confirmalert.style.marginLeft = 0;
 document.querySelector(".confirm-alert").style.backgroundColor = colorValue.value;
}

function errorMsg(textError){
    confirmalert.style.marginLeft = 0;
    confirmalert.style.opacity = 1;

    setTimeout(function(){confirmalert.style.opacity = "0";},3000);
    confirmalert.innerHTML = textError;
}