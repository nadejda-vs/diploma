import { Button } from '../button/index';

import styled from 'styled-components';
import { Block } from '../Block';
export const AboutMe = () => {
	return (
		<BodyStyled>
			<div>
				<main>
					<AboutMeStyled>
						<div>
							<h1>Добро пожаловать на одну из страниц моей жизни.</h1>
							<p>
								Привет! Меня зовут Алена, я занимаюсь производством фото и видео
								контента в Минске. Провожу как индивидуальные фотосессии, так и
								коммерческие съемки для малого бизнеса.
							</p>
							<p>
								Считаю себя вдумчивым и любопытным человеком. Очаровываюсь
								окружением, и удивляюсь, как жизнь привела нас туда, где мы
								есть.
							</p>
							<p>
								Я люблю путешествовать, открывать новые места и изучать местные
								культуры. Поклоница городской жизни, но иногда не против
								оказаться в тишине пустыни или слушать шум разбивающихся волн.
								Живу в городе Минске, в семье из 2 человек и 1 обожаемого кота
								:).
							</p>
							<Button text={'Контакты'} />
						</div>
						<div>
							<img src="/images/17.jpg" width="924px" height="500px"></img>
						</div>
					</AboutMeStyled>
				</main>

				<H1Styled> Направления деятельности </H1Styled>

				<article>
					<DivStyled>
						<Container>
							<Block
								Texth2={'Индивидуальная съемка'}
								textP={'Знаю как подчеркнуть достоинства и скрыть недостатки.'}
							/>
						</Container>
						<Container>
							<Block
								Texth2={'Рекламная фотосъемка'}
								textP={
									'Закрываю полный цикл производства контента, от идеи до готового материала.'
								}
							/>
						</Container>
						<Container>
							<Block
								Texth2={'Съемка и монтаж видео'}
								textP={
									'Делаю промо ролики для презентации бренда, товара или услуги.'
								}
							/>
						</Container>
					</DivStyled>
				</article>
			</div>
		</BodyStyled>
	);
};
const BodyStyled = styled.div`
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
	font-size: 16px;
	color: #636363;
	text-align: center !important;
`;
const DivStyled = styled.div`
	display: flex;
	flex-wrap: nowrap;
	margin-right: 15px;
	margin-left: 15px;
	padding: 50px 30px 50px;
	text-align: center !important;
	margin-top: 50px;
	border-radius: 10px;

	& :hover {
		color: white;
		background-color: red;
	}
`;
const AboutMeStyled = styled.div`
	display: flex;
	flex-wrap: nowrap;
	margin-top: 20px;
	text-align: left;
	margin-left: 35px;
	margin-right: 35px;
`;

const H1Styled = styled.h1`
	text-align: center;
	margin-top: 50px;
	color: #252525;
	line-height: 1.3;
	font-weight: 600;
`;
const Container = styled.div`
	text-align: center;
	padding: 0px 30px 30px;
	margin-top: 50px;
	border-radius: 10px;
	flex-wrap: nowrap;
`;
