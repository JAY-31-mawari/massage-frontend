import React from 'react'
import { Link, useParams } from 'react-router-dom'


import blog1 from '../../assets/img/p-1.jpg'
import user from '../../assets/img/user-1.jpg'
import user2 from '../../assets/img/user-2.jpg'
import user3 from '../../assets/img/user-3.jpg'
import user4 from '../../assets/img/user-4.jpg'

import Navbar from '../../components/navbar/navbar'
import BlogSidebar from '../../components/blog-sidebar'
import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'

import { blogData } from '../../data/data'

export default function BlogDetail() {
    let params = useParams()
    let id:any = params.id
     
    let data = blogData.find((item:any)=> item.id === parseInt(id))

  return (
    <div className='blog-page'>
        <Navbar transparent={false}/>   

        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title">Blog Detail</h2>
                        <span className="ipn-subtitle">See Our Latest Articles & News</span>
                    </div>
                </div>
            </div>
        </div>

        <section className="gray-simple">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="blog-details single-post-item format-standard">
                            <div className="post-details">
                                <div className="post-featured-img">
                                    <img className="img-fluid" src={data?.image ? data?.image : blog1} alt=""/>
                                </div>
                                <div className="post-top-meta">
                                    <ul className="meta-comment-tag">
                                        <li><Link to="#"><span className="icons"><i className="ti-user"></i></span>by Rosalina Doe</Link></li>
                                        <li><Link to="#"><span className="icons"><i className="ti-comment-alt"></i></span>45 Comments</Link></li>
                                    </ul>
                                </div>
                                <h2 className="post-title">{data?.title ? data?.title : 'Lorem ipsum dolor sit amet, cons pisicing elit, sed do.'}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. <br/><br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                <blockquote>
                                    <span className="icon"><i className="fas fa-quote-left"></i></span>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo onsequat.</p>
                                    <h5 className="name">- Rosalina Pong</h5>
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                <div className="post-bottom-meta">
                                    <div className="post-tags">
                                        <h4 className="pbm-title">Related Tags</h4>
                                        <ul className="list">
                                            <li><Link to="#">organic</Link></li>
                                            <li className='mx-2'><Link to="#">Foods</Link></li>
                                            <li><Link to="#">tasty</Link></li>
                                        </ul>
                                    </div>
                                    <div className="post-share">
                                        <h4 className="pbm-title">Social Share</h4>
                                        <ul className="list mt-3">
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-vk"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-tumblr"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-post-pagination">
                                    <div className="prev-post">
                                        <Link to="#">
                                            <div className="title-with-link">
                                                <span className="intro">Prev Post</span>
                                                <h3 className="title">Tips on Minimalist</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="post-pagination-center-grid">
                                        <Link to="#"><i className="ti-layout-grid3"></i></Link>
                                    </div>
                                    <div className="next-post">
                                        <Link to="#">
                                            <div className="title-with-link">
                                                <span className="intro">Next Post</span>
                                                <h3 className="title">Less Is More</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="blog-details single-post-item format-standard">
                            
                            <div className="posts-author">
                                <span className="img"><img className="img-fluid" src={user} alt=""/></span>
                                <h3 className="pa-name">Rosalina William</h3>
                                <ul className="social-links">
                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-behance"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                                <p className="pa-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                            </div>
                        </div>
                        
                        <div className="blog-details single-post-item format-standard">
                            <div className="comment-area">
                                <div className="all-comments">
                                    <h3 className="comments-title">05 Comments</h3>
                                    <div className="comment-list">
                                        <ul>
                                            <li className="single-comment">
                                                <article>
                                                    <div className="comment-author">
                                                        <img src={user} alt=""/>
                                                    </div>
                                                    <div className="comment-details">
                                                        <div className="comment-meta">
                                                            <div className="comment-left-meta">
                                                                <h4 className="author-name">Rosalina Kelian <span className="selected"><i className="fas fa-bookmark"></i></span></h4>
                                                                <div className="comment-date">13th March 2025</div>
                                                            </div>
                                                            <div className="comment-reply">
                                                                <Link to="#" className="reply"><span className="icona"><i className="ti-back-left"></i></span> Reply</Link>
                                                            </div>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.perspiciatis unde omnis iste natus error.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                                <ul className="children">
                                                    <li className="single-comment">
                                                        <article>
                                                            <div className="comment-author">
                                                                <img src={user2} alt=""/>
                                                            </div>
                                                            <div className="comment-details">
                                                                <div className="comment-meta">
                                                                    <div className="comment-left-meta">
                                                                        <h4 className="author-name">Rosalina Kelian</h4>
                                                                        <div className="comment-date">5th May 2025</div>
                                                                    </div>
                                                                    <div className="comment-reply">
                                                                        <Link to="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-text">
                                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.perspiciatis unde omnis iste natus error.</p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <ul className="children">
                                                            <li className="single-comment">
                                                                <article>
                                                                    <div className="comment-author">
                                                                        <img src={user3} alt=""/>
                                                                    </div>
                                                                    <div className="comment-details">
                                                                        <div className="comment-meta">
                                                                            <div className="comment-left-meta">
                                                                                <h4 className="author-name">Rosalina Kelian</h4>
                                                                                <div className="comment-date">19th June 2025</div>
                                                                            </div>
                                                                            <div className="comment-reply">
                                                                                <Link to="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-text">
                                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.perspiciatis unde omnis iste natus error.</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="single-comment">
                                                <article>
                                                    <div className="comment-author">
                                                        <img src={user4} alt=""/>
                                                    </div>
                                                    <div className="comment-details">
                                                        <div className="comment-meta">
                                                            <div className="comment-left-meta">
                                                                <h4 className="author-name">Rosalina Kelian</h4>
                                                                <div className="comment-date">20th June 2025</div>
                                                            </div>
                                                            <div className="comment-reply">
                                                                <Link to="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
                                                            </div>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.perspiciatis unde omnis iste natus error.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="comment-box submit-form">
                                    <h3 className="reply-title">Post Comment</h3>
                                    <div className="comment-form">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your Email"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <textarea name="comment" className="form-control" cols={30} rows={6} placeholder="Type your comments...."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <Link to="#" className="btn btn-primary rounded full-width">Submit Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <BlogSidebar/>
                    </div>
                </div>
            </div>
        </section>
        <FooterTop bg="theme-bg"/>
        <Footer/>
    </div>
  )
}
