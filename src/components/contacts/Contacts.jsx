import { CalendarDay } from '../Calendar';
import styled from 'styled-components';

export const Contacts = () => {
	return (
		<div>
			<Main>
				Давайте работать вместе
				<Container>
					<Block>
						<div>
							<p>
								Чтобы закать услуги фотографа, Вы можете связаться со мной любым
								удобным для Вас способом. Я всегда открыта к общению и рада
								сотрудничеству, рассмотрю Ваши интересные идеи или предложения!
							</p>
						</div>
					</Block>
					<Block>
						<div>
							<p>Email</p>
							<StyledA>
								<a href="mailto:voronevskaya.com@gmail.com">
									voronevskaya.com@gmail.com
								</a>
							</StyledA>
							<p>Телефон</p>
							<StyledA>
								<a href="tel:+375445379760">+375 (44) 537-97-60</a>
							</StyledA>
						</div>
					</Block>
				</Container>
				<CalendarDay />
			</Main>
		</div>
	);
};
const Container = styled.div`
	padding-top: 30px;
	display: flex;
	color: #252525;
	line-height: 1.3;
	font-weight: 600;
`;
const Block = styled.div`
	margin-left: 50px;
	margin-right: 50px;
	text-align: left;
	font-size: 20px;
`;
const Main = styled.div`
	text-align: center;
	padding: 0px 30px 30px;
	margin-top: 50px;
	border-radius: 10px;
	flex-wrap: nowrap;
	font-size: 46px;
`;
const StyledA = styled.a`
	a:hover,
	a:visited,
	a:link,
	a:active {
		color: black;
		text-decoration: none;
	}
`;
