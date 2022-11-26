const navModal = document.getElementById('nav-modal')
const closeNavBtn = document.getElementById('close-nav-btn')
const openNavBtn = document.getElementById('open-nav-btn')
const moreBlog = document.getElementById('more-blog')
const viewMore = document.getElementById('view-more')
const moreArticles = document.getElementById('more-articles')


openNavBtn.addEventListener('click', () => {
    navModal.style.display = 'block'
})

closeNavBtn.addEventListener('click', ()=> {
    navModal.style.display = 'none'
})


function viewMoreArticle() {
    if(moreBlog.style.display = "block") {
        viewMore.style.display = 'none'
        moreArticles.style.display = 'block'
    }
}
