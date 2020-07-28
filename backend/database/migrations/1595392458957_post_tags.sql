CREATE TABLE IF NOT EXISTS {}.post_tags (
  post_id INT(12) NOT NULL,
  tag_id INT(12) NOT NULL,
  
  
  UNIQUE KEY(post_id, tag_id),

  CONSTRAINT fk_ptpost FOREIGN KEY(post_id)
    REFERENCES posts(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

  CONSTRAINT fk_pttag FOREIGN KEY(tag_id)
    REFERENCES tags(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);