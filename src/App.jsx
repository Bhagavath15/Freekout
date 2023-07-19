import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Influencer />
      <Blog />
      <Connect />
      <BottomNav />
    </div>
  )
}

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <div className={`navbar-content  ${isSticky ? 'sticky' : ''}`}>
      <img className='navbar-img' src="https://www.freeskout.com/img/freeskout.png" alt="freeksout" />
      <div className='navbar-details'>
        <a className='navbar-item' href="#">BRANDS</a>
        <a className='navbar-item' href="#">INFLUENCERS</a>
        <a className='navbar-item' href="#">PRICING</a>
        <a className='navbar-item' href="#">BLOGS</a>
        <a className='navbar-item' href="#">CONTACT</a>
      </div>
    </div>

  )
}

function Header() {
  return (
    <div className="header">
      <div className='header-content'>
        <h1>Discover. Connect. Collaborte.</h1>
        <h3>An ecosystem for Social media influencers and Brands.</h3>
        <div className='header-buttons'>
          <button className='header-button'>I'm an Influencer</button>
          <button className='header-button'>I'm a brand</button>
        </div>
      </div>
      <div className='header-content'>
        <img src="https://www.freeskout.com/img/top-influencer-profiles/top-3.png" alt="phone" />
      </div>
      <section>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
      </section>
    </div>
  )
}


function AboutUs() {
  return (
    <div className="about">
      <div className="about-detail">
        <div className="person-image">
          <img src="https://www.freeskout.com/img/landing%20images/AboutUslanding.png" alt="person" />
        </div>
        <div className="aboutUs">
          <h3 className="aboutUs-title">About us</h3>
          <h1 className="aboutUs-h1">
            Freekout is the new spot for connecting with Indisn Influencers
          </h1>
          <p> We simplify influencer marketing by getting brands and influencers together on  the same platform</p>
          <div className="icon">
            <p><span className="chevron"><ChevronRightIcon /></span> Real-Time Notifiction</p>
            <p><span className="chevron"><ChevronRightIcon /></span> All controls on your fingertips.</p>
            <p><span className="chevron"><ChevronRightIcon /></span> Highly customised filters.</p>
          </div>
        </div >
        <div className="about-list">
          <div className="about-reach">
            <p className="reach"> 150k</p>
            <p className="reach-content">collaboration</p>
          </div>
          <div className="about-reach">
            <p className="reach"> 50k</p>
            <p className="reach-content">Influencers</p>
          </div>
          <div className="about-reach">
            <p className="reach"> 180Cr</p>
            <p className="reach-content">Reach</p>
          </div>
        </div>
      </div >
      <div className="about-bottom">
        <div className="about-bottom-container">
          <p className="about-bottom-title">Why Freeksout?</p>
          <p className="about-bottom-content">
            Freeksout is  free mobile application that allows brands and influencers/
            bloggers to connect with no middleman involved. Brands can discover
            Indian influencers/bloggers on all social media platforms(
            instgram, YouTube, Zomato and more) hassle-free.
          </p>
        </div>
        <div className="about-bottom-container">
          <p className="about-bottom-title">How does Freeksout work?</p>
          <p className="about-bottom-content">
            Register your brand, set your requirements - budget, social media
            platform, type of influencer. Our algorithm will match you with a list
            of top bloggers/influencers in India suitable for your campaign.
            Connect to the one thaat suits your braand and starat chatting.
            All this "Free of Cost".
          </p>
        </div>
        <div className="about-bottom-container">
          <p className="about-bottom-title">For Brands</p>
          <p className="about-bottom-content">
            No need for agencies. At Freeksout you can easily chat and
            collaborate with the influencer of your choice based on your
            requirements. Get access to their realtime market insights.
          </p>
        </div>
        <div className="about-bottom-container">
          <p className="about-bottom-title">Ror Influencers</p>
          <p className="about-bottom-content">
            A one-stop influencer marketing platform in India that lets
            brands known about your engagement and influence on social media.
            Cut the middlemen, chat and negotiate with the brands directly.
          </p>
        </div>
      </div>
    </div >
  )
}

function Influencer() {
  return (
    <div className="influencer-container">
      <div className="influencer-content">
        <div className="influencer-image-container">
          <img className="influencer-image" src="https://www.freeskout.com/img/landing%20images/whyInfMarketing.png" alt="person" />
        </div>
        <div className="influencer-details">
          <p className="influencer-details-title">Why Influencer Marketing?</p>
          <h2>Influencer marketing for maximum impact!!</h2>
          <p>Amplify your brand the right way with infuencers in India.
            Determining and targeting the right audience is an essential part of every
            marketing strategy. Neverthless, it is often a challenging process and
            requires a through understanding of your potential consumers. Influencer
            marketing companies enable you to surpass this step with the help of hard-
            working influencers. You just need to make sure that the influencer is related to your
            niche and that their public personal matches your brand's image.
          </p>
        </div>
      </div>
      <div className="brand">
        <p className="brand-count"><span>500+</span> brands onborded</p>
        <BrandFirstCont />
        <BrandSecondCont />
        <BrandThirdCont />

      </div>
    </div>
  )
}

function BrandFirstCont() {
  const brandFirst = [
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/1.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/2.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/3.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/4.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/5.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/6.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/7.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/8.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/9.png"
    },

    {
      "img": "https://www.freeskout.com/img/brandgridlogos/Fabindia_logo.svg.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/11.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/12.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/13.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/14.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/15.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/16.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/17.png"
    },

    {
      "img": "https://www.freeskout.com/img/brandgridlogos/18.png"
    },

    {
      "img": "https://www.freeskout.com/img/brandgridlogos/19.png"
    },

    {
      "img": "https://www.freeskout.com/img/brandgridlogos/20.png"
    },

    {
      "img": "https://www.freeskout.com/img/brandgridlogos/21.png"
    },
    {
      "img": "https://www.freeskout.com/img/brandgridlogos/84.png"
    },

    {
      "img": "https://www.freeskout.com/img/brandgridlogos/Logo2022_3959x.webp"
    }]

  return (
    <div className="slideshow">
      <div className="brand-container">
        {brandFirst.map((brand, index) => <BrandFirst brand={brand} key={index} />)}
      </div>
    </div>
  )
}

function BrandFirst({ brand }) {
  return (
    <div className='brands'>
      <img className="animated-image " src={brand.img} />
    </div>
  )
}
function BrandSecondCont() {
  const brandFirst = [{
    "img": "https://www.freeskout.com/img/brandgridlogos/42.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/40.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/41.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/43.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/36.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/44.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/45.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/46.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/47.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/48.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/49.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/50.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/51.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/39.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/37.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/38.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/32.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/33.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/34.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/35.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/28.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/29.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/30.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/31.png"
  }]

  return (
    <div className="slideshow">
      <div className="brand-second-container">
        {brandFirst.map((brand, index) => <BrandSecond brand={brand} key={index} />)}
      </div>
    </div>
  )
}

function BrandSecond({ brand }) {
  return (
    <div className='brands'>
      <img className="animated-image " src={brand.img} />
    </div>
  )
}
function BrandThirdCont() {
  const brandFirst = [{
    "img": "https://www.freeskout.com/img/brandgridlogos/56.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/57.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/58.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/59.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/60.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/61.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/62.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/63.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/64.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/65.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/66.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/67.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/68.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/69.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/70.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/71.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/72.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/73.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/74.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/75.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/76.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/77.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/78.png"
  },
  {
    "img": "https://www.freeskout.com/img/brandgridlogos/79.png"
  }]

  return (
    <div className="slideshow">
      <div className="brand-container">
        {brandFirst.map((brand, index) => <BrandThird brand={brand} key={index} />)}
      </div>
    </div>
  )
}

function BrandThird({ brand }) {
  return (
    <div className='brands'>
      <img className="animated-image " src={brand.img} />
    </div>
  )
}


function Blog() {
  return (
    <div className="blog">
      <div className="blog-container">
        <p className="our-blog">Our Blogs</p>
        <h2 className="read-all">Read all about it!</h2>
        <p className="blog-ptag">Want to learn more about influencer marketing industry?</p>
        <button className="blog-btn">See all!</button>
      </div>

      <Book />


    </div>
  )
}


function Book() {
  const blog = [
    {
      "img": "https://www.freeskout.com/img/marketing-trends-that-will-rule-the-market-in-2020.jpg",
      "title": "Marketing Trends tht will rule the market in 2020",
      "profile": "https://www.freeskout.com/img/avatars/influencer-male-avatar.png",
      "userName": "Shubham upadhyay",
      "date": "12 Feb"
    },
    {
      "img": "https://www.freeskout.com/img/Blog_Images/how-to-leverage-youtube-short-videos-for-influencer-marketing/how-to-leverage-youtube-short-videos-for-influencer-marketing2.jpg",
      "title": "How to leverage youtube shorts video for influencer marketing",
      "profile": "https://www.freeskout.com/img/avatars/influencer-male-avatar.png",
      "userName": "Shubham upadhyay",
      "date": "14 Jan"
    },
    {
      "img": "https://www.freeskout.com/img/Blog_Images/brandedContent/brandedContent.jpg",
      "title": "Branded content and Influencer",
      "profile": "https://www.freeskout.com/img/avatars/influencer-female-avatar.png",
      "userName": "Kopal Bajpai",
      "date": "18 May"
    },
    {
      "img": "https://www.freeskout.com/img/a-brief-guide-to-influencer-marketing.jpg",
      "title": "A Brief Guide to Influencer Marketing",
      "profile": "https://www.freeskout.com/img/avatars/influencer-male-avatar.png",
      "userName": "Akash Gupta",
      "date": "2 Feb"
    },
    {
      "img": "https://www.freeskout.com/img/Blog_Images/5-reasons-to-consider-influencer-marketing-for-your-Ecommerce/5_reasons_to_consider_Influencer-marketing_for_your_Ecommerce.jpg",
      "title": "5 Reasons to consider Influencer Marketing For Your Ecommerce",
      "profile": "https://www.freeskout.com/img/avatars/influencer-male-avatar.png",
      "userName": "Shubham upadhyay",
      "date": "14 Jun"
    },
    {
      "img": "https://www.freeskout.com/img/Blog_Images/latest-instgram-features-&-post/Latest-features-&-updates-on-instagram1.jpg",
      "title": "New & Latest Updates on Instagram",
      "profile": "https://www.freeskout.com/img/avatars/influencer-female-avatar.png",
      "userName": "Kopal Bajpai",
      "date": "13 Jun"
    }
  ];

  return (
    <div className="bookflex">
      <BookScroll blog={blog} scrollDuration={5000} />
    </div>
  );
};
function BookScroll({ blog, scrollDuration }) {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Increment the book index to scroll to the next book
      setCurrentBookIndex((prevIndex) =>
        prevIndex === blog.length - 2 ? 0 : prevIndex + 1
      );
    }, scrollDuration);

    return () => clearTimeout(timeout);
  }, [currentBookIndex, blog.length, scrollDuration]);

  return (
    <div className="book-scroll">
      <div
        className="book-container"
        style={{
          transform: `translateX(-${currentBookIndex * 100}%)`,
          transitionDuration: `${scrollDuration}ms`,
        }}
      >
        {blog.map((blog, index) => (
          <div className="blog-card">
            <img className="blog-image" src={blog.img} />
            <div className="blog-display">
              <div className="blog-green">
                <p >Free Scout</p>
              </div>
              <div className="title-wrapper">
                <p className="blog-title">{blog.title}</p>
              </div>
              <div className="blog-profile">
                <img className="blog-profile-img" src={blog.profile} />
                <div className="blog-profile-details">
                  <p className="user-name">{blog.userName}</p>
                  <p className="date">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


function Connect() {
  return (
    <div className="green-nav">
      <p>Get connect with us on Social media</p>
      <div className="bottom-icon">
        <IconButton aria-label="delete" fontSize="large" color="inherit">
          <YouTubeIcon />
        </IconButton>
        <IconButton aria-label="delete" color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="delete" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="delete" color="inherit">
          <InstagramIcon />
        </IconButton>
      </div>
    </div>
  )
}

function BottomNav() {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav-container">
        <div className="free-scout">
          <h2 className="free-scout-title">free scout</h2>
          <p className="free-scout-content">Discover Brands and influencers that match your personality.
            Connect & chat with them seemlessly. Collaborate & make magic
            happens! Freeksout helps you do all of this for Free!
          </p>
        </div>
        <div className="free-scout">
          <p className="who-we" >Who we are !</p>
          <p className="free-scout-content">Influencers</p>
          <p className="free-scout-content">Brands</p>
        </div>
        <div className="free-scout">
          <p className="who-we" >Contact</p>
          <div className=" icon-gap">
            <p className="free-scout-content"><span><EmailIcon /></span>support@freeksout.com</p>
            <p className="free-scout-content"><span><PhoneIcon /></span>1800339600</p>
            <p className="free-scout-content"><span><LocationOnIcon /></span>J-208, Basement,Rajouri Garden, New Delhi - 110027</p>

          </div>
        </div>
      </div>
      <div>
        <div className="copyrights">
          <p className="text-dark"><span><CopyrightIcon /></span>2023 | <span className="text-green"> freeksout</span></p>
          <p>Privacy Policy | Shipping Policy | Cancellation Policy | Terms & Conditions | How to use</p>
        </div>

      </div>
    </div>
  )
}