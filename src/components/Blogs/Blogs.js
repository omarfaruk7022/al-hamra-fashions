import React from 'react';

const Blogs = () => {
    return (
        <div className="container">
            <div>
            <h2>Context API কাকে বলে ?</h2>
            <h6>Context API বলা হয় এমন global variable এর মত জিনিস  যার ডাটা গুলা কে অনেক যায়গায় পাস করা যায় ।সেটা হয় Props এর <br/> মাধ্যমে ।  এটি ব্যবহার করে Parent থেকে child কম্পনেন্টে ডাটা পাঠানো যায়। এটি রিয়েক্ট এর ১৬.৩ এর ভার্সন এ যুক্ত করা হয় ।</h6>
            </div>

            <div className="mt-5">
                <h2>Semantic tag কাকে বলে ?</h2>
                <h6>Semantic tag হলো কিছু HTML Tag যা মানুষ ও মেশিনের বুঝার জন্য সহজ ভাবে বর্ণনা করে । যেমন Haeder ,footer,article গুলা <br/> হলো সিমান্টিক ট্যাগ তারা তাদের ভিতরের জিনিস গুলার টাইপ ও তার আসল বিষয়বস্তু বর্ণনা করে। যাতে বুঝতে সহজ হয় ।</h6>
            </div>

            <div className="mt-5">
                <h2>Inline block এবং inline element এর মাঝে পার্থক্য কি ?</h2>
                <h6>ব্লক ইলিমেন্ট গুলা নতুন লাইন থেকে শুরু করে ,এবং ব্রাউসার সেটার জন্য নির্দিষ্ট কিছু মার্জিন পেডিং দিয়ে দেয় </h6>
                <h6>inline element গুলার জন্য নতুন লাইন লাগে না তা আগের লাইন থেকেই শুরু হয় ,আর এটা যতটুকু সম্ভব Width নিয়ে শুরু করে।</h6>
            </div>
        </div>
    );
};

export default Blogs;