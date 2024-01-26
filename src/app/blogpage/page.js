// pages/blog.js
"use client"
import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import Navbar from '../components/navbar/navbar';
import FOOTER from '../components/bloxfooter/bloxfooter';
import Image from 'next/image';
import './globals.css';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: '60668njlknik',
      accessToken: 'x2XImbRKWAxmoNKjd4bjHoGkrfSKv6lRkqVuaFasiuE',
    });

    const fetchPosts = async () => {
      try {
        const entries = await client.getEntries({ content_type: 'gameBlogs' });
        setPosts(entries.items);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);
console.log(posts)
  return (
    <div>
      <Navbar />
      <section className='mainbody'>
        <h1>Our Blog</h1>
        <p>Read the recent blog posts about BloxBunny</p>
      </section>

      <section className='blogs'>
        <div className='blogs-grid'>
          {posts.map((post) => (
            <div className='blogscol' key={post.sys.id}>
              <Image src={`https:${post.fields.thumbnail.fields.file.url}`} alt={post.fields.title} width={348} height={300} />
              <h1>{post.fields.title}</h1>
              <h3>by <span>{post.fields.subtitle}</span></h3>
              <p>{post.fields.description}</p>
              <div className='designbutton'>
                <button>Read More &gt;</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <FOOTER />
      </section>
    </div>
  );
}
