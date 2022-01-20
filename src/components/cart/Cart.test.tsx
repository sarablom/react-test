import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from "./Cart";

describe("component Cart", () => {
    it("component renders without crashing", () => {
        render (<Cart />)
    })

    it("when user first visits site the price in cart should be 0 kr", () => {
        render (<Cart />)
    })
})