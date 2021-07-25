CREATE TABLE IF NOT EXISTS public.exppost (
    id SERIAL PRIMARY KEY NOT null,
    title VARCHAR(256) NOT NULL ,
    caption TEXT  NOT NULL  
    
    );

    CREATE TABLE IF NOT EXISTS public.menu (
    id SERIAL PRIMARY KEY NOT null,
    menuname VARCHAR(256) NOT NULL ,
    menuurl varchar  NOT NULL  
    
    );
