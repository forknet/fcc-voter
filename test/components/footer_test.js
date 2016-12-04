import { renderComponent , expect } from '../test_helper';
import Footer from '../../src/components/footer';

describe('Footer', () =>{
  let component;
  beforeEach(() => {
    component = renderComponent(Footer);
  });
  it('has the correct className', ()=>{
    expect(component).to.have.class('page-footer');
  })
  it('has a Github link', ()=>{
    expect(component.find('.github-link')).to.have.attr("href")
  })
  it('has a Portfolio-Homepage link', ()=>{
    expect(component.find('.portfolio-link')).to.have.attr("href")
  })
  it('has a FreeCodeCamp link', ()=>{
    expect(component.find('.fcc-link')).to.have.attr("href")
  })
})
