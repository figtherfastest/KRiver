// vant翻译
import { Locale } from 'vant'
import zhCN from 'vant/lib/locale/lang/zh-CN'
import zhHK from 'vant/lib/locale/lang/zh-HK'
import enUS from 'vant/lib/locale/lang/en-US'
var lang = localStorage.getItem('lang') || 'zhCN'
changeLang(lang)

function changeLang(newlang) {
	switch (newlang) {
		case 'zhCN':
			Locale.use('zhCN', zhCN)
			break
		case 'en':
			Locale.use('en', enUS)
			break
		case 'zhCHT':
			Locale.use('zhHK', zhHK)
			break
	}
}

export function Local(mylang) {
	changeLang(mylang)
}
