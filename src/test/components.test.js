import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('App component testing with snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Quote />);
    expect(tree).toMatchSnapshot();
  });

});
