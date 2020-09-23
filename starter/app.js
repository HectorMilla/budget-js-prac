//Budget Controller
var budgetController = ( function () {

})()


// UI Controller
var uiController = (function () {
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return  {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Wil be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
            
        },
        getDOMStrings: function() {
            return DOMStrings;
        }
    }
})()

// Global Controller
var controller = (function (budgetCtrl, uiCtrl) {
    var DOM = uiCtrl.getDOMStrings();

    var ctrlAddItem = function() {
         // 1. Get the filled input data
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
       console.log('hi');
    }

    // Event listeners for click and keypress //
    document.querySelector (DOM.inputBtn).addEventListener('click', ctrlAddItem)
    document.addEventListener('keypress', function(event) {
        if (event.key ===  13 || event.which === 13) {
            ctrlAddItem()
           
        }
    })    



    })(budgetController, uiController)