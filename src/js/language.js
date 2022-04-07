$('.select-country').flagStrap({
	countries: {
		US: 'USD',
		AU: 'AUD',
		CA: 'CAD',
		SG: 'SGD',
		GB: 'GBP',
	},
	buttonSize: 'btn-sm',
	buttonType: 'btn-info',
	labelMargin: '10px',
	scrollable: false,
	scrollableHeight: '350px',
});

const messageBtn = document.querySelector('.message-btn');

const chat = document.querySelector('.chat');
const chatClose = document.querySelector('.chat__close');
messageBtn.addEventListener('click', chatToggle);
chatClose.addEventListener('click', chatToggle);

function chatToggle(e) {
	e.preventDefault();
	if (chat.style.maxHeight) {
		chat.style.maxHeight = null;
	} else {
		chat.style.maxHeight = chat.scrollHeight + 'px';
	}
}
