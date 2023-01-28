This Simple Social Media Buttom, you can generate using PUG (Jade) and Gulp.

## Installing
First, clone the repository
```bash
git clone https://github.com/IcyDev/single-social-media-button.git
```
After that, install all dependence
```bash
npm install
```
Then, run gulp
```bash
gulp
```
and that's all.

## Editing Code
Only open `src/index.pub` and edit `-var values`.
```javascript
-var values = [
		{
			link: '#',
			icon: 'https://www.freepnglogos.com/uploads/facebook-logo-13.png',
			alt: 'Facebook'
		},
		{
			link: '#',
			icon: 'https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png',
			alt: 'Instagram'
		},
		{
			link: '#',
			icon: 'https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png',
			alt: 'WhatsApp'
		}
	]
