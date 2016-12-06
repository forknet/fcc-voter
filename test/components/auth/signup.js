import { renderComponent, expect } from '../../test_helper';
import Signup from '../../../src/client/components/auth/signup';

describe('Signup', ()=>{
  let component;
  beforeEach(() => {
    component = renderComponent(Signup)
  })
  it('page should exist', () =>{
    expect(component).to.exist
  })
  it('should have a login email', () =>{
    expect(component.find('.email-login')).to.exist
  })
  it('should have a password for user to put in', () =>{
    expect(component.find('.password-input')).to.exist
  })
  it('should have a password confirmation', () =>{
    expect(component.find('.password-confirmation')).to.exist
  })
  it('should have a Twitter Token', () =>{
    expect(component.find('.twitter-token')).to.exist
  })
})
