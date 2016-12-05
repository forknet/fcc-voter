import { renderComponent , expect } from '../test_helper';
import Footer from '../../src/client/components/footer';

describe('Footer', () =>{
  let component;
  beforeEach(() => {
    component = renderComponent(Footer);
  });
  it('has the correct className', ()=>{
    expect(component).to.have.class('page-footer');
  })
  it('has container for Font Awesome', ()=>{
    expect(component.find('.font-awesome')).to.exist
  })
  it('has a Github link', ()=>{
    expect(component.find('.font-awesome .fa-address-card-o')).to.exist
  })
  it('has a Portfolio-Homepage link', ()=>{
    expect(component.find('.font-awesome .fa-github ')).to.exist
  })
  it('has a FreeCodeCamp link', ()=>{
    expect(component.find('.font-awesome .fa-free-code-camp')).to.exist
  })
})
