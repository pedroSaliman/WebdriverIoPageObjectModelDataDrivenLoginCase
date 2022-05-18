const Page=require("./page")
const Action = require("../action/action")
class Login extends Page{
get email(){return $("#Email")}
get pass(){return $("#Password")}
get btn(){return $("button[type='submit']")}
get txt(){return $("div[class='content-header'] h1")}

//////////////////////////////////////////


async enterinfo(username,password){
    await Action.isexist(this.email)
    await Action.clear(this.email)
    await Action.value(this.email,username)
    ///////////////////////////////////////
    await Action.isexist(this.pass)
    await Action.clear(this.pass)
    await Action.value(this.pass,password)
    //////////////////////////
    await Action.isexist(this.btn)
    await Action.click(this.btn)

}



}
module.exports=new Login()