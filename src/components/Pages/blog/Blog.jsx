import React from 'react'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import './style.scss'
import ShareIcon from '@material-ui/icons/Share';
import Parallax from '../../common/parallax/Parallax'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import { blog1, blog2, blog3 } from '../../common/icon/index'

function Blog() {
    
    return (
        <div className='blog__page'>
            <Header />
            <div className="blog__page-wrapper">
                <div className="blog-banner">
                    <h2>BLOG MASONRY</h2>
                    <p>What we belive.The truth about clean beauty.</p>
                </div>
                <div className="blog-content">
                    <div className="blog-content-wrapper">
                        <div className="content-wrapper-left">
                            <div className="title-blog">
                                <span className="tag">BEAUTY TIPS</span>
                                <h2 className="title">Spend vs. Save — Where to Invest In Your Skincare</h2>
                                <p className="blog-text">Autem dicant cum ex, ei vis nibh solum simul, veritus fierent fastidii quo ea. Cu solum scripta pro. Qui in clita everti propriae, vidit voluptaria cum ne, at nec sint movet delectus. Sit mazim dicant cum ex, ei vis nibh solum simul, veritus fierent fastidii quo ea. Cu solum scripta pro. Qui in clita everti propriae, vidit voluptaria cum ne, at nec sint movet delectusdicant cum ex, ei vis nibh solum simul, veritus fierent fastidii quo ea. Cu solum scripta pro.</p>
                            </div>
                            <div className="share-blog">
                                <div className="share-left">
                                    <span className='by-share'>BY <strong>CRISTINA JOE</strong></span>
                                    <p className='day-public'>Published on March 8,2021</p>
                                </div>
                                <div className="share-right">SHARE <ShareIcon /> </div>
                            </div>
                            <div className="new-blog">
                                <div className="new-img">
                                    <img src={blog1} alt="blog" />
                                </div>
                                <div className="new-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Sagittis eu volutpat odio facilisis mauris sit amet massa. Feugiat nisl pretium fusce id. Laoreet non curabitur gravida arcu ac. Eget egestas purus viverra accumsan in. Eget mauris pharetra et ultrices neque. Quam elementum pulvinar etiam non. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Eget nulla facilisi etiam dignissim diam. Porttitor rhoncus dolor purus non enim praesent elementum. Erat pellentesque adipiscing commodo elit at imperdiet dui. Dictumst quisque sagittis purus sit amet volutpat consequat. Fusce ut placerat orci nulla pellentesque dignissim enim. Eget mi proin sed libero enim. Ullamcorper eget nulla facilisi etiam. Commodo viverra maecenas accumsan lacus vel.
                                </div>
                                <div className="new-active-text">
                                    Et qui falli latine consequuntur. In appellantur concludaturque pro. Commune scriptorem ad pri, ut euripidis posidonium has. Eum ei verear dolorum. Duo quas viris delenit cu, dolores inciderint scribentur mel in. Option elaboraret et mea, sea eligendi insolens scripserit etsei
                                </div>
                                <div className="new-text">
                                    Augue mauris augue neque gravida in fermentum et sollicitudin. In fermentum posuere urna nec tincidunt praesent. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Lacinia quis vel eros donec ac odio tempor orci. Justo laoreet sit amet cursus sit amet. Condimentum lacinia quis vel eros donec ac. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Vel quam elementum pulvinar etiam. Lectus quam id leo in. A pellentesque sit amet porttitor eget dolor.
                                </div>
                                <div className="two-items">
                                    <div className="top-item">
                                        <img src={blog2} alt="blog" />
                                        <img src={blog3} alt="blog" />
                                    </div>
                                    <div className="bot-item">
                                        <p className='new-text'>Id ornare arcu odio ut sem nulla. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Nisl vel pretium lectus quam id leo in. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ultrices eros in cursus turpis massa tincidunt dui ut. Ornare aenean euismod elementum nisi. Tortor aliquam nulla facilisi cras. Dolor morbi non arcu risus. Imperdiet dui accumsan sit amet nulla</p>

                                    </div>

                                </div>
                                <div className="blog-comments">
                                    <div className="share-comment">
                                        <div className="share-right">SHARE <ShareIcon /> </div></div>
                                    <div className="button-blog">
                                        <p className='pre'>PREV POST</p>
                                        <p className='next'>NEXT POST</p>
                                    </div>
                                    <div className="comment-avatar">
                                        <img className='img-user' src="https://i.pinimg.com/564x/bc/6d/af/bc6dafe79ae9d039db8e96536337355f.jpg" alt="autho" />
                                        <div className="info-comment">
                                            <h6 className='name-user'>Cristina Joe</h6>
                                            <span className='tag-user'>BEAUTY ADVISOR</span>
                                            <p className='text-user'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div className="related-post">
                                        <div className="wrapper-post-blog">

                                            <div id="post">
                                                <img src="http://ofeianht.jwsuperthemes.com/wp-content/uploads/2021/03/5-trip-beautiful-270x370.jpg" alt="post-img" className="img-post" />
                                                <div id="content-post">
                                                    <span>BEAUTY TIPS</span>
                                                    <p>The Biggest  When Starting My Beauty Brand</p>
                                                </div>
                                            </div>
                                            <div id="post">
                                                <img src="http://ofeianht.jwsuperthemes.com/wp-content/uploads/2020/10/element5-digital-ooPx1bxmTc4-unsplash-1-270x370.jpg" alt="post-img" className="img-post" />
                                                <div id="content-post">
                                                    <span>BEAUTY TIPS</span>
                                                    <p>Beauty Secrets From Professional Makeup Artists</p>
                                                </div>
                                            </div>
                                            <div id="post">
                                                <img src="http://ofeianht.jwsuperthemes.com/wp-content/uploads/2020/09/pexels-karolina-grabowska-4889547-270x370.jpg" alt="img-post" className="img-post" />
                                                <div id="content-post">
                                                    <span>BEAUTY TIPS</span>
                                                    <p> Essentials Everyone Should Have in Their Collection</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="post-comment">
                                        <p className="post-title">Post A Comment</p>
                                        <span className='post-text'>Your email address will not be published. Required fields are marked *</span>
                                        <div className="input-comment">
                                            <div className="input-comment-wrapper">
                                                <textarea>Write your comment...</textarea>
                                                <div className="chilrend-input">
                                                    <input type="text" placeholder='Name *' />
                                                    <input type="text" placeholder='Email *' />
                                                    <input type="text" placeholder='website *' />
                                                </div>
                                                <div className="submit-post">
                                                    <p><input type="checkbox" />Save my name, email, and website in this browser for the next time I comment.</p>
                                                </div>
                                            </div>
                                            <button className='post-cmt'>Post Comment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-wrapper-sidebar">
                            <div className="blog-search">
                                <h3>About author</h3>
                            </div>
                            <div className="blog-author">
                                <img className='avatar-sibar' src="https://i.pinimg.com/564x/49/3b/c1/493bc146cd3303e2f26c8070a9609805.jpg" alt="author" />
                                <h6>Haze Jisa</h6>
                                <p>Meh synth Schlitz, tempor  single-origin next level.</p>
                            </div>
                            <div className="list-social-icon">
                                <ul>
                                    <li><FacebookIcon /><span>Facebook</span></li>
                                    <li><TwitterIcon /><span>Twitter</span></li>
                                    <li><LinkedInIcon /><span>LinkedIn</span></li>
                                    <li><TelegramIcon /><span>Telegram</span></li>
                                </ul>
                            </div>
                            <div className="poppular-blog">
                                <div className="img-p-b">
                                    <img src="https://i.pinimg.com/564x/f4/e9/23/f4e923ef08d14ba259b3379b7338a6bd.jpg" alt="imgblog" />
                                    <span>The Most Popular <br /> <strong>SKINCARE BLOG</strong></span>
                                </div>
                                <div className="br-wr"></div>
                            </div>
                            <div className="blog-search" id='recent-post'>
                                <h3>Recent Posts</h3>
                            </div>
                            <div className="list-post-recent">
                                <ul>
                                    <li>
                                        <div className="list-left">
                                            <h6>People Began To Come Out Of The Glass Doors</h6>
                                            <span>FEBRUARY 25, 2021</span>
                                        </div>
                                        <div className="list-right">
                                            <img src='https://i.pinimg.com/564x/4d/0b/07/4d0b07ae9c996d6b0e62c6c501a4d3e9.jpg' alt="post" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-left">
                                            <h6>Secrets To Becoming A Professional Blogger</h6>
                                            <span>August 14, 2021</span>
                                        </div>
                                        <div className="list-right">
                                            <img src='https://i.pinimg.com/564x/78/39/83/7839830e87537e1910635c90a69473d0.jpg' alt="post" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-left">
                                            <h6>Negative Thoughts Can Be Your Worst Enemy</h6>
                                            <span>April 9, 2021</span>
                                        </div>
                                        <div className="list-right">
                                            <img src='https://packageinspiration.com/wp-content/uploads/2016/10/Azure-Tonic-Water3.jpg' alt="post" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-search" id='recent-post'>
                                <h3>Tag Cloud</h3>
                            </div>
                            <div className="tags-gr">
                                <label>Beauty</label>
                                <label>Cosmetic</label>
                            </div>
                            <div className="lg-blog">
                                <img src="http://ofeianht.jwsuperthemes.com/wp-content/uploads/2020/08/banner-blog.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Parallax />
            <Footer />
        </div>
    )
}

export default Blog
