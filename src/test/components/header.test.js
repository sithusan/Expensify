import React from 'react'
import reactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

test('should render Header Correctly',() => {
    const renderer = new reactShallowRenderer();
    renderer.render(<Header/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
 })