import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-content-container">
      <div className="description-container">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-button">
          Shop Now
        </button>
      </div>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="brand-logo"
        />
      </div>
    </div>
  </>
)
export default Home
