import { handleClick } from '../controllers/calcController.js';
import { calcButtons } from './calcButtons.js';


    //Container Divs
    
    const container = document.querySelector('#mainPanel');
    const calcDisplayPanel = document.createElement('div');
    const calcUtilityPanel = document.createElement('div');
    const calcOperatorPanel = document.createElement('div');
    const calcNumberPanel = document.createElement('div');

    container.appendChild(calcDisplayPanel);
    calcDisplayPanel.className = 'calcDisplayPanel';
    container.appendChild(calcUtilityPanel);
    calcUtilityPanel.className = 'calcUtilityPanel';
    container.appendChild(calcOperatorPanel);
    calcOperatorPanel.className = 'calcOperatorPanel';
    container.appendChild(calcNumberPanel);
    calcNumberPanel.className = 'calcNumberPanel';


//Button Render Iteration 

calcButtons.forEach((button)=>{
    const newButton = document.createElement('div');
    newButton.textContent = button.label
    newButton.className = button.style
    newButton.addEventListener('click', () => {handleClick(button.label)})
    
    button.panel === 'numbers'
    ? calcNumberPanel.appendChild(newButton)
        : button.panel === 'utilities'
            ? calcUtilityPanel.appendChild(newButton)
                : calcOperatorPanel.appendChild(newButton)
    
}); 
