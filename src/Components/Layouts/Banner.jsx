import banner from '../../assets/img/banner.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <div className='banner-img'>
        <img src={banner} alt="banner de hospital" />
      </div>
       <div className="banner-content">
         <h1>Hospital de San Javier</h1>
      </div>
    </div>
  )
}

export default Banner