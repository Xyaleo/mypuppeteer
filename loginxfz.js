const puppeteer = require("puppeteer");

(async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("http://credit.stu.edu.cn/portal/stulogin.aspx");
    await page.type('#txtUserID', "账号", {delay: 100});
    await page.type('#txtUserPwd', '密码', {delay: 100});

    await page.click('#btnLogon');
    await page.waitFor(2000);
    const search = await page.$("#form1");
    if (search) {console.log('登陆失败')
    ;}
    else {console.log('登陆成功');}
})();



