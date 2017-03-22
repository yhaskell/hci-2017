import * as jsdom from 'jsdom'
declare var global: any

if (!global.document) {
    const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
    global.document = doc
    global.window = doc.defaultView
}
