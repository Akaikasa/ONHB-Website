window.onscroll = async () => {
    if (window.scrollY != 0)
    {
        document.querySelector('header').className = "header-box-shadow"
    } else {
        document.querySelector('header').className = ''
    }
}