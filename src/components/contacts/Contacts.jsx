import { CalendarDay } from '../Calendar';

export const Contacts = () => {
	return (
		<div>
			<h1>Давайте работать вместе</h1>
			<p>
				Чтобы закать услуги фотографа, Вы можете связаться со мной любым удобным
				для Вас способом. Я всегда открыта к общению и рада сотрудничеству,
				рассмотрю Ваши интересные идеи или предложения!
			</p>
			<p>
				Email
				<a href="voronevskaya.com@gmail.com"> voronevskaya.com@gmail.com</a>
			</p>
			<p>
				Телефон
				<a href="+375 (44) 537-97-60">+375 (44) 537-97-60</a>
			</p>
			<CalendarDay />
		</div>
	);
};
