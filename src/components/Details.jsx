import React from "react";

const Details = () => {
  return (
    <div className="details">
      <p>Цена телефона</p>
      <strong>6 000 000 сум </strong>
      <p className="mt40">Общая цена (с наценкой)</p>
      <div className="prices d-flex">
        <strong>7 300 000 сум </strong>
        <small>2 433 333 сум</small>
      </div>
      <div className="months d-flex">
        <div>3 мес</div>
        <div>6 мес</div>
        <div>12 мес</div>
        <div>24 мес</div>
      </div>
      <span className="align">Наценка: 5%</span>
      <div className="models">
        <p>Общие характеристики</p>
        <p className="standart">
          Тип: моноблок (классический) <br />
          Стандарт: 2G, 3G, 4G (LTE), 5G <br />
          Операционная система: iOS 14
        </p>
        <div className="more mt20">Показать все</div>
      </div>
    </div>
  );
};

export default Details;
