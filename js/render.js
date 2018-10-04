'use strict';
(function () {
  var PERSONAGES_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

  var PERSONAGES_FAMILY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var PERSONAGES_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var PERSONAGES_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  var PERSONAGES_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var countPersonages = 4;

  var setupBlock = document.querySelector('.setup');

  var setupWizardCoat = setupBlock.querySelector('.setup-wizard .wizard-coat');

  var setupWizardEyes = setupBlock.querySelector('.setup-wizard .wizard-eyes');

  var setupFireball = setupBlock.querySelector('.setup-fireball-wrap');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // шаблон, который будем клонировать

  // Задание 3.2

  // Функция генерации случайного значения массива
  function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Функция генерации объектов персонажей
  function generatePersonagesObjects(count) {
    var personagesObjects = [];
    for (var i = 0; i < count; i++) {
      var personageObject = {
        name: getRandomValue(PERSONAGES_NAMES) + ' ' + getRandomValue(PERSONAGES_FAMILY),
        coatColor: getRandomValue(PERSONAGES_COATS),
        eyesColor: getRandomValue(PERSONAGES_EYES)
      };
      personagesObjects[i] = personageObject;
    }

    return personagesObjects;
  }

  // Задание 3.3
  // Функция создания DOM-элементов
  function renderPersonage(personage) {

    var personageElement = similarWizardTemplate.cloneNode(true);

    personageElement.querySelector('.setup-similar-label').textContent = personage.name;
    personageElement.querySelector('.wizard-coat').style.fill = personage.coatColor;
    personageElement.querySelector('.wizard-eyes').style.fill = personage.eyesColor;

    return personageElement;
  }

  // Задание 3.4
  // Функция добавления DOM-элементов во фрагмент
  function getFragment(array) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(renderPersonage(array[i]));
    }
    return fragment;
  }

  // Функция отрисовки DOM-элементов
  function renderPersonages(arrObjects) {
    var setupSimilarList = setupBlock.querySelector('.setup-similar-list'); // эл-т, куда вставляем похожих магов
    setupSimilarList.appendChild(getFragment(arrObjects));
  }

  function onPressCoat() {
    var changeCoatColor = getRandomValue(PERSONAGES_COATS);
    setupWizardCoat.style.fill = changeCoatColor;
    var changeCoatInput = setupBlock.querySelector('input[name="coat-color"]');
    changeCoatInput.value = changeCoatColor;
  }

  function onPressEyes() {
    var changeEyesColor = getRandomValue(PERSONAGES_EYES);
    setupWizardEyes.style.fill = changeEyesColor;
    var changeEyesInput = setupBlock.querySelector('input[name="eyes-color"]');
    changeEyesInput.value = changeEyesColor;
  }

  function onPressFireball() {
    var changeFireballColor = getRandomValue(PERSONAGES_FIREBALLS);
    setupFireball.style.background = changeFireballColor;
    var changeFireballInput = setupBlock.querySelector('input[name="fireball-color"]');
    changeFireballInput.value = changeFireballColor;
  }

  window.render = {
    onPressCoat: onPressCoat,
    onPressEyes: onPressEyes,
    onPressFireball: onPressFireball
  };
  renderPersonages(generatePersonagesObjects(countPersonages));
})();
