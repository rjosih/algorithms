import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'

import CreditCard from "../../src/pages/CreditCard";

describe("<CreditCard />", () => {
    test('Credit card number - max length 16 characters', async () => {
        render(<CreditCard />);
        const cardNumber = screen.getByTestId("form-card-number");
        // Value longer than 16 characters
        fireEvent.change(cardNumber, { target: { value: 321123324324543532 } });
        // Should only return first 16 characters
        expect((cardNumber as HTMLInputElement).value).toHaveLength(16);
        expect((cardNumber as HTMLInputElement).value).toBe("3211233243245435");
    });

    test('Credit card name - populating name field', async () => {
        render(<CreditCard />);
        const cardName = screen.getByTestId("form-card-name");
        fireEvent.change(cardName, { target: { value: "Jane Doe" } });
        expect((cardName as HTMLInputElement).value).toBe("Jane Doe");
    });

    test('Credit card expiry month - change select option', () => {
        render(<CreditCard />)
        const expiryMonth = screen.getByTestId("form-card-expiry-month");

        // Chosing 10 = October
        fireEvent.change(expiryMonth, {
            target: { value: "10" },
        });

        expect((expiryMonth as HTMLInputElement).value).toBe("10");
        expect(screen.getByText("October")).toBeInTheDocument();
    });

    test('Credit card expiry year - change select option select', () => {
        render(<CreditCard />)
        const expiryYear = screen.getByTestId("form-card-expiry-year");

        // Chosing year 2024
        fireEvent.change(expiryYear, {
            target: { value: 2024 },
        });

        expect((expiryYear as HTMLInputElement).value).toBe("2024");
        expect(screen.getByText("2024")).toBeInTheDocument();
    });

    test("Credit card cvc - max length 3 characters", async () => {
        render(<CreditCard />);
        const cardCvc = screen.getByTestId("form-card-cvc");
        // Value longer than 3 characters
        fireEvent.change(cardCvc, { target: { value: 321123324324543532 } });
        // Should only return first 3 characters
        expect((cardCvc as HTMLInputElement).value).toHaveLength(3);
        expect((cardCvc as HTMLInputElement).value).toBe("321");
    });
});


