import { createI18n } from 'vue-i18n'
import en from '@/lang/locale/en.json'

// function loadLocaleMessage() {
// 	// const locales = require.context('./locale/', true, /\bResource.\b[\bNoTranslate.\b]*?[A-Za-z0-9-_,\s]+\b\.json\b$/i)
//   const locales = import.meta.glob('./locale/*.json')
//   console.log(locales)

// 	const messages = {}
// 	locales.forEach((key) => {
// 		const matched = key.match(/(\bNoTranslate.\b)?[A-Za-z0-9-_,\s]+?(?=\b\.json\b)/i)

// 		if (matched && matched.length > 0) {
// 			const locale = matched[0]
// 			messages[locale] = locales(key)
// 		}
// 	})
// 	return messages
// }

export default createI18n({
	legacy: false,
	locale: navigator.language,
	messages: {
    'en': en    
  },
	silentFallbackWarn: true
})
