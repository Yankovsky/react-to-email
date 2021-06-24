# React -> email html

`yarn` to install all dependencies

`yarn dev` to start development in watch mode

`yarn build` to build the code base and 
put all generated html email pages in dist/ folder

# Example usage

```js
import React from 'react'

import { Title } from '../../components/Title'
import { Text } from '../../components/Text'
import { StyledTable } from './styled'

export const MyExamplePage = () => {
  return <StyledTable>
    <Title>My Title</Title>
    <Text>My Text</Text>
  </StyledTable>
}
```
-> 
```html
<!DOCTYPE html>
<html>
<head>
	<title>My Html page</title>
	<style data-styled="true" data-styled-version="5.3.0">
        .fIhgoC:hover {
            color: green !important;
        }

        @media (max-width: 1200px) {
            .fIhgoC {
                color: pink !important;
                background: blue !important;
            }
        }
	</style>
</head>
<body style="margin:0">
<table style="background: lightcyan; margin: 200px;">
	<tr>
		<td><h1 class="fIhgoC" style="color: red;">My Title</h1>
			<p style="font-style: italic; background: lightcoral;">My Text</p></td>
	</tr>
</table>
</body>
</html>
```

# Challenges

- он использует pug (jade) и переиспользует общий шаблон, хедер, футер
- вроде ничто нам не мешает делать то же самое на реакте
- используются инлайн стили, потому что не все поддерживают тег <style/>
- есть плагин который инлайнит стили
- hover’ы и media query в style теге, потому что их не заинлайнить, мобильные почтовые клиенты должны уметь читать media
- всё верстается таблицами, даже если два параграфа текста идут, то лучше таблицами
- тестить на litmus или http://testi.at/
- шрифты мало где поддерживаются, но подключаются как обычно, обязательно писать фоллбек
- вот так выглядит bulletproof button для email https://buttons.cm/
- можно тестировать через mailchimp https://mailchimp.com/help/test-with-inbox-preview/, всего 25 прогонов можно сделать
- главное, чтобы выглядело ок в Gmail + Outlook + iOS Mail
- unsubscribe через нашу ручку
- если будут достаточно простые шаблоны, то копирайтер справится с их редактированием
- <!DOCTYPE html> в html документе
- Полезно https://templates.mailchimp.com/getting-started/html-email-basics/
- mailchimp может добавлять собственный процессинг
- inline css https://github.com/Automattic/juice
- https://docs.google.com/spreadsheets/d/1LMIT7wvUHgEncYHtI1TssjICxwa-hDAs9ui0-Lvkido/edit?usp=sharing
- [Топовые рекомендации](https://gist.github.com/ArtyomResh/008b285d4a6aec3493bd911661ebe53e)


## Can I email?

[https://templates.mailchimp.com/resources/email-client-css-support/](https://templates.mailchimp.com/resources/email-client-css-support/)

[https://www.caniemail.com/](https://www.caniemail.com/)

[https://docs.google.com/spreadsheets/d/1LMIT7wvUHgEncYHtI1TssjICxwa-hDAs9ui0-Lvkido/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1LMIT7wvUHgEncYHtI1TssjICxwa-hDAs9ui0-Lvkido/edit?usp=sharing)

## Useful resources on creating emails

- [https://paddle.com/blog/why-we-created-an-email-system-using-react/](https://paddle.com/blog/why-we-created-an-email-system-using-react/)

- [https://building.lang.ai/how-to-build-emails-with-react-fcf941b125d1](https://building.lang.ai/how-to-build-emails-with-react-fcf941b125d1)

- [Article on how to style emails](https://webcache.googleusercontent.com/search?q=cache:Qpic5sqjfB0J:https://customer.io/blog/how-to-make-css-play-nice-in-html-emails-without-breaking-everything/+&cd=1&hl=en&ct=clnk&gl=ru)

- [Responsive emails](https://css-tricks.com/ideas-behind-responsive-emails/)

### References

[Discussion in styled-components repo](https://github.com/styled-components/styled-components/issues/1116)

[Similar approach and stack](https://github.com/acro5piano/react-emailify)

[Some other repo related to the subject](https://github.com/sbekrin/styled-email-components)

[Discussion about react emails](https://spectrum.chat/react/general/how-do-you-write-emails~f60d85ff-3154-4248-86c0-cb3cae65543f)

[Alternative to juice](http://styliner.slaks.net/)

[https://github.com/chromakode/react-html-email](https://github.com/chromakode/react-html-email)

[https://github.com/lang-ai/react-emails](https://github.com/lang-ai/react-emails)