export default function Suggestion ({ $target, initialState, onSelect }) {
  this.$element = document.createElement('div')
  this.$element.className = 'Suggestion'
  $target.appendChild(this.$element)

  this.state = {
    selectedIndex: 0,
    items: initialState.items
  }

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }

  window.addEventListener('keyup', (e) => {
    if (this.state.items.length > 0) {
      const { selectedIndex } = this.state
      
    }
  })

  this.render = () => {
    const { items = [] } = this.state
    if (items.length > 0) {
      this.$element.style.display = 'block'
      this.$element.innerHTML = `
        <ul>
          ${items.map((item, index) => `
            <li class="${index === selectedIndex ? 'Suggestion__item--selected' : ''}" data-index="${index}">${item}</li>
          `).join('')}
        </ul>
      `
    } else {
      this.$element.style.display = 'none'
      this.$element.innerHTML = ''
    }
  }

  this.render()
}