--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: exppost; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exppost (
    id integer NOT NULL,
    title character varying NOT NULL,
    caption text NOT NULL
);


ALTER TABLE public.exppost OWNER TO postgres;

--
-- Name: exppost_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.exppost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exppost_id_seq OWNER TO postgres;

--
-- Name: exppost_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exppost_id_seq OWNED BY public.exppost.id;


--
-- Name: menu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE IF NOT EXISTS public.exppost (
    id SERIAL PRIMARY KEY NOT null,
    title VARCHAR(256) NOT NULL,
    caption TEXT NOT NULL

);

CREATE TABLE IF NOT EXISTS public.menu(
    id SERIAL PRIMARY KEY NOT null,
    menuname VARCHAR(256) NOT NULL,
    menuurl varchar NOT NULL
);

ALTER TABLE public.menu OWNER TO postgres;

--
-- Name: menu_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menu_id_seq OWNER TO postgres;

--
-- Name: menu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menu_id_seq OWNED BY public.menu.id;


--
-- Name: exppost id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exppost ALTER COLUMN id SET DEFAULT nextval('public.exppost_id_seq'::regclass);


--
-- Name: menu id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu ALTER COLUMN id SET DEFAULT nextval('public.menu_id_seq'::regclass);


--
-- Data for Name: exppost; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exppost (id, title, caption) FROM stdin;
167	اکسپرس	این مبحث درباره ی اکسپرس میباشد
168	آموزش مسایل  برنامه نویسی	آموزش مباحث برنامه نویسی 
169	گروه کاردان سیستم	با سلام به شما من خوشحالم که با گروه کاردان سیستم مشغول  به همکاری شده ام
\.


--
-- Data for Name: menu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu (id, menuname, menuurl) FROM stdin;
3	صفحه اصلی	/
4	بلاگ	/blog
5	داشبورد	/admin
\.


--
-- Name: exppost_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exppost_id_seq', 185, true);


--
-- Name: menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menu_id_seq', 5, true);


--
-- Name: exppost exppost_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exppost
    ADD CONSTRAINT exppost_pkey PRIMARY KEY (id);


--
-- Name: menu menu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

