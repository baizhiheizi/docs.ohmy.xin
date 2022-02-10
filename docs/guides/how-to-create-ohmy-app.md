---
title: How to create an OhMy App?
sidebar_position: 2
---

**Main steps**:

1. Register a Mixin bot
2. Create OhMy App with Mixin bot's secrets
3. Update Mixin Bot config
4. Manage you OhMy App

## Register a Mixin Bot

First of all, you need a Mixin bot to starte. Register one if you don't have.

You can register two Mixin bots for free in [Mixin Developers Dashboard](https://developers.mixin.one/dashboard).

Click **New App** to create a new Mixin bot, fill the form.

![](/img/docs/registry-mixin-bot.png)

:::tip
- You may just fill `https://mixin.one` as **Home URL** and **OAuth URL**, and edit them later with the urls provided by [OhMy.Xin](https://ohmy.xin).
- The characters count of **Description** must be between 16 ~ 128
- You may leave **Resource Patterns** blank
- Check **Immersive**
:::

You can always edit your Mixin bot's information later if you're not sure what to fill.

Once created, you can generate the secrets of your Mixin bot.

![](/img/docs/mixin-bot-secret.png)

**APP SECRET** and **APP SESSION** are what we need.

Click **Generate a new secret**, copy the generated secret and save it somewhere for preparation.

![](/img/docs/mixin-bot-generate-app-secret.png)

Click **Ed25519 session**, download the keystore.json file.

![](/img/docs/mixin-bot-generate-app-session.png)

That's all we need.

:::warning
You should always keep the keystore of your bot safe. With it, anyone can transfer the assets in your bot wallet.

You can always reset your bot's app secret and app session if you lost your backup or the keystore has been leaked.
:::

## Create OhMy App

With the app secret and the keystore file, we can now create an OhMy App.

Open [https://ohmy.xin](https://ohmy.xin), login with Mixin Messenger, and click **Create App** button on the left sidebar.

![](/img/docs/create-ohmy-app.png)

**Client Secret** should be the copied app secret of your Mixin bot. And the **Client ID**, **Session ID**, **Pin Token** and **Private Key** are in the keystore file downloaded.

:::tip
Your would notice that you never provide the **PIN** to OhMy.xin, which means OhMy.xin can never transfer your assets in your Mixin bot wallet without your permission. Your should keep it safe and you would use it when withdrawing assets from you bot.

Anyway, you can always reset the **PIN** by generating a new app session if you lost your **PIN**. But once reset, OhMy.xin can no longer host your bot until you provide the new secrets.
:::

## Update Mixin bot information

If everything goes well, OhMy.xin will direct to [dashboard](https://ohmy.xin/mx_apps), listing all your apps.

![](/img/docs/ohmy-dashboard.png)

You can see the **Home URL** and **OAuth URL** provided by [OhMy.xin](https://ohmy.xin).

Edit your Mixin bot's information on [Mixin Developers Dashboard](https://developers.mixin.one/dashboard) with the URLs.

![](/img/docs/edit-mixin-bot.png)

If you change the icon or name of your bot, remember to click **Sync** button back on [OhMy dashboard](https://ohmy.xin/mx_apps).

Try to search your bot's Mixin ID in Mixin Messenger, and send `?` to it. Your bot will respond if it's successfully hosted by [OhMy.xin](https://ohmy.xin). It may take a few minutes to get hosting for new app.

![](/img/docs/mixin-bot-respond.jpg)

:::tip
You may always send the question mark `?` to your Bot (hosted by OhMy.xin) to start and it will repond with some usefull command options.
:::

## Manage your app

Now you're almost done.

In [OhMy dashboard](https://ohmy.xin/mx_apps) you can manage your app, update some config for your self.

When you're ready, update your app's state to `public`, then everyone can access to your app.

![](/img/docs/circle-settings.png)
