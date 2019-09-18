# 在 Mixin 里创建你的小密圈机器人

Mixin Messenger 上的机器人有点类似于微信里的小程序，但是跟微信小程序最大的区别在于，Mixin 机器人**足够的开放**。

只要你会开发和富有想象力，Mixin 机器人可以实现很多非常有意思的功能。

例如 Mixin Messenger 本身的群组最多限制 256 个人，但是通过机器人，可以建立超级大群，不限人数，还可以设置收费进群、持仓限制进群等等。另外，发红包、OTC 交易、直播讲课等等都可以用机器人来实现。

然而，如果你不懂开发，也想要有自己的 Mixin 机器人怎么办？[OhMy.xin](https://ohmy.xin) 可以帮上忙。

**OhMy.xin** 为用户提供托管 Mixin 机器人的 SaaS 服务。目前已上线的机器人品种暂时只有一种，即**社群工具**，**Mixin Circle**，现在大家一般管它叫 Mixin 里的小密圈。

如果你想免费体验，可以按照以下详细步骤创建。

> 为了得到更好的体验，创建过程请在 PC 端操作。

## 1 注册 OhMy.xin

打开 https://ohmy.xin ，点击登录按钮。

![image-20190829093623436](./assets/images/image-20190829093623436.png)

如果你是在 PC 端，会跳转到一个 Mixin 二维码，请用 Mixin Messenger 扫码，同意授权后，即可登录成功。

登录成功之后，原来登录按钮会变成 `我的应用`。

![image-20190829094028078](./assets/images/image-20190829094028078.png)

点击它进入我的应用列表，然后点击 `新建应用`。

![image-20190829094120556](./assets/images/image-20190829094120556.png)

新建应用分为三步，分别是

- 注册 Mixin 机器人
- 绑定 Mixin 应用
- 配置 Mixin 应用

![image-20190829095006016](./assets/images/image-20190829095006016.png)

咱们一步一步说。

## 2 注册 Mixin 机器人

首先要厘清一个概念，**Mixin 机器人**是在 Mixin 注册的，提供方是 Mixin。而**社群工具**，即 **Mixin Circle**是 OhMy 提供的机器人服务，其载体则是 **Mixin 机器人**。

要用 OhMy 提供的服务，第一步就是要先注册自己的 Mixin 机器人。注册地址是 Mixin 的开发者网站 [https://developers.mixin.one](https://developers.mixin.one) 。

### 2.1 注册机器人

同样建议在 PC 端打开以上网站，Mixin 扫码授权之后，就可以进入了。点击底部的 `Creat New App` 按钮开始创建。

![image-20190829104445879](./assets/images/image-20190829104445879.png)

按照提示，填入各项就行。

![image-20190829105156012](./assets/images/image-20190829105156012.png)

**注意**，如果提交的时候提示 `Invalid data submitted`，多数是因为名称或者简介的字数不符合要求，重新检查一下。

其中 `home uir` 是打开机器人出现的主页，`OAuth redirect uri` 是机器人授权成功之后跳转的地址，注册时可以先随便填一个网址（比如 `https://ohmy.xin`）。**要记得在托管应用后，需要再修改为 OhMy.xin 分配的地址**。

### 2.2 生成机器人私钥

创建成功之后，回到应用列表，生成机器人的 `secret` 、`session`、pin 码 和私钥等信息。

点击 `Click to generate a new secret` 和 `Click to generate a new session` ，可以生成机器人的私钥等信息。

![image-20190829110532385](./assets/images/image-20190829110532385.png)

各个信息对应的名称如下图，其中 `user id` 对于机器人来说，也叫 `client id`。

![](https://camo.githubusercontent.com/27bfb02019c79e9fb88c0cb0438be4d186ac5739/68747470733a2f2f646576656c6f706572732e6d6978696e2e6f6e652f6170692f696d616765732f72656769737465722d6170702e706e67)

这些私钥信息请**务必妥善保管**，有了这些信息，就相当于得到了这个机器人的管理权。

其中 **PIN 码是最最重要的**，是提取机器人中资产的关键密码。没有 PIN 码，即使有其他的私钥信息，也是没办法提取资产的。

OhMy.xin 需要你的机器人的私钥等信息来实现相应的功能，但是**绝对不会保存你的 PIN 码**，换言之，OhMy.xin 是无法私自提取你的机器人中的资产的。

**请务必小心保管好你的机器人 PIN 码，丢失之后，谁也提取不了机器人中的资产了，包括你自己。**

## 3 托管应用

有了机器人的私钥信息，下一步就是将信息提交给 OhMy.xin，也就是将你的 Mixin 机器人托管给 OhMy.xin 进行管理。

回到 OhMy.xin 的[新建页面](https://ohmy.xin/mx_apps/new)，点击下一步，进入第二步，如下图所示。

![image-20190829112847905](./assets/images/image-20190829112847905.png)

对应着把步骤 [2.2](#2.2 生成机器人私钥) 得到私钥信息一一填入，点击确认，就可以了。

如果提示失败，请核对一下有没有复制错误。其中私钥要复制完整，包括开始行和结束行。

另外提醒一下，在 步骤 [2.2](#2.2 生成机器人私钥)  里每次点击 `Click to generate a new secret` 和 `Click to generate a new session` 都会生成全新的私钥信息，旧的私钥信息就会立即失效，OhMy.xin 对你机器人的托管也就失效了。

## 4 配置应用

在 OhMy.xin 中创建成功之后，这个时候在 Mixin Messenger 里打开你的机器人，会发现打开的是你在 

步骤 [2.1](#2.1 注册机器人)  中填的 `home uri` 。所以，要把它改过来。

打开 [MIxin 开发者网站的应用列表](https://developers.mixin.one/dashboard)，找到你的机器人，点击 `client_id`，进入编辑状态。

![image-20190829114447484](./assets/images/image-20190829114447484.png)

把  `home uir` 和 `OAuth redirect uri` 修改成 OhMy.xin 分配的地址。如果你找不到，可以到 OhMy.xin 的管理后台，首页就能看到。

![image-20190829115200736](./assets/images/image-20190829115200736.png)

修改完之后，就可以在 Mixin Messenger 里搜索你机器人的 mixin id，添加为联系人。

一切顺利的话，打开机器人就能看到，你的机器人已经变成一个由 OhMy.xin 提供的社群工具了。

![image-20190829115716915](./assets/images/image-20190829115716915.png)

## 5 OhMy 管理后台

接下来，你可以在 OhMy.xin 的管理后台管理你的应用。比如

- 开放 / 关闭入口
- 设置进圈的费用
- 管理帖子 / 评论，可以删除
- 查看机器人的资产
- 提取资产(需要输入 PIN 码，且只能提取至创建者的 Mixin 账号)
- 打开广播模式
- 更多功能开发中...

另外，再提醒一句，如果你在 Mixin 开发者网站修改了机器人的名称或者头像，记得在 OhMy.xin 的管理后台点击 `同步`，把最新信息同步过来。

## 6 OhMy 的收费模式

为了保证机器人的资产安全， OhMy 没有保存机器人的 PIN 码，机器人在收款时，是直接到账的，没有经过 OhMy 中转，所以技术上决定了没有办法像知识星球那样抽成收费。

初步决定 OhMy 会以订阅的模式阶梯收费。具体细则还没想好。


## 7 关于作者

> 读了 6 年土木工程，做了 5 年结构设计，2017 年学了一点 Ruby 之后，转行做了 web 开发。
>
> 从 2018 年开始，利用业余时间在 Mixin 上做独立开发，上线的产品包括 [PRSDigg](https://prsdigg.com)、 [slotin.xin](https://slotin.xin)、 [flowin.xin](https://flowin.xin) 和 [ohmy.xin](https://ohmy.xin)。
>
> ohmy.xin 是我参加 Mixin Network 首届全球开发者大赛获得第二名的作品 iXin 的延伸。

任何建议可以联系我反馈，Mixin ID: 1051445。

目前还是业余开发，开发进度无法保障，海涵。