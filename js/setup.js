'use strict';

var setupBlock = document.querySelector('.setup');

setupBlock.classList.remove('hidden');

setupBlock.querySelector('.setup-similar').classList.remove('hidden'); // блок с похожими персонажами

var setupSimilarList = setupBlock.querySelector('.setup-similar-list'); // эл-т, куда вставляем похожих магов

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // шаблон, который будем клонировать

// Создаем данные

var PERSONAGES_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var PERSONAGES_FAMILY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var PERSONAGES_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var PERSONAGES_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

// Задание 3.2

//функция генерации случайного значения массива
var getRandomValue = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generatePersonagesObjects = function(count) {
    var personagesObjects = [];
    for (var i = 0; i < count; i++) {
        var personageObject = {
            name: getRandomValue(PERSONAGES_NAMES) + ' ' + getRandomValue(PERSONAGES_FAMILY),
            coatColor: getRandomValue(PERSONAGES_COATS),
            eyesColor: getRandomValue(PERSONAGES_EYES)
        }
        personagesObjects[i] = personageObject;
    }

    return personagesObjects;
};



