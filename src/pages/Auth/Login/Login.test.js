const React = require("react")
const { render, screen } = require("@testing-library/react");
const Login = require("./Login")

describe("Login Component", () => {
    // Auth inputs should initially be empty 
    test("Inputs render should initially be empty", () => {
        //arrange
        render(<Login />)
        /**
            act
            ...
         */
        //assert
        const EmailElement = screen.getByLabelText("Email Address")
        expect(EmailElement.value).toBe("")

    });
})