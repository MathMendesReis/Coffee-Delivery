import Home from '../pages/home';
import { render } from '@testing-library/react';

test('renders home page', () => {
    render(<Home />);
});
// Add your assertions here

test('renders home page', () => {
    render(<Home />);
    // Add your assertions here
});

test('renders banner with correct text', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Encontre o café perfeito para qualquer hora do dia')).toBeInTheDocument();
});

test('renders subtitle with correct text', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora')).toBeInTheDocument();
});

test('renders coffee catalog', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('coffee-catalog')).toBeInTheDocument();
});

