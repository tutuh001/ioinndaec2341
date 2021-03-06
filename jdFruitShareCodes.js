/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号

//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  '518b0e6aa56a499081420cb1922aef38@fb8a4c4a908d4abf82cffb98fa55e144@da9bda01eb304e9fb8392acdf4319822@12fc791984e44ab48b363e2130c3126b@8d73b414fa2b436792818c312ab3f14d@447002b6ac974880bceaff016a95729a',//账号一的好友shareCode,不同好友中间用@符号隔开
  '518b0e6aa56a499081420cb1922aef38@fb8a4c4a908d4abf82cffb98fa55e144@301dc6a424f1441f9585f9da1def4051@12fc791984e44ab48b363e2130c3126b@8d73b414fa2b436792818c312ab3f14d@447002b6ac974880bceaff016a95729a',//账号二的好友shareCode，不同好友中间用@符号隔开
  '518b0e6aa56a499081420cb1922aef38@fb8a4c4a908d4abf82cffb98fa55e144@301dc6a424f1441f9585f9da1def4051@da9bda01eb304e9fb8392acdf4319822@8d73b414fa2b436792818c312ab3f14d@447002b6ac974880bceaff016a95729a',//账号三的好友shareCode，不同好友中间用@符号隔开
  '518b0e6aa56a499081420cb1922aef38@fb8a4c4a908d4abf82cffb98fa55e144@301dc6a424f1441f9585f9da1def4051@da9bda01eb304e9fb8392acdf4319822@12fc791984e44ab48b363e2130c3126b@447002b6ac974880bceaff016a95729a',//账号四的好友shareCode，不同好友中间用@符号隔开
  '301dc6a424f1441f9585f9da1def4051@da9bda01eb304e9fb8392acdf4319822@12fc791984e44ab48b363e2130c3126b@8d73b414fa2b436792818c312ab3f14d',//账号五的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
 */
