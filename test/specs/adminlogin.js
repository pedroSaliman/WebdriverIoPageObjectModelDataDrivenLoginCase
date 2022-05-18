const Login = require("../pages/login");
const data=require("../data/data");

describe("test suite",()=>{
    it('the login case', async() => {
    
        await Login.open();
        await Login.enterinfo(data.username,data.pass);
        await expect(Login.txt).toBeExisting();
        await expect(Login.txt).toHaveText(data.message);

        
        
        });
        
});
