import React from "react";

const Blog = () => {
    const blogs =[
        {id: 1, title: "ENHANCING SECURITY AND PERFORMANCE THROUGH CI/CD AND CLOUDFRONT", image:"/src/assets/blog1.jpg"},
        {id: 2, title: "CLOUD SECURITY OPERATIONS ON AWS SHARING SESSION", image:"/src/assets/blog2.jpg"},
        {id: 3, title: "ENHANCING SECURITY AND PERFORMANCE THROUGH CI/CD AND CLOUDFRONTHOW CORPORATE", image:"/src/assets/blog3.jpg"},

    ];
    return(
        <div className="px-10 lg:px-14 max-w-screen-2xl mx-auto my-12" id="blog">
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
                                <a href="https://nex4.blog/" className="font-bold text-neturalGrey hover:text-bluehover">
                                    Read More{" "}
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
                                </a>

                            </div>

                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;