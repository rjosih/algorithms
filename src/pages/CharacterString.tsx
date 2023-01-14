import { useState } from 'react';

// Components from Material-UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CharacterString = () => {
    const [string, setString] = useState<string>("ttttttttTTTTTTTtttttrrrrf");
    const [newCharacterString, setNewCharacterString] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleString = () => {
        if (!string) {
            setMessage("The string is empty");
        } else {
            setMessage("");
            const array = string.split("");
            let newString: string = "";

            // Using reduce-function read more at IndexPage.tsx
            array.reduce<string>(function (_previousValue: string, currentValue: string, index: number, array: object) {
                // Thought: Works with numbers also right now, don't know if it's allowed
                // Checks if it is four duplicates
                const fourDuplicates = array[index] === array[index].toLowerCase() && array[index] === array[index + 1] && array[index] === array[index + 2] && array[index] === array[index + 3]
                if (!fourDuplicates) {
                    // If its not four duplicates add the value to the newString, otherwise jump to next
                    newString = newString + currentValue;
                }
                return newString;
            }, "");

            // Old solution
            // for (let i = 0; i < array.length; i++) {
            //     // Check if the four identical letters are in lowercase and then remove the last one
            //     if (array[i] === array[i].toLowerCase() && array[i] === array[i + 1] && array[i] === array[i + 2] && array[i] === array[i + 3]) {
            //         const index: number = i + 3;
            //         array.splice(index, 1);
            //         // Backs 1 index since 1 index has been removed
            //         i--;
            //     }
            // }

            setNewCharacterString(newString);
        }
    };

    return (
        <div className="container mx-auto border-2 p-10">
            <h1 className="text-4xl font-bold pb-4">CharacterString</h1>
            <div className="pt-4 pb-10">
                <p>Instructions: </p>
                <ul className="list-decimal">
                    <li>
                        Some characters are default in the input field, you can modify the string if you want
                    </li>
                    <li>
                        When clicking on button `Remake string` it shows it has removed all duplicates of four or more
                        It will result with a text string with no lower case duplicates higher than three
                    </li>
                </ul>
            </div>

            <div className="flex">
                <div className="pr-2">
                    <TextField
                        id="outlined-number"
                        label="String"
                        type="text"
                        value={string}
                        onChange={(e) => setString(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <Button variant="outlined" onClick={() => handleString()}>Remake string</Button>
            </div>

            {/* Warning message that the string is empty */}
            {message && <p className="pt-3 italic">{message}</p>}

            {/* Displays the returned string with characters  */}
            {newCharacterString && (
                <div className="text-xl py-3">
                    <strong>Remade string: </strong>
                    <p className="tracking-widest">{newCharacterString} </p>
                </div>
            )}
        </div>
    );
};

export default CharacterString;