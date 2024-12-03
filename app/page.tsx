"use client";

import { useState } from "react";
import Image from "next/image";
import {
    BsFacebook,
    BsInstagram,
    BsSnapchat,
    BsPinterest,
    BsTwitter,
    BsLinkedin,
} from "react-icons/bs";
import SubscribeButton from "@/app/components/SubscribeButton";
import Post from "@/app/components/Post";
import Paragraph from "@/app/components/Paragraph";
import PopularPost from "@/app/components/PopularPost";
import BlackH2 from "@/app/components/BlackH2";
import WhiteContainer from "@/app/components/WhiteContainer";
import Tag from "@/app/components/Tag";
import SubscribeButtonRed from "@/app/components/SubscribeButtonRed";
import SubscriptionModal from "@/app/components/SubscriptionModal";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { useTopRefCtx } from "@/app/context/TopRefCtx";
import posts from "@/app/utils/mock/posts";
import popularPosts from "@/app/utils/mock/popularPosts";
import tags from "@/app/utils/mock/tags";
import { openSans } from "@/app/utils/font";
import jane from "@/public/modern-woman-short-hair.jpg";
import casualPortrait from "@/public/young-woman-casual-portrait.jpg";
import inspirations from "@/app/utils/mock/inspiration";

const Home = () => {
    const { topRef } = useTopRefCtx();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const openSubscriptionModal = () => {
        setModalIsOpen(true);
    };

    const closeSubscriptionModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div ref={topRef}></div>
            <Header />
            {/* max-w-[1536px]: tailwind css breakpoint for 2xl */}
            <main className="min-w-[320px] max-w-[1536px] mx-auto">
                <section className="flex flex-col gap-y-6 px-12 py-16 items-center bg-white">
                    <h1 className="uppercase font-semibold text-5xl">
                        Jane Bloglife
                    </h1>
                    <p>
                        Welcome to the blog of{" "}
                        <span className="bg-black p-1 text-white">
                            Jane&apos;s world
                        </span>
                    </p>
                </section>
                <section className="relative">
                    <Image
                        src={jane}
                        alt="Woman with short hair and a modern look, posing casually."
                        title="Modern Style with Jane"
                    />
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[20%] top-1/2 flex flex-col gap-y-4 md:left-[25%]">
                        <h2 className="text-white text-4xl">Jane&apos;s</h2>
                        <p className="hidden text-6xl font-bold text-white uppercase md:block">
                            Fashion blog
                        </p>
                        <SubscribeButton openModal={openSubscriptionModal}>
                            Subscribe
                        </SubscribeButton>
                    </div>
                </section>
                <div className="p-8 flex flex-col gap-8 lg:flex-row lg:justify-between">
                    <section className="flex flex-col gap-y-4 lg:w-[65%]">
                        {posts?.map(
                            ({
                                id,
                                postTitle,
                                description,
                                date,
                                img,
                                paragraphs,
                                replies,
                            }) => (
                                <Post
                                    key={id}
                                    postTitle={postTitle}
                                    description={description}
                                    date={date}
                                    img={img}
                                    paragraphs={paragraphs}
                                    replies={replies}
                                />
                            )
                        )}
                    </section>
                    <div className="flex flex-col gap-y-8 lg:w-[35%]">
                        <section>
                            <Image
                                src={casualPortrait}
                                alt="Portrait of a young woman smiling with loose hair and casual clothing."
                                title="Casual Portrait of a Young Woman"
                                className="w-full grayscale-[70%]"
                            />
                            <div className="bg-black text-white p-4 flex flex-col gap-y-4">
                                <h2 className="text-xl">My Name</h2>
                                <Paragraph>
                                    Just me, myself and I, exploring the
                                    universe of uknownment. I have a heart of
                                    love and a interest of lorem ipsum and
                                    mauris neque quam blog. I want to share my
                                    world with you.
                                </Paragraph>
                            </div>
                        </section>
                        <section>
                            <BlackH2>Popular Posts</BlackH2>
                            <ul
                                className={`${openSans.className} bg-white divide-y`}
                            >
                                {popularPosts?.map(
                                    ({
                                        id,
                                        popularPostTitle,
                                        description,
                                        img,
                                    }) => (
                                        <PopularPost
                                            key={id}
                                            popularPostTitle={popularPostTitle}
                                            description={description}
                                            img={img}
                                        />
                                    )
                                )}
                            </ul>
                        </section>
                        <section>
                            <BlackH2>Advertise</BlackH2>
                            <WhiteContainer>
                                <div
                                    className={`${openSans.className} bg-gray-200 h-[200px] grid place-items-center`}
                                >
                                    AD here
                                </div>
                            </WhiteContainer>
                        </section>
                        <section>
                            <BlackH2>Tags</BlackH2>
                            <WhiteContainer>
                                <div className="flex flex-wrap gap-x-2 gap-y-6">
                                    {tags?.map(({ id, title, isSelected }) => (
                                        <Tag key={id} isSelected={isSelected}>
                                            {title}
                                        </Tag>
                                    ))}
                                </div>
                            </WhiteContainer>
                        </section>
                        <section>
                            <BlackH2>Inspiration</BlackH2>
                            <WhiteContainer>
                                <div className="grid grid-cols-2 gap-4">
                                    {inspirations?.map(({ id, img }) => (
                                        <Image
                                            key={id}
                                            src={img.src}
                                            alt={img.alt}
                                            title={img.imgTitle}
                                        />
                                    ))}
                                </div>
                            </WhiteContainer>
                        </section>
                        <section>
                            <BlackH2>Follow Me</BlackH2>
                            <WhiteContainer>
                                <div className="flex gap-x-4">
                                    <BsFacebook className="text-2xl hover:text-gray-600 transition-colors duration-300" />
                                    <BsInstagram className="text-2xl hover:text-gray-600 transition-colors duration-300" />
                                    <BsSnapchat className="text-2xl hover:text-gray-600 transition-colors duration-300" />
                                    <BsPinterest className="text-2xl hover:text-gray-600 transition-colors duration-300" />
                                    <BsTwitter className="text-2xl hover:text-gray-600 transition-colors duration-300" />
                                    <BsLinkedin className="text-2xl hover:text-gray-600 transition-colors duration-300" />
                                </div>
                            </WhiteContainer>
                        </section>
                        <section>
                            <BlackH2>Subscribe</BlackH2>
                            <WhiteContainer>
                                <form
                                    className={`${openSans.className} flex flex-col gap-y-4`}
                                >
                                    <p>
                                        Enter your e-mail below and get notified
                                        on the latest blog posts.
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Enter e-mail"
                                        aria-label="Enter e-mail"
                                        required
                                        className="border p-2"
                                    />
                                    <SubscribeButtonRed>
                                        Subscribe
                                    </SubscribeButtonRed>
                                </form>
                            </WhiteContainer>
                        </section>
                    </div>
                </div>
                <SubscriptionModal
                    modalIsOpen={modalIsOpen}
                    closeSubscriptionModal={closeSubscriptionModal}
                />
            </main>
            <Footer />
        </>
    );
};

export default Home;
