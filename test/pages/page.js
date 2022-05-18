module.exports=class Page{
    open(){
        return browser.url("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
    }
}