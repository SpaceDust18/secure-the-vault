//1. Create a a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
//2. Assign three variables. Each variable contains the corresponding result of calculations. Each must equal one of the three codes in the combination.
//3.Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.
//4. Add valuable comments throughout the code. 


//STEP 1. CREATE A STRING
const str = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//STEP 2. ASSIGN THREE VARIABLES, EACH EQUALING TO A VAULT COMBINATION NUMBER. CODE NUMBER 10-40-39
const firstNumber = 5 * 2; 
const secondNumber = 15 + 25; 
const thirdNumber = 50 - 11;

//STEP 3. CREATE DIALOG BOX WITH MESSAGE AND COMBINATION
alert (`You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${firstNumber} - ${secondNumber} - ${thirdNumber}`);

//4. CHECK 