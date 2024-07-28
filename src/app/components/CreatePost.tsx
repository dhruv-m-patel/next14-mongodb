'use client';

import { ChangeEvent, useCallback, useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleDescriptionChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }, []);

  const createPost = useCallback((e: SubmitEvent) => {
    const submitPost = async () => {
      try {
        await fetch("/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        });
      } finally {
        setShowLoading(false);
      }
    };
    setShowLoading(true);
    submitPost();
  }, [title, description]);

  return (
    // @ts-ignore
    <form onSubmit={createPost}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" required onChange={handleDescriptionChange} />
      </div>
      <button type="submit">{showLoading ? 'Creating post...' : 'Add New Post'}</button>
    </form>
  );
}
