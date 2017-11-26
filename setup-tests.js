import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import dirtyChai from 'dirty-chai'
import sinonChai from 'sinon-chai'
import {
    shallow,
    mount,
    render
} from 'enzyme'
import {
    mock,
    sandbox
} from 'sinon'
import { jsdom } from 'jsdom'


chai.use(chaiEnzyme())
chai.use(dirtyChai)
chai.use(sinonChai)

global.document = jsdom('')
global.expect = expect
global.mock = mock
global.mount = mount
global.navigator = { userAgent: 'node.js' }
global.render = render
global.sandbox = sandbox
global.shallow = shallow
global.window = document.defaultView
