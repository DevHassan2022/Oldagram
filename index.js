const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        id: "1"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        id: "2"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        id: "3"
    }
]


document.addEventListener('click', e => {
    if(e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like)
    
    }
    
    if(e.target.dataset.image) {
        handleLikeClick(e.target.dataset.image)
    }
})


function handleLikeClick(postId) {
const targetPostObj = posts.filter( post => {
    return post.id === postId
})[0]
  
    targetPostObj.likes ++
    renderPosts()    
}




const postsContainer = document.getElementById('posts-container')

function getPostsHtml() {
 
 let postsHtml = ``
 
for(let i=0; i < posts.length; i++) {
   
    postsHtml += `
                        <article class="post-content">
                            <div class="user-info">
                                <img src="${posts[i].avatar}" 
                                alt="van gog's avatar image"
                                class="post-avatar"
                               />
                                <div class="post-avatar--name_location">
                                    <h4 class="post-avatar-name">${posts[i].name}</h4>
                                    <p class="location">${posts[i].location}</p>
                                </div>
                            </div>
                            <img src="${posts[i].post}" 
                            alt="Van Gough's Selfie Portrait"
                            class="post-image" 
                             data-image="${posts[i].id}"/>
                            <div class="post--like_share_comment">
                                <div class="post--like_share_comment-icons-container">
                                    <img src="images/icon-heart.png" class="icon"
                                      data-like="${posts[i].id}"/>
                                    <img src="images/icon-comment.png"/>
                                    <img src="images/icon-dm.png"/>
                                </div>
                                <p class="like-count-text">${posts[i].likes} likes</p>
                                 <p class="user-comment"><span class="user-name">${posts[i].username}</span>  ${posts[i].comment}</p>
                            </div>
                        </article>
                        `
            
}
return postsHtml 
}

function renderPosts() {
    postsContainer.innerHTML = getPostsHtml()
}

renderPosts()
