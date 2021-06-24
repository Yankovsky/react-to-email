# React, styled-components -> static email html

Generates static html. Uses styled-components for css.

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

# Emails FAQ

- our priority is to support Gmail, Outlook and iOS Mail
- we should use inline styles as much as possible, because only they guaranteed to work in all mail clients
- pseudo classes and media queries stay inside the embedded <style/> tag, because they cannot be inlined,
  also !important should be added to any rule in these categories to make their specificity higher than inlined styles
- use tables for layouts
- we can test emails on litmus, http://testi.at/, or using https://mailchimp.com/help/test-with-inbox-preview/
- <!DOCTYPE html> must be in resulting html document
- mailchimp and mail clients can add their own postprocessing 

# TODOs

- figure out how to embed images
- unsubscribe link
- “Confirm email address” button (will it call some API method or redirect to a page)
- pass template params to mailchimp
- responsive?
- prepare fonts and upload them somewhere

## References and useful resources on creating emails

[https://templates.mailchimp.com/getting-started/html-email-basics/](https://templates.mailchimp.com/getting-started/html-email-basics/)

[https://templates.mailchimp.com/resources/email-client-css-support/](https://templates.mailchimp.com/resources/email-client-css-support/)

[https://www.caniemail.com/](https://www.caniemail.com/)

[https://docs.google.com/spreadsheets/d/1LMIT7wvUHgEncYHtI1TssjICxwa-hDAs9ui0-Lvkido/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1LMIT7wvUHgEncYHtI1TssjICxwa-hDAs9ui0-Lvkido/edit?usp=sharing)

[https://paddle.com/blog/why-we-created-an-email-system-using-react/](https://paddle.com/blog/why-we-created-an-email-system-using-react/)

[https://building.lang.ai/how-to-build-emails-with-react-fcf941b125d1](https://building.lang.ai/how-to-build-emails-with-react-fcf941b125d1)

[Article on how to style emails](https://webcache.googleusercontent.com/search?q=cache:Qpic5sqjfB0J:https://customer.io/blog/how-to-make-css-play-nice-in-html-emails-without-breaking-everything/+&cd=1&hl=en&ct=clnk&gl=ru)

[Responsive emails](https://css-tricks.com/ideas-behind-responsive-emails/)

[Discussion in styled-components repo](https://github.com/styled-components/styled-components/issues/1116)

[Similar approach and stack](https://github.com/acro5piano/react-emailify)

[Some other repo related to the subject](https://github.com/sbekrin/styled-email-components)

[Discussion about react emails](https://spectrum.chat/react/general/how-do-you-write-emails~f60d85ff-3154-4248-86c0-cb3cae65543f)

[Alternative to juice](http://styliner.slaks.net/)

[https://gist.github.com/ArtyomResh/008b285d4a6aec3493bd911661ebe53e](https://gist.github.com/ArtyomResh/008b285d4a6aec3493bd911661ebe53e)

[https://github.com/chromakode/react-html-email](https://github.com/chromakode/react-html-email)

[https://github.com/lang-ai/react-emails](https://github.com/lang-ai/react-emails)
