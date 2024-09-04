import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    fetch('/data/publicaciones.json')
      .then(response => response.json())
      .then(posts => {
        const post = posts.find(post => post.slug === slug);
        if (post) {
          fetch(`/data/contenido.json`)
            .then(response => response.json())
            .then(contents => {
              const content = contents.find(content => content.id === post.id);
              if (content) {
                setPostContent(content.content);
              }
            });
        }
      });
  }, [slug]);

  return (
    <div className="blog-post">
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
    </div>
  );
};

export default BlogPost;
