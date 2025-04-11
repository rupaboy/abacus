import { handleClick } from '../controllers/calcController.js'        
        
        //Button Panel
    class CalcButton {
            constructor(panel, style, label, name, onClick) {
                this.panel = panel;
                this.style = style;
                this.label = label;
                this.name = name;
                this.onClick = ()=> handleClick(this.label);
            }
        }

    
    const calcButtons = [

        //Number Buttones
        new CalcButton('numbers', 'numberButton', 1, 'one'),
        new CalcButton('numbers', 'numberButton', 2, 'two'),
        new CalcButton('numbers', 'numberButton', 3, 'three'),
        new CalcButton('numbers', 'numberButton', 4, 'four'),
        new CalcButton('numbers', 'numberButton', 5, 'five'),
        new CalcButton('numbers', 'numberButton', 6, 'six'),
        new CalcButton('numbers', 'numberButton', 7, 'seven'),
        new CalcButton('numbers', 'numberButton', 8, 'eight'),
        new CalcButton('numbers', 'numberButton', 9, 'nine'),
        new CalcButton('numbers', 'utilityButton', ',', 'decimal'),
        new CalcButton('numbers', 'numberButton', 0, 'zero'),
        new CalcButton('numbers', 'operatorButton', '=', 'equals'),
   
        //Operation Buttons
        new CalcButton('operators', 'operatorButton', '+', 'plus'),
        new CalcButton('operators', 'operatorButton', '*', 'times'),
        new CalcButton('operators', 'operatorButton', '^', 'power'),
        new CalcButton('operators', 'operatorButton', '-', 'minus'),
        new CalcButton('operators', 'operatorButton', '/', 'divide'),
        new CalcButton('operators', 'operatorButton', '√', 'square root'),
        new CalcButton('operators', 'operatorButton', '%', 'percent'),
        new CalcButton('operators', 'operatorButton', '±', 'change sign'),
    
        //Utility Buttons
        new CalcButton('utilities', 'utilityButton', '↺', 'previous'),
        new CalcButton('utilities', 'utilityButton', '⟳', 'next'),
        new CalcButton('utilities', 'utilityButton', 'C', 'clear current'),
        new CalcButton('utilities', 'utilityButton', 'AC', 'clear all'),
        new CalcButton('utilities', 'utilityButton', 'MW', 'Memory Wipe'),
        new CalcButton('utilities', 'utilityButton', '-M', 'Memory Removal'),
        new CalcButton('utilities', 'utilityButton', '+M', 'Memory Addition'),
        new CalcButton('utilities', 'utilityButton', 'MRC', 'Memory Recall'),
    ];

    export { calcButtons }
    