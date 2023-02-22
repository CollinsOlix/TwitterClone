const tabs = document.querySelectorAll('[data-tab-value]');
const tabInfos = document.querySelectorAll('[data-tab-info]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const activeTab = tab;
        tabs.forEach(tab => {
            tab.classList.remove('active-page');
        })
        activeTab.classList.add('active-page');

        const target = document.querySelector(tab.dataset.tabValue);

        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active');
        })
        target.classList.add('active')
    })
});


const sideLinks = document.querySelectorAll(".link-texts");
sideLinks.forEach(sideLink => {
    sideLink.addEventListener('click', () => {
        if(sideLink.classList.contains("active-link-text")){
            return
        }
        else{
            let link = sideLink;
            sideLinks.forEach(sideLink => {
                sideLink.classList.remove("active-link-text");
            });
            link.classList.add("active-link-text")
        }
    })
})


const interactions = document.querySelectorAll(".interactions");
function addInteract(){
    interactions.forEach(interaction => {
        interaction.addEventListener('click', () => {
            if(interaction.classList.contains("clicked")){
                return;
            }
            else{
                console.log(interaction.innerText);
            }
        })
    })
}



function createHtmlElement(str1, str2 = ""){
    let temp = document.createElement(str1);
    temp.classList.add(str2);
    return temp
} 



function createImpressions(){
    let ul = document.createElement("ul");
    let impressionStats = ["assets/comments-icon.PNG", "assets/retweet-icon.PNG", "assets/like-icon.PNG", "assets/interact-icon.PNG", "assets/share-icon.PNG"];

    for(let i = 0; i < impressionStats.length; i++){
        let li = document.createElement("li");
        let img = createHtmlElement("img", "add-alt-imgs");
        img.setAttribute("src", impressionStats[i]);
        li.setAttribute("onclick", "addInteract()");
        li.append(img);
        li.append(0);
        ul.append(li);
    }
    return ul
}

function showPost(){
    let text = " ";
    let userInputText = document.querySelectorAll(".text-entry");
    for(let i = 0; i < userInputText.length; i++){
        if(userInputText[i].value !== " "){
            text = userInputText[i].value;
            userInputText[i].value = "";
            i+=7;
        }
    }

    return text;
}

function createNewPost(){


    let userDisplayName = document.querySelector(".user-account").querySelector(".username").querySelector("h3").innerText;
    let userDisplayTag = document.querySelector(".user-account").querySelector(".username").querySelector("p").innerText;
     
    let posts = document.querySelector(".posts");
    let postContainer = document.createElement("div");
    postContainer.classList.add("post-container");
    let profileImg = document.createElement("img");
    profileImg.classList.add("profile-picture");
    profileImg.classList.add("post-profile-picture");
    profileImg.setAttribute("src", "assets/jake.jpeg");
    profileImg.setAttribute("alt","profile image");
    let post = document.createElement("div");
    post.classList.add("post");
    let postInfo = document.createElement("div");
    postInfo.classList.add("post-info");
    let repostInfo = document.createElement("p");

    //Repost Information goes here
    repostInfo.innerText = " "
    repostInfo.setAttribute("id", "repost-info");
    let userName = document.createElement("div");
    userName.classList.add("username");
    let userNameDiv = document.createElement("div");
    let btn = document.createElement("button");
    btn.classList.add("post-profile-interaction");
    btn.innerText = "..."
    
    let impressions = createHtmlElement("div", "impressions");
    impressions.append(createImpressions());
    let postContentWrapper = createHtmlElement("div", "post-content-wrapper");
    let postContent = createHtmlElement("p", "post-content");
    postContent.innerText = showPost();
     
    let displayName = document.createElement("h3");
    displayName.setAttribute("id", "post-handle");
    displayName.innerText = userDisplayName;
    let displayTag = document.createElement("p");
    displayTag.innerText = userDisplayTag;
    
    
    postContentWrapper.append(postContent);
    userNameDiv.append(displayName);
    userNameDiv.append(displayTag);
    userName.append(userNameDiv);
    userName.append(btn);
    
    
    postInfo.append(repostInfo);
    postInfo.append(userName);
    postInfo.append(postContentWrapper);
    post.append(postInfo);
    post.append(impressions);
    postContainer.append(post);
    postContainer.append(profileImg);
    postContainer.append(post);
    posts.prepend(postContainer);
}