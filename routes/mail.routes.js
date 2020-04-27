const { Router } = require("express");
const router = Router();
const mailer = require("../scripts/emailSubscription");

// /mail
router.post("/send", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const message = {
      from: "Musii.li <musii.li@inbox.ru>",
      to: email,
      subject: "Оформление подписки на Musii.li",
      text: `Поздравляем, Вы успешно подписались на нашу рассылку!
Мы будем сообщать вам о новых событиях на нашем ресурсе
    
    С наилучшими пожеланиями, от команды Musii.li`,
    };
    mailer(message);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
