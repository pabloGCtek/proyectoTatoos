--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-06-01 17:26:42

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

--
-- TOC entry 3359 (class 1262 OID 18273)
-- Name: Tattoos_db_proyecto; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "Tattoos_db_proyecto" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';


ALTER DATABASE "Tattoos_db_proyecto" OWNER TO postgres;

\connect "Tattoos_db_proyecto"

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

--
-- TOC entry 214 (class 1259 OID 18274)
-- Name: cont_id_artista; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cont_id_artista
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cont_id_artista OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 18275)
-- Name: artistas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.artistas (
    id_artista integer DEFAULT nextval('public.cont_id_artista'::regclass) NOT NULL,
    nombre character varying(20) NOT NULL,
    bio character varying(500) NOT NULL,
    imagen character varying(150) NOT NULL
);


ALTER TABLE public.artistas OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 18281)
-- Name: cont_id_cita; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cont_id_cita
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cont_id_cita OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 18282)
-- Name: citas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.citas (
    id_cita integer DEFAULT nextval('public.cont_id_cita'::regclass) NOT NULL,
    fecha date NOT NULL,
    turno integer NOT NULL,
    id_usuario integer NOT NULL,
    id_artista integer NOT NULL,
    id_tattoo integer NOT NULL
);


ALTER TABLE public.citas OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 18286)
-- Name: cont_id_tatoo; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cont_id_tatoo
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cont_id_tatoo OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 18287)
-- Name: cont_id_usuario; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cont_id_usuario
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cont_id_usuario OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 18288)
-- Name: tattoos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tattoos (
    id_tattoo integer DEFAULT nextval('public.cont_id_tatoo'::regclass) NOT NULL,
    nombre character varying(20) NOT NULL,
    descripcion character varying(150) NOT NULL,
    lugar character varying(20) NOT NULL,
    tamano character varying(20) NOT NULL,
    imagen text NOT NULL,
    tattoo_propio boolean NOT NULL,
    precio numeric(7,2) NOT NULL,
    id_artista integer NOT NULL
);


ALTER TABLE public.tattoos OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 18292)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id_usuario integer DEFAULT nextval('public.cont_id_usuario'::regclass) NOT NULL,
    nombre character varying(20) NOT NULL,
    email character varying(20) NOT NULL,
    contrasena character varying(20) NOT NULL,
    fecha_nacimiento date NOT NULL
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 3347 (class 0 OID 18275)
-- Dependencies: 215
-- Data for Name: artistas; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.artistas (id_artista, nombre, bio, imagen) VALUES (8, 'Ana', 'Ana es una talentosa tatuadora con una pasión por el arte corporal. Con más de 5 años de experiencia, ha dejado su huella en la industria con su estilo único y creativo. Sus diseños se caracterizan por su precisión y atención a los detalles, creando obras de arte personalizadas que reflejan la individualidad de sus clientes.', 'https://i.imgur.com/CEvCqcG.jpg');
INSERT INTO public.artistas (id_artista, nombre, bio, imagen) VALUES (6, 'Tony', 'Tony es un talentoso tatuador nacido en Alemania. Su pasión por el arte del tatuaje comenzó desde temprana edad, y ha dedicado su vida a perfeccionar su técnica y estilo. Con una amplia experiencia en diseños personalizados, Tony crea obras de arte únicas que reflejan la individualidad de cada cliente. A través de su trabajo, Tony busca no solo embellecer la piel de sus clientes, sino también dejar una marca duradera en sus vidas.', 'https://i.imgur.com/Yr0cMGQ.jpg');
INSERT INTO public.artistas (id_artista, nombre, bio, imagen) VALUES (7, 'Carmela', 'Carmela van der Meer es una tatuadora holandesa reconocida por su estilo distintivo, que combina líneas precisas y colores suaves. Destaca por su atención meticulosa a los detalles y su enfoque centrado en el cliente, creando tatuajes significativos y empoderadores. Su habilidad artística y compromiso con la satisfacción del cliente la han convertido en una destacada tatuadora en la escena del tatuaje holandés.', 'https://i.imgur.com/ECU5fpE.jpg');
INSERT INTO public.artistas (id_artista, nombre, bio, imagen) VALUES (5, 'José', 'Jose conocido como "Jose Ink", es un talentoso tatuador con un estilo distintivo que combina el realismo detallado y elementos surrealistas. Jose se destaca por su enfoque amable y profesional hacia sus clientes, dedicando tiempo a comprender sus historias y significados personales. Jose Ink continúa dejando su huella en la industria del tatuaje con su pasión, habilidad y compromiso con la excelencia.', 'https://i.imgur.com/AD3NFF8.jpg');


--
-- TOC entry 3349 (class 0 OID 18282)
-- Dependencies: 217
-- Data for Name: citas; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3352 (class 0 OID 18288)
-- Dependencies: 220
-- Data for Name: tattoos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (3, 'Flor trival', 'Una flor con un 3 muy bonito arriba y 3 puntos abajo', 'Antebrazo', 'Medio', 'https://i.imgur.com/WxYjs72.jpg', false, 100.49, 6);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (6, 'Pez', 'Es un pez', 'Omoplato', 'Medio', 'https://i.imgur.com/8j1g2BX.jpg', false, 240.30, 7);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (7, 'Familia', '2 Pajaros rodeando una cacho de tela con la palabra familia escrita', 'Antebrazo', 'Medio', 'https://i.imgur.com/RtmEqJe.jpg', false, 150.00, 5);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (9, 'Arlequin', 'Cara con partes pintadas como un payaso (llorad fans de silksong)', 'Antebrazo', 'Grande', 'https://i.imgur.com/nXnUmdS.jpg', false, 650.00, 7);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (5, 'Rostro del corazon', 'Es una cara con venas en la cabeza y flores. Esta llorando o algo así', 'Muslo', 'Grande', 'https://i.imgur.com/ZPE7hwn.jpg', true, 600.00, 6);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (10, 'Alone', 'Rostro con letras y detalles en la cara.', 'Brazo', 'Mediano', 'https://i.imgur.com/ntbqTg3.jpg', false, 250.00, 5);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (11, 'Gorila', 'Rostro del rey gorila enfadado', 'Pierna', 'Grande', 'https://i.imgur.com/Om292Cu.jpg', false, 600.50, 8);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (15, 'Florecer', 'Flores y manos dibujado con técnica de puntos, lineas finas y sombreado.', 'Brazo', 'Mediano', 'https://i.imgur.com/9T1EqNz.jpg', false, 345.44, 7);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (16, 'Gufi', 'Versión maligna de gufi', 'Pierna', 'Mediano', 'https://i.imgur.com/Ty8cN4E.jpg', false, 245.32, 8);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (17, 'Dragon', 'Dragon chino, animal mitológico.', 'Espalda', 'Grande', 'https://i.imgur.com/VIQaiTp.jpg', false, 789.30, 6);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (18, 'Flor', 'Con sombras y colores, una flor hermosa', 'Hombro', 'Mediano', 'https://i.imgur.com/DfUsz4H.jpg', false, 340.22, 8);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (19, 'Flor de loto', 'Lineas finas dibujan una delicada flor de loto', 'Pecho', 'Pequeño', 'https://i.imgur.com/a22MQ3Q.jpg', false, 150.22, 5);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (20, 'Flor de loto', 'Pequeño for de lotos en lineas', 'Rostro', 'Pequeño', 'https://i.imgur.com/c7Yl3rd.jpg', false, 100.20, 6);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (4, 'Trival Azteca', 'Es un tatuaje trival azteca sombreado.', 'Hombro', 'Grande', 'https://i.imgur.com/gCnxN8i.jpg', false, 550.00, 8);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (12, 'Gato', 'Felino con técnica de puntos y lineas finas', 'Brazo', 'Mediano', 'https://i.imgur.com/XmIXD96.jpg', false, 250.00, 5);
INSERT INTO public.tattoos (id_tattoo, nombre, descripcion, lugar, tamano, imagen, tattoo_propio, precio, id_artista) VALUES (8, 'León', 'Efectivamente es un León', 'Hombro', 'Grande', 'https://i.imgur.com/mGF9h7G.jpg', false, 570.00, 6);


--
-- TOC entry 3353 (class 0 OID 18292)
-- Dependencies: 221
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuarios (id_usuario, nombre, email, contrasena, fecha_nacimiento) VALUES (1, 'Juan', 'juan@gmail.com', '1234', '2022-03-12');
INSERT INTO public.usuarios (id_usuario, nombre, email, contrasena, fecha_nacimiento) VALUES (2, 'Pepe', 'pepe@gmail.com', '4321', '2000-11-20');
INSERT INTO public.usuarios (id_usuario, nombre, email, contrasena, fecha_nacimiento) VALUES (3, 'Laura', 'laura@gmail.com', '5678', '2000-11-20');
INSERT INTO public.usuarios (id_usuario, nombre, email, contrasena, fecha_nacimiento) VALUES (4, 'Prueba', 'prueba@gmail.com', '1234', '2001-01-18');
INSERT INTO public.usuarios (id_usuario, nombre, email, contrasena, fecha_nacimiento) VALUES (5, 'Antonio', 'antonio@gmail.com', '13568', '2022-03-12');


--
-- TOC entry 3360 (class 0 OID 0)
-- Dependencies: 214
-- Name: cont_id_artista; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cont_id_artista', 8, true);


--
-- TOC entry 3361 (class 0 OID 0)
-- Dependencies: 216
-- Name: cont_id_cita; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cont_id_cita', 1, false);


--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 218
-- Name: cont_id_tatoo; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cont_id_tatoo', 9, true);


--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 219
-- Name: cont_id_usuario; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cont_id_usuario', 5, true);


--
-- TOC entry 3193 (class 2606 OID 18297)
-- Name: artistas pk_id_artista; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artistas
    ADD CONSTRAINT pk_id_artista PRIMARY KEY (id_artista);


--
-- TOC entry 3195 (class 2606 OID 18299)
-- Name: citas pk_id_cita; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT pk_id_cita PRIMARY KEY (id_cita);


--
-- TOC entry 3197 (class 2606 OID 18301)
-- Name: tattoos pk_id_tattoo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tattoos
    ADD CONSTRAINT pk_id_tattoo PRIMARY KEY (id_tattoo);


--
-- TOC entry 3199 (class 2606 OID 18303)
-- Name: usuarios pk_id_usuario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT pk_id_usuario PRIMARY KEY (id_usuario);


--
-- TOC entry 3203 (class 2606 OID 18304)
-- Name: tattoos fk_id_artista; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tattoos
    ADD CONSTRAINT fk_id_artista FOREIGN KEY (id_artista) REFERENCES public.artistas(id_artista) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3200 (class 2606 OID 18309)
-- Name: citas fk_id_artista; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT fk_id_artista FOREIGN KEY (id_artista) REFERENCES public.artistas(id_artista) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3201 (class 2606 OID 18314)
-- Name: citas fk_id_tattoo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT fk_id_tattoo FOREIGN KEY (id_tattoo) REFERENCES public.tattoos(id_tattoo) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3202 (class 2606 OID 18319)
-- Name: citas fk_id_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT fk_id_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2023-06-01 17:26:42

--
-- PostgreSQL database dump complete
--

