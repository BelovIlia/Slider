const info = [
  {

    city: "Rostv-on-Don LCD admiral",
    apartament: "81 m2",
    repairTime: "3.5 months",
    link: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/UBB9/NoYBXQbJW'
  },

  {
    city: "Sochi Thieves",
    apartament: "105 m2",
    repairTime: "4 months",
    link: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/CY7b/Zk61zoYpq'
  },

  {
    city: "Rostv-on-Don Patriotic",
    apartament: "93 m2",
    repairTime: "3 months",
    link: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/YFHn/rzWWptdgR'
  }
];

const cityElement = document.getElementById('city');
const repairTimeElement = document.getElementById('repairTime');
const apartamentElement = document.getElementById('area');
const imageElement = document.getElementById('image');
const arrowPrewElement = document.querySelector('.arrow-prev');
const dotGreyLeftElement = document.querySelector('.dot-grey-left');
const dotGreyAverageElement = document.querySelector('.dot-grey-average');
const dotGreyRightElement = document.querySelector('.dot-grey-right');
const arrowNextElement = document.querySelector('.arrow-next');
const ItemColorElement = document.querySelector('.item__color');
const listItemElement = document.querySelectorAll('.list__item');
const admiralElement = document.getElementById('admiral');
const sochiElement = document.getElementById('sochi');
const patrioticElement = document.getElementById('patriotic');

let index = 0;

function UpdateSliderData(NewIndex) {
  cityElement.innerHTML = info[NewIndex].city;
  repairTimeElement.innerHTML = info[NewIndex].repairTime;
  apartamentElement.innerHTML = info[NewIndex].apartament;
  imageElement.src = info[NewIndex].link;
}

function UpdateTabColor(NewIndex) {
  for (let i = 0; i < 3; i++) {
    if (i == NewIndex) {
      listItemElement[i].querySelector('.item__link').className = "item__link item__color";
    } else {
      listItemElement[i].querySelector('.item__link').className = "item__link";
    }
  }
}

// нажатие на левую стрелочку

arrowPrewElement.onclick = function (e) {
  if (index == 0) {
    index = 2;
  } else {
    index = index - 1;
  }
  UpdateSliderData(index);
  UpdateTabColor(index);
}

// нажатие на правую стрелочку

arrowNextElement.onclick = function (e) {
  if (index == 2) {
    index = 0;
  } else {
    index = index + 1;
  }
  UpdateSliderData(index);
  UpdateTabColor(index);

}

// нажатие на левую точку 

dotGreyLeftElement.onclick = function (e) {
  index = 0;
  UpdateSliderData(index);
  UpdateTabColor(index);

}

// нажатие на среднюю точку

dotGreyAverageElement.onclick = function (e) {
  index = 1;
  UpdateSliderData(index);
  UpdateTabColor(index);

}

// нажатие на правую  точку

dotGreyRightElement.onclick = function (e) {
  index = 2;
  UpdateSliderData(index);
  UpdateTabColor(index);

}

// нажатие на 1 пункт

admiralElement.onclick = function (e) {
  index = 0;
  UpdateSliderData(index);
  UpdateTabColor(index);

}

// нажатие на 2 пункт

sochiElement.onclick = function (e) {
  index = 1;
  UpdateSliderData(index);
  UpdateTabColor(index);

}

// нажатие на 3 пункт

patrioticElement.onclick = function (e) {
  index = 2;
  UpdateSliderData(index);
  UpdateTabColor(index);

}