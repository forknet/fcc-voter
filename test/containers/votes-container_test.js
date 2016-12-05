import { renderComponent, expect } from '../test_helper';
import VotesContainer from '../../src/client/containers/votes-container';

describe('Voters Containers', () =>{
  let component;
  beforeEach(()=> {
    component = renderComponent(VotesContainer)
  })
  it('has the correct className', ()=>{
    expect(component).to.have.class('votes-container')
  })
  it('has a ballot', () => {
    expect(component.find('.card-content')).to.exist
  })
  it('has a ballot title', () => {
    expect(component.find('.card-content .card-title')).to.exist
  })
  it('has a ballot description', () => {
    expect(component.find('.card-content .description')).to.exist
  })
  it('has a ballot with a div for links', () => {
    expect(component.find('.card-action')).to.exist
  })
})
