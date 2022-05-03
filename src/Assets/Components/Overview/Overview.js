
import Hero from '../Hero/Hero'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function Overview() {
	return (
		<>
			<main>
				<div className='container'>
					<div className='hero'>
						<Hero text='Unresolved' numbers={60} />
						<Hero text='Overdue' numbers={16} />
						<Hero text='Open' numbers={43} />
						<Hero text='On hold' numbers={64} />
					</div>
					<Main />
				</div>
			</main>
			<footer>
				<div className='container'>
					<Footer />
				</div>
			</footer>
		</>
	);
}

export default Overview;