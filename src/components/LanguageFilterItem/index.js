import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const activeBtnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguageButton = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        className={activeBtnClassName}
        onClick={onClickLanguageButton}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
