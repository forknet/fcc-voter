import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });
  it('contains a Nav-Bar', () => {
    expect(component.find('nav')).to.exist
  });
  it('contains this.props.children', () => {
    expect(component.children).to.exist
  });
  it('contains a Footer', () => {
    expect(component.find('.page-footer')).to.exist
  })
});
