import { render, screen, fireEvent } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Checkout from '../pages/checkout'

jest.mock('react-hook-form', () => ({
    useForm: jest.fn(),
}))

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}))

describe('Checkout', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should navigate to "/success" when form is valid', () => {
        const mockNavigate = jest.fn()
        const mockFormMethods = {
            formState: { isValid: true },
            handleSubmit: jest.fn((callback) => callback()),
        }
        const mockUseForm = jest.fn(() => mockFormMethods)
        const mockUseCart = jest.fn(() => ({ stateCart: { cartItems: [] } }))

        useForm.mockImplementation(mockUseForm)
        useNavigate.mockImplementation(() => jest.fn())

        render(<Checkout />)

        // Simulate form submission
        fireEvent.submit(screen.getByTestId('checkout-form'))

        expect(mockUseForm).toHaveBeenCalled()
        expect(mockUseCart).toHaveBeenCalled()
        expect(mockFormMethods.handleSubmit).toHaveBeenCalled()
        expect(mockNavigate).toHaveBeenCalledWith('/success', { state: { data: {} } })
    })

    it('should render empty cart message when cart is empty', () => {
        const mockUseForm = jest.fn(() => ({
            formState: { isValid: false },
            handleSubmit: jest.fn(),
        }))
        const mockUseCart = jest.fn(() => ({ stateCart: { cartItems: [] } }))

        useForm.mockImplementation(mockUseForm)
        useNavigate.mockImplementation(() => jest.fn())

        render(<Checkout />)

        expect(mockUseForm).toHaveBeenCalled()
        expect(mockUseCart).toHaveBeenCalled()
        expect(screen.getByText('carrinho vazio')).toBeInTheDocument()
    })

    it('should render cart list when cart is not empty', () => {
        const mockUseForm = jest.fn(() => ({
            formState: { isValid: false },
            handleSubmit: jest.fn(),
        }))
        const mockUseCart = jest.fn(() => ({
            stateCart: { cartItems: [{ id: 1, name: 'Coffee 1' }, { id: 2, name: 'Coffee 2' }] },
        }))

        useForm.mockImplementation(mockUseForm)
        useNavigate.mockImplementation(() => jest.fn())

        render(<Checkout />)

        expect(mockUseForm).toHaveBeenCalled()
        expect(mockUseCart).toHaveBeenCalled()
        expect(screen.getByTestId('cart-list')).toBeInTheDocument()
    })
})