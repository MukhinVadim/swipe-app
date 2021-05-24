import { React, useState } from 'react'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Moment from "react-moment";

function App() {

	const [value, setValue] = useState('')
	const [values, setValues] = useState([])

	const onChangeHandler = (event) => {
		setValue(event.target.value)
	}

	const onClickHandler = () => {
		setValues(prev => [...prev, value])
		setValue('')
	}

	return (
		<div className="App">
			<Swiper
				slidesPerView={ 1 }
				pagination={ { clickable: true } }
				onSwiper={ (swiper) => console.log(swiper) }
				onSlideChange={ () => console.log('slide change') }
			>
				<SwiperSlide>
					<div className="first-slide">
						<div className="first-slide-form">
							<textarea name="text"
												placeholder="Enter your text here"
												onChange={ onChangeHandler }
												value={ value }
												className="first-slide-form__textarea"/>
							<button onClick={ onClickHandler }
											className="first-slide-form__button">Send
							</button>
						</div>
						{ values.map((value, index) =>
							<div key={ index }
									 className="first-slide__message">{ value }
							</div>) }
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="second-slide">
						<Moment format="HH:mm:ss" interval={ 1000 }/>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default App;
