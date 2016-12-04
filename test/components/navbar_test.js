import { renderComponent , expect } from '../test_helper';
import NavBar from '../../src/components/navbar';

describe('NavBar', () =>{
  let component;
  beforeEach(()=> {
    component = renderComponent(NavBar)
  })
  it('has the correct className', ()=>{
    expect(component).to.have.class('nav-wrapper')
  })
  it('has a home button', () =>{
    expect(component.find('.home')).to.exist
  })
  it('has a sign-in button', () =>{
    expect(component.find('.sign-in')).to.exist
  })
  it('has a welcome message to guest/user', () =>{
    expect(component.find('.welcome')).to.exist
  })

})
