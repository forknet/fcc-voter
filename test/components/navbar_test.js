import { renderComponent , expect } from '../test_helper';
import NavBar from '../../src/components/navbar';

describe('NavBar', () =>{
  let component;
  beforeEach(()=> {
    component = renderComponent(NavBar)
  })

  it('has a home button', () =>{
    expect(component).to.have.class('home')
  })

  it('has a sign-in button', () =>{
    expect(component).to.have.class('sign-in')
  })

})
