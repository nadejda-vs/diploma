import { Button } from '../button/index';
import { Div } from '../div/Div';
import styled from 'styled-components';
export const AboutMe = () => {
	return (
		<BodyStyled>
			<div>
				<main>
					<img src="/images/38.jpg"></img>
					<AboutMeStyled>
						<div>
							<h1>Добро пожаловать на одну из страниц моей жизни.</h1>
							<p>
								Привет! Меня зовут Алена, я занимаюсь производством фото и видео
								контента в Минске. Провожу как индивидуальные фотосессии, так и
								коммерческие съемки для малого бизнеса. Считаю себя вдумчивым и
								любопытным человеком. Очаровываюсь окружением, и удивляюсь, как
								жизнь привела нас туда, где мы есть. Я люблю путешествовать,
								открывать новые места и изучать местные культуры. Поклоница
								городской жизни, но иногда не против оказаться в тишине пустыни
								или слушать шум разбивающихся волн. Живу в городе Минске, в
								семье из 2 человек и 1 обожаемого кота :).
							</p>
							<Button text={'Контакты'} />
						</div>
						<div>
							<img src="/images/17.jpg"></img>
						</div>
					</AboutMeStyled>
				</main>

				<H1Styled> Направления деятельности </H1Styled>

				<article>
					<DivStyled>
						<Div
							Texth2={'Индивидуальная съемка'}
							textP={'Знаю как подчеркнуть достоинства и скрыть недостатки.'}
						/>
						<Div
							Texth2={'Рекламная фотосъемка'}
							textP={
								'Закрываю полный цикл производства контента, от идеи до готового материала.'
							}
						/>
						<Div
							Texth2={'Съемка и монтаж видео'}
							textP={
								'Делаю промо ролики для презентации бренда, товара или услуги.'
							}
						/>
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
`;
const DivStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: 15px;
	margin-left: 15px;
`;
const AboutMeStyled = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const H1Styled = styled.h1`
	text-align: center;
	color: #252525;
	line-height: 1.3;
	font-weight: 600;
`;
