var cycose = require('cytoscape-cose-bilkent')
var cytoscape = require('cytoscape')
var domready = require('domready')
cycose(cytoscape)

domready(function() {
    console.log(document.getElementById('cy'));
    var cy = cytoscape({
        container: document.getElementById('cy'),
        elements: [
            { data: { id: 'a' } },
            { data: { id: 'b' } },
            {
                data: {
                    id: 'ab',
                    source: 'a',
                    target: 'b'
                }
            }
        ],

        layout: {
            name: 'cose-bilkent'
        }
    });
})
