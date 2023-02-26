import { fetchLanguages } from "./api"
import SearchInput from "./SearchInput"
import Suggestion from "./Suggestion"

export default function App({ $target }) {
    this.state = {
        fetchedLanguages: [],
        selectedLanguages: []
    }

    const searchInput = new SearchInput({
      $target,
      initialState: '',
      onChange: async (keyword) => {        
        if (keyword.length === 0) {
          this.setState({
            fetchedLanguages: []
          })
        } else {
          const languages = await fetchLanguages(keyword)
          this.setState({
            fetchedLanguages: languages
          })
        }
      }
    })

    const suggestion = new Suggestion({
      $target,
      initialState: {
        items: []
      }
    })

    this.setState = (nextState) => {
      this.state = {
        ...this.state,
        ...nextState
      }

      suggestion.setState({
        items: this.state.fetchedLanguages
      })
    }
}