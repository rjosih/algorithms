import { FocusEvent, ChangeEvent, useState, useEffect } from 'react';

// Components from Material-UI
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

// Component creditcard and its CSS
import Cards from 'react-credit-cards';


import monthsData from '../data/date';

const CreditCard = () => {
    const [number, setNumber] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [expiryMonth, setExpiryMonth] = useState<string>("");
    const [expiryYear, setExpiryYear] = useState<string>("");
    const [expiry, setExpiry] = useState<string>("");
    const [cvc, setCvc] = useState<number>(0);
    const [focus, setFocus] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const formattedExpiryDate = `${expiryMonth ? expiryMonth : '**'}/${expiryYear ? expiryYear : '**'}`;
        setExpiry(formattedExpiryDate);

    }, [expiryMonth, expiryYear, expiry]);


    const withMaxLength = (event: ChangeEvent<HTMLInputElement>, max: number) => {
        const InputElement = (event.target as HTMLInputElement);
        InputElement.value = Math.max(0, parseInt(InputElement.value)).toString().slice(0, max);
        return InputElement.value;
    };

    // Formats months -  all months with index < 10 should start with a 0
    const getMonthValue = (index: number) => {
        const formattedMonth = `${(index + 1) < 10 ? `0${index + 1}` : index + 1}`;
        return formattedMonth;
    };

    const submitForm = () => {
        if (number && name && expiryMonth && expiryYear && cvc && cvc.toString().length === 3 && number.toString().length === 16) {
            setMessage("");
            alert("Submited!");
        } else {
            setMessage("All fields need to be populated or have the correct information");
        }
    };

    return (
        <div className="container mx-auto border-2 p-10">
            <h1 className="text-4xl font-bold pb-4">CreditCard</h1>
            <div className="p-4">
                <p>Instructions: </p>
                <ul className="list-decimal">
                    <li>
                        Maxwidth on card number 16 and cvc number for 3
                    </li>
                    <li>
                        Month and year have pre-chosen values with select element
                    </li>
                    <li>
                        Nothing to validate on name. With the library I am using (react-credit-cards) it is truncated always with the css.
                        (Yea you know how the credit card react works)
                    </li>
                    <li>
                        Submit-button validates if the information to the input fields are correct or not
                    </li>
                </ul>
            </div>
            <div id="PaymentForm" className="pt-8">
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={number}
                />
                <form>
                    <div className="py-10">
                        <div className="w-full block md:flex">
                            {/* Card number */}
                            <div className="w-full md:w-1/2 p-4">
                                <TextField
                                    id="outlined-number"
                                    label="Card number"
                                    type="number"
                                    name="number"
                                    value={number === 0 ? '' : number}
                                    fullWidth
                                    inputProps={{ "data-testid": "form-card-number" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        const cardNumber = withMaxLength(event, 16);
                                        setNumber(cardNumber as unknown as number);
                                    }}
                                    onFocus={(event: FocusEvent<HTMLInputElement>) => setFocus(event.target.name as string)}
                                />
                            </div>

                            {/* Card name */}
                            <div className="w-full md:w-1/2 p-4">
                                <TextField
                                    id="outlined-number"
                                    label="Name"
                                    type="text"
                                    name="name"
                                    value={name}
                                    fullWidth
                                    inputProps={{ "data-testid": "form-card-name" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value as string)}
                                    onFocus={(event: FocusEvent<HTMLInputElement>) => setFocus(event.target.name as string)}
                                />
                            </div>
                        </div>

                        {/* Expiry */}
                        <div className="w-full block md:flex">
                            {/* Expiry month */}
                            <div className="w-full md:w-1/3 p-4">
                                <FormControl fullWidth>
                                    <InputLabel id="expiry-month">Month</InputLabel>
                                    <Select
                                        labelId="expiry-month"
                                        value={expiryMonth}
                                        label="month"
                                        inputProps={{ "data-testid": "form-card-expiry-month" }}
                                        onChange={(event: SelectChangeEvent) => {
                                            setExpiryMonth(event.target.value as string)
                                        }}
                                        onFocus={(event: FocusEvent<HTMLInputElement>) => setFocus(event.target.name as string)}
                                    >
                                        {monthsData && monthsData.months && monthsData.months.map((month: string, index: number) => (
                                            <MenuItem key={month} value={getMonthValue(index)}>{month}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>

                            {/* Expiry year */}
                            <div className="w-full md:w-1/3 p-4">
                                <FormControl fullWidth>
                                    <InputLabel id="expiry-year">Year</InputLabel>
                                    <Select
                                        labelId="expiry-year"
                                        value={expiryYear}
                                        label="year"
                                        inputProps={{ "data-testid": "form-card-expiry-year" }}
                                        onChange={(event: SelectChangeEvent<string>) => setExpiryYear(event.target.value as string)}
                                        onFocus={(event: FocusEvent<HTMLInputElement>) => setFocus(event.target.name as string)}
                                    >

                                        {monthsData && monthsData.year && monthsData.year.map((year: string) => (
                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>

                            {/* CVC number */}
                            <div className="w-full md:w-1/3 p-4">
                                <TextField
                                    id="outlined-number"
                                    label="CVC"
                                    type="number"
                                    name="cvc"
                                    fullWidth
                                    value={cvc === 0 ? '' : cvc}
                                    inputProps={{ "data-testid": "form-card-cvc" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        const cvcNumber = withMaxLength(event, 3);
                                        setCvc(cvcNumber as unknown as number);
                                    }}
                                    onFocus={(event: FocusEvent<HTMLInputElement>) => setFocus(event.target.name as string)}
                                />
                            </div>
                        </div>

                        {/* Warning message that the some field / fields are empty */}
                        {message && <p className="p-4 italic">{message}</p>}

                        {/* Submit button */}
                        <div className="w-full p-4">
                            <Button variant="outlined" onClick={() => submitForm()}>Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreditCard;