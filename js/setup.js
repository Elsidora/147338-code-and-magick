'use strict';
(function () {

  var ENTER_CODE = 13;

  var ESC_CODE = 27;

  var Coordinate = {
    START_LEFT: 50,
    START_TOP: 80
  };

  var setupBlock = document.querySelector('.setup');

  var setupUserName = setupBlock.querySelector('.setup-user-name');

  var setupAvatar = setupBlock.querySelector('.upload');

  document.querySelector('.setup-similar').classList.remove('hidden');

  var setupWizardCoat = setupBlock.querySelector('.setup-wizard .wizard-coat');

  var setupWizardEyes = setupBlock.querySelector('.setup-wizard .wizard-eyes');

  var setupFireball = setupBlock.querySelector('.setup-fireball-wrap');

  var setupOpen = document.querySelector('.setup-open');

  var setupClose = document.querySelector('.setup-close');

  function onSetupKeyPress(evt) {
    if (evt.keyCode === ESC_CODE) {
      evt.preventDefault();
      if (!setupBlock.classList.contains('hidden')) {
        closeSetupBlock();
      }
    }
  }

  function openSetupBlock() {
    setupBlock.classList.remove('hidden');
    document.addEventListener('keydown', onSetupKeyPress);
    setupWizardCoat.addEventListener('click', window.render.onPressCoat);
    setupWizardEyes.addEventListener('click', window.render.onPressEyes);
    setupFireball.addEventListener('click', window.render.onPressFireball);
    setupAvatar.addEventListener('mousedown', window.dialog.onMouseDown);
    setupUserName.addEventListener('focus', onInputFocus);
    setupUserName.addEventListener('blur', onInputBlur);
  }

  // Функция прослушивания события фокус
  function onInputFocus() {
    document.removeEventListener('keydown', onSetupKeyPress);
  }

  // Функция прослушивания снятия фокуса
  function onInputBlur() {
    document.addEventListener('keydown', onSetupKeyPress);
  }

  function closeSetupBlock() {
    setupBlock.classList.add('hidden');
    document.removeEventListener('keydown', onSetupKeyPress);
    setupAvatar.removeEventListener('mousedown', window.dialog.onMouseDown);
    setupBlock.style.top = Coordinate.START_TOP + 'px';
    setupBlock.style.left = Coordinate.START_LEFT + '%';
  }

  setupOpen.addEventListener('click', function () {
    openSetupBlock();
  });

  setupClose.addEventListener('click', function () {
    closeSetupBlock();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      evt.preventDefault();
      if (setupBlock.classList.contains('hidden')) {
        openSetupBlock();
      }
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      evt.preventDefault();
      if (!setupBlock.classList.contains('hidden')) {
        closeSetupBlock();
      }
    }
  });

})();
