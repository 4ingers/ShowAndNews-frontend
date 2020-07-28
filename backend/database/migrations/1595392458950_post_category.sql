CREATE TABLE IF NOT EXISTS {}.post_category (
  post_id INT(12) NOT NULL,
  category_id INT(12) NOT NULL,
  
  
  UNIQUE KEY(post_id),

  CONSTRAINT fk_pcpost FOREIGN KEY(post_id)
    REFERENCES posts(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

  CONSTRAINT fk_pccategory FOREIGN KEY(category_id)
    REFERENCES categories(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);