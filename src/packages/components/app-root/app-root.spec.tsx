import * as React from 'react'
import AppRoot from './index'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

import 'jsdom-document'

describe('AppRoot', () => {
    it('has one <h1> and <p>', () => {
        const r = mount(<AppRoot />)

        expect(r.find('h1')).to.have.length(1)
        expect(r.find('p')).to.have.length(1)
    })
})
