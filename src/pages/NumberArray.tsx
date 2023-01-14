import { ChangeEvent, useState } from 'react';

// Components from Material-UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NumberArray = () => {
    const [number, setNumber] = useState<number>(0);
    const [numbersArray, setNumbersArray] = useState<Array<number>>([19, 2, 42, 18]);
    const [totalSum, setTotalSum] = useState<number>(0);
    const [message, setMessage] = useState<string>("");

    // Updates number in textfield input
    const updateNumber = (event: ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value as unknown as number);
    }

    // Adds the number to the array
    const addNumber = () => {
        // Can only store 150 000 elements
        if (numbersArray.length === 150000) {
            setMessage(`Max length of the array (150 000 elements) has been reached!`);
            // Added number must be between 1 - 1500 000
        } else if (number > 1 && number > 1500000) {
            setMessage(`The number ${number} is empty or lower than 1 and higher than 1500000`);
        } else {
            // If the numbers already exists, don't add the number
            if (numbersArray.includes(parseInt(number as unknown as string))) {
                setNumber(0)
                setMessage(`The number ${number} already exists in the array and won't be added`);
            } else if (number) {
                // Add number to array and reset the values
                setMessage("");
                setNumbersArray(numbersArray => [...numbersArray, parseInt(number as unknown as string)]);
                setNumber(0);
            }
        }
    }

    // Validates if a number is even or odd
    const isEven = (numb: number) => {
        return numb % 2 == 0;
    }

    // Calculates the sum of the two highest numbers that results in an odd number
    const calculate = () => {
        // Resets the number in the input field
        setNumber(0);
        let oddNumber: number = 0;
        let evenNumber: number = 0;

        const totSum: number = numbersArray
            // Create copy of numbersArray for iterating to keep original array intact
            .slice(0)
            // Sorts array from highest to lowest
            .sort((a, b) => b - a)
            .reduce(function (currentValue: number, nextValue: number) {
                // Breaks the loop since the highest odd and even numbers are found
                if (oddNumber && evenNumber) {
                    // Return total highest total sum with an odd number
                    return evenNumber + oddNumber;
                }
                // Find highest even number
                if (isEven(currentValue) && !evenNumber) {
                    evenNumber = currentValue;
                    // Find highest odd number
                } else if (!isEven(currentValue) && !oddNumber) {
                    oddNumber = currentValue;
                }

                // Go to next value
                return nextValue;
            });

        setTotalSum(totSum);
    }

    return (
        <div className="container mx-auto border-2 p-10">
            <h1 className="text-4xl font-bold pb-4">NumberArray</h1>
            <div className="pt-4 pb-10">

                <p>Instructions: </p>
                Some numbers are default in the array, you can add more numbers if you want
                <ul className="list-decimal">
                    <li>
                        When clicking on calculate it shows the highest odd number combined of the highest even number and the highest odd number
                    </li>
                    <li>
                        You can only add numbers between 1 - 1500 000
                    </li>
                    <li>
                        And the capacity of the number array is 150 000
                    </li>
                    <li>
                        You can not add same number twice
                    </li>
                    <li>
                        Futher work: save the array in a global state if you wanna come back
                    </li>
                </ul>
            </div>

            <div className="flex">
                <div className="pr-2">
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        value={number > 0 ? number : ''}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updateNumber(event)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <Button variant="outlined" onClick={() => addNumber()}>Add</Button>
            </div>

            {/* Warning message if a number already exists */}
            {message && <p className="pt-3 italic">{message}</p>}

            <div className="w-full overflow-scroll py-4 flex">
                {numbersArray && numbersArray.map((value: number, index: number) => (
                    <div key={`id-${number}-${index}`} className="flex border-2 p-3">
                        {value}
                    </div>
                ))}
            </div>

            <div className="py-3">
                <Button variant="outlined" onClick={() => calculate()}>Calculate</Button>
            </div>

            {/* Displays the total sum  */}
            {totalSum > 0 && <div className="py-3"><strong>Total sum with an odd number</strong> {totalSum}</div>}
        </div>
    );
};

export default NumberArray;