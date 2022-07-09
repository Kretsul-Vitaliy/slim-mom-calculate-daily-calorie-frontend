import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { SwitcherWrapper, SwitcherList, LangButton } from './LanguageSelector.styled'

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {i18n} = useTranslation()
  
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('locale', lang)
    };

    return (
        <SwitcherWrapper onClick={() => setIsOpen(!isOpen)}>
            <SwitcherList className={isOpen ? 'open' : ''}>
                {i18n.languages.map(
                    (lang => 
                            <LangButton className={lang === i18n.language ? 'active' : ''} type='button' onClick={() => changeLanguage(lang)} key={lang}>
                                {lang}
                            </LangButton>
                ))}
            </SwitcherList>
        </SwitcherWrapper>
    )
}

export default LanguageSelector;

//<select name="language" onChange={(e) => changeLanguage(e)}>
 //           {i18n.languages.map((lang => <option value={lang} key={lang}>{lang}</option>))}
   //     </select>