import { renderComponent, expect } from '../../test_helper';
import Login from '../../../src/client/components/auth/login';

describe('Login', ()=>{
  let component;
  beforeEach(() => {
    component = renderComponent(Login)
  })
  it('page should exist', () =>{
    expect(component).to.exist
  })
  it('should have a login email', () =>{
    expect(component.find('.email-login')).to.exist
  })
  it('should have a password confirmation', () =>{
    expect(component.find('.password-confirmation')).to.exist
  })
  it('should have a Twitter Token', () =>{
    expect(component.find('.twitter-token')).to.exist
  })
})
