import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
    const {i18n} = useTranslation()
  
    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('locale', e.target.value)
    };

    return (
        <select name="language" onChange={(e) => changeLanguage(e)}>
            {i18n.languages.map((lang => <option value={lang} key={lang}>{lang}</option>))}
        </select>
    )
}

export default LanguageSelector;