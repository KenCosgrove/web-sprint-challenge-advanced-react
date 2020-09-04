import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />)

    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last name:/i)
    const address = screen.getByLabelText(/address:/i)
    const city = screen.getByLabelText(/city:/i)
    const state = screen.getByLabelText(/state:/i)
    const zipCode = screen.getByLabelText(/zip:/i)
    const submitBtn = screen.getByRole('button', {
        name: /checkout/i
    })

    fireEvent.change(firstName,{
        target: {value: 'AJ'}
    })
    fireEvent.change(lastName,{
        target: {value: 'Gambino'}
    })
    fireEvent.change(address,{
        target: {value: '129 West 81st St'}
    })
    fireEvent.change(city,{
        target: {value: 'New York'}
    })
    fireEvent.change(state,{
        target: {value: 'NY'}
    })
    fireEvent.change(zip,{
        target: {value: '99999'}
    })

    //click event
    fireEvent.click(submitBtn)






});
