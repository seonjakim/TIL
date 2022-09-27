import h from 'hyperscript';
import hh from 'hyperscript-helpers';

const { div } = hh(h)
const initModel = 0
function view(model) {
  return div([
    div(`Count: ${model}`),
    button('+'),
    button('-')
  ])
}

const rootNode = document.getElementById('app')
rootNode.appendChild(view(initModel))