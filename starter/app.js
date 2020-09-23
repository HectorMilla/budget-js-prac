//Budget Controller
var budgetController = (function () {})();

// UI Controller
var uiController = (function () {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // Wil be either inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value,
      };
    },
    getDOMStrings: function () {
      return DOMStrings;
    },
  };
})();

// Global Controller
var controller = (function (budgetCtrl, uiCtrl) {
  var setupEventListeners = function () {
    var DOM = uiCtrl.getDOMStrings();

    // Event listeners for click and keypress //
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function (event) {
      if (event.key === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    // 1. Get the filled input data
    var input = uiCtrl.getInput();
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
    console.log(input);
  };
  return {
    init: function () {
      console.log("Application has started");
      setupEventListeners();
    },
  };
})(budgetController, uiController);

controller.init();
