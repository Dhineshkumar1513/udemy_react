import image1 from './image/New folder/tech1.webp'
import image3 from './image/New folder/tech3.webp'
import image4 from './image/New folder/tech4.webp'
import image5 from './image/New folder/tech5.webp'
import image0 from './image/New folder/udemy.jpg'
function Nav(){
    return(
<div>
<div className="head">
      <div className="head__name">
        <h1>Udemy</h1>
      </div>
      <div className="head__search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search for anything here" ></input>
      </div>
      <div className="head__icons">
        <p>Courses</p>
        <p>My Learning</p>
        <div className="head__icons__icon">
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-bell"></i>
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
      <div className="head__hide"><i className="fa-solid fa-bars"></i>
      </div>
    </div>
        <div className="development">
      <p>Development</p>
      <p>Business</p>
      <p>IT & Software</p>
      <p>Personal Development</p>
      <p>Design</p>
      <p>Marketing</p>
    </div>
    <div className="image">
      <img src={image0} alt="" ></img>
    </div>
    <div className="box__animation">
      <h1>Udemy Flash Sale! 24 hours to save.</h1>
      <p>
        Get the top course for just 499. just one day to save but a lifetime to
        learn
      </p>
    </div>
    <div className="headline">
      <h1 className="headline__recommend">Recommended for you</h1>
      <p>pick the best fit</p>
      <div class="course__card">
        <div className="course__card__details">
          <img src={image1} alt="" />
          <h1>2023 Python Data Visaulisation Materclass</h1>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
        <div className="course__card__details">
          <img src={image3} alt="" />
          <h1>Basic to Advanced programming with EMC</h1>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
        <div className="course__card__details">
          <img src={image4} alt="" />
          <h1>Webdevelopment bootcamp 2023</h1>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
        <div className="course__card__details">
          <img src={image5} alt="" />
          <h1>Master UX/UI Designing with Figma</h1>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
      </div>
    </div>
    <div className="topics">
      <h1 className="topics__topic">Topics Recomanded For You</h1>
      <div className="topic">
        <h3>Website</h3>
        <h3>JavaScript</h3>
        <h3>CSS</h3>
        <h3>MangoDB</h3>
        <h3>Azure</h3>
        <h3>AWS</h3>
        <h3>Docker</h3>
        <h3>GitHub</h3>
        <h3>ReactJs</h3>
      </div>
    </div>
    
    
    <div className="headline">
      <h1 className="headline__recommend">Most Popular</h1>
      <p>pick the best fit</p>
      <div className="course__card">
        <div className="course__card__details">
          <img src={image1} alt="" />
          <h1>2023 Python Data Visaulisation Materclass</h1>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
        <div className="course__card__details">
          <img src={image3} alt="" />
          <h1>Basic to Advanced programming with EMC</h1>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
        <div className="course__card__details">
          <img src={image4} alt="" />
          <h1>Webdevelopment bootcamp 2023</h1>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
        <div className="course__card__details">
          <img src={image5} alt="" />
          <h1>Master UX/UI Designing with Figma</h1>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
      </div>
    </div>
    <div className="headline">
      
      <div className="course__card">
        <div className="course__card__details">
          <img src={image1} alt="" />
          <h1>2023 Python Data Visaulisation Materclass</h1>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
        <div className="course__card__details">
          <img src={image3} alt="" />
          <h1>Basic to Advanced programming with EMC</h1>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
        <div className="course__card__details">
          <img src={image4} alt="" />
          <h1>Webdevelopment bootcamp 2023</h1>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
        <div className="course__card__details">
          <img src={image5} alt="" />
          <h1>Master UX/UI Designing with Figma</h1>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>19999</del></p>
        </div>
      </div>
    </div>
    <div className="fooder">
    <div className="fooder__left">
      <p>Udemy Business</p>
      <p>Teach of Udemy</p>
      <p>Get the App</p>
      <p>About Us</p>
      <p>Contact Us</p>
    </div>
    <div className="fooder__right">
      <p>Careers</p>
      <p>Blog</p>
      <p>Help and Support</p>
      <p>Afilliate</p>
      <p>Investers</p>
  </div>
</div>
  <div className="copyright" >
    <h1>Udemy</h1>
    <p>©Udemy,lnc</p>
 </div>
</div>
    )
}

export default Nav