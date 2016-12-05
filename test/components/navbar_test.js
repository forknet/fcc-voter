import { renderComponent , expect } from '../test_helper';
import NavBar from '../../src/containers/navbar';

describe('NavBar', () =>{
  let component;
  beforeEach(()=> {
    component = renderComponent(NavBar)
  })
  it('has the correct className', ()=>{
    expect(component).to.have.class('nav-wrapper')
  })
  it('has the right brand text', ()=>{
    expect(component.find('.brand-logo')).to.have.text('Votez')
  })
  it('has a home button', () =>{
    expect(component.find('.brand-logo')).to.exist
  })
  it('has a log-in button', () =>{
    expect(component.find('.login')).to.exist
  })
  it('has a welcome message to guest/user', () =>{
    expect(component.find('.welcome')).to.exist
  })
  it('has a button to view all polls', () =>{
    expect(component.find('.all-polls')).to.exist
  })

})
