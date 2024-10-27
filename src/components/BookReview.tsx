import React from "react";

const BookReview = ({ frontMatter }) => {
  const { title, authors, publishDate, publisher, coverImage, link, worthReading } = frontMatter;

  const authorArray = Array.isArray(authors ?? []) ? authors : [authors];
  const authorStr = authorArray.length > 1 ? "Authors" : "Author";
  
  return (
    <div className="book-metadata">
      {coverImage && <img src={coverImage} alt={`${title} book cover`} className="book-cover" />}
      <table className="book-info">
        {authorArray.length > 0 &&  <p><strong>{authorStr}:</strong> {authors.join(", ")}</p>}
        {publishDate && <p><strong>Published:</strong> {publishDate}</p>}
        {link && <p><strong>Link:</strong> <a href={link}>{(new URL(link)).hostname.replace("www.", "")}</a> </p>}
        {worthReading && <p><strong>Worth Reading:</strong> {worthReading}</p>}
      </table>
    </div>
  )
};

export default BookReview;
