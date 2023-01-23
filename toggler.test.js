import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Toggler from './toggler'

it('should show <h1> at loading of page and should toggle (dont put two tests in the same test, this is only for your notes fuckface)', () => {
    const {getByText} = render (<Toggler />)
    const heading = getByText('Hello World')
    expect(heading).toHaveClass('Toggler-text')
    expect(heading).toBeInTheDocument();

    fireEvent.click(getByText('TogglerBtn'))
    expect(heading).not.toBeInTheDocument();
    // LOOK AT ME LOOK AT ME NOTICE WE TRIGGERED THE EVENT HANDLER

    
})
