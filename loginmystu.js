const puppeteer = require("puppeteer");

(async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://sso.stu.edu.cn/login");
    await page.type('#username', "账号", {delay: 100});
    await page.type('#password', '密码', {delay: 100});

    await page.click('#login');
    await page.waitFor(2000);
    const search = await page.$("#login_error");
    if (search) {console.log('登陆失败');
        }
    else {console.log('登陆成功');}
})();




