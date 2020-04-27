import React from "react";

import classes from "./MineSlideA.module.css";

export const MineSlideA = () => {
  return (
    <section className={classes.main_slide}>
      <div className={classes.container}>
        <span>Чем мы занимаемся?</span>
        <p>
          Сервис сокращения ссылок Musii.li помогает сгенерировать короткий
          URL-адрес. Эта услуга предоставляется совершенно бесплатно.
        </p>
        <span>Как сократить ссылку?</span>
        <p>
          Для сокращения ссылки необходимо на главной странице в поле ввода
          ввести длиный URL и нажать на кнопку "Сократить". Готово!
        </p>
        <span>Возникли вопросы?</span>
        <p>
          В случае, если у Вас остались вопрос, мы с радостью на них ответим в
          форме обратной связи!
        </p>
      </div>
    </section>
  );
};
