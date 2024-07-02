import React from "react";
import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.jpg"
import blog3 from "../assets/blog3.jpg"
import NavBar from "./TestNav";
import MyFooter from "./MyFooter";

const Blog = () => {
    const blogs =[
        {id: 1, title: "ENHANCING SECURITY AND PERFORMANCE THROUGH CI/CD AND CLOUDFRONT", image:blog1},
        {id: 2, title: "CLOUD SECURITY OPERATIONS ON AWS SHARING SESSION", image:blog2},
        {id: 3, title: "ENHANCING SECURITY AND PERFORMANCE THROUGH CI/CD AND CLOUDFRONTHOW CORPORATE", image:blog3},

    ];
    return(
        <div className="md-px-14 px-20 py-16 max-w-screen-2xl mx-auto" id="blog">
            {/* <div className="mb-16">
                <NavBar/>
            </div> */}
            <div className="text-center md:w-1/2 mx-auto">
            <h2 className='text-4xl text-neturalDGrey font-semibold mb-4 cursor-pointer hover:text-bluehover'><a href="https://nex4.blog/">ブロック</a></h2>
            <p className="text-sm text-neturalGrey mb-8 md:w-3/4 mx-auto"></p>
            </div>
            {/*all blogs */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
                {
                    blogs.map(blog => <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer hover:text-bluehover">
                        <img src={blog.image} alt="" className="hover:scale-95 transition-all duration-300"/>
                        <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                            <h3 className="mb-3 text-neturalGrey font-semibold hover:text-bluehover">{blog.title}</h3>
                            <div className="flex items-center justify-center gap-8">
                                <button href="https://nex4.blog/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
                                    もっと見る{" "}
                                    <svg
                                        xmlns ="http://www.google.com/2000/svg"
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 11"
                                        fill= "none"
                                        className="inline-block ml-2"
                                    >
                                        <path

                                        />
                                    </svg>
                                </button>

                            </div>

                        </div>

                    </div>)
                }
            </div>
            {/* <div>
                <MyFooter/>
            </div> */}
        </div>
    );
};

export default Blog;