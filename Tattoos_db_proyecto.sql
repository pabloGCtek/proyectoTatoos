PGDMP         5    
            {           Tattoos_db_proyecto    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    18273    Tattoos_db_proyecto    DATABASE     �   CREATE DATABASE "Tattoos_db_proyecto" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
 %   DROP DATABASE "Tattoos_db_proyecto";
                postgres    false            �            1259    18274    cont_id_artista    SEQUENCE     x   CREATE SEQUENCE public.cont_id_artista
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cont_id_artista;
       public          postgres    false            �            1259    18275    artistas    TABLE     �   CREATE TABLE public.artistas (
    id_artista integer DEFAULT nextval('public.cont_id_artista'::regclass) NOT NULL,
    nombre character varying(20) NOT NULL,
    bio character varying(500) NOT NULL,
    imagen character varying(150) NOT NULL
);
    DROP TABLE public.artistas;
       public         heap    postgres    false    214            �            1259    18281    cont_id_cita    SEQUENCE     u   CREATE SEQUENCE public.cont_id_cita
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.cont_id_cita;
       public          postgres    false            �            1259    18282    citas    TABLE       CREATE TABLE public.citas (
    id_cita integer DEFAULT nextval('public.cont_id_cita'::regclass) NOT NULL,
    fecha date NOT NULL,
    turno integer NOT NULL,
    id_usuario integer NOT NULL,
    id_artista integer NOT NULL,
    id_tattoo integer NOT NULL
);
    DROP TABLE public.citas;
       public         heap    postgres    false    216            �            1259    18286    cont_id_tatoo    SEQUENCE     v   CREATE SEQUENCE public.cont_id_tatoo
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.cont_id_tatoo;
       public          postgres    false            �            1259    18287    cont_id_usuario    SEQUENCE     x   CREATE SEQUENCE public.cont_id_usuario
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cont_id_usuario;
       public          postgres    false            �            1259    18288    tattoos    TABLE     �  CREATE TABLE public.tattoos (
    id_tattoo integer DEFAULT nextval('public.cont_id_tatoo'::regclass) NOT NULL,
    nombre character varying(20) NOT NULL,
    descripcion character varying(150) NOT NULL,
    lugar character varying(20) NOT NULL,
    tamano character varying(20) NOT NULL,
    imagen character varying(150) NOT NULL,
    tattoo_propio boolean NOT NULL,
    precio numeric(7,2) NOT NULL,
    id_artista integer NOT NULL
);
    DROP TABLE public.tattoos;
       public         heap    postgres    false    218            �            1259    18292    usuarios    TABLE       CREATE TABLE public.usuarios (
    id_usuario integer DEFAULT nextval('public.cont_id_usuario'::regclass) NOT NULL,
    nombre character varying(20) NOT NULL,
    email character varying(20) NOT NULL,
    contrasena character varying(20) NOT NULL,
    fecha_nacimiento date NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false    219                      0    18275    artistas 
   TABLE DATA                 public          postgres    false    215   �                 0    18282    citas 
   TABLE DATA                 public          postgres    false    217   r#                 0    18288    tattoos 
   TABLE DATA                 public          postgres    false    220   �#                 0    18292    usuarios 
   TABLE DATA                 public          postgres    false    221   �'                   0    0    cont_id_artista    SEQUENCE SET     =   SELECT pg_catalog.setval('public.cont_id_artista', 8, true);
          public          postgres    false    214            !           0    0    cont_id_cita    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cont_id_cita', 1, false);
          public          postgres    false    216            "           0    0    cont_id_tatoo    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cont_id_tatoo', 9, true);
          public          postgres    false    218            #           0    0    cont_id_usuario    SEQUENCE SET     =   SELECT pg_catalog.setval('public.cont_id_usuario', 5, true);
          public          postgres    false    219            y           2606    18297    artistas pk_id_artista 
   CONSTRAINT     \   ALTER TABLE ONLY public.artistas
    ADD CONSTRAINT pk_id_artista PRIMARY KEY (id_artista);
 @   ALTER TABLE ONLY public.artistas DROP CONSTRAINT pk_id_artista;
       public            postgres    false    215            {           2606    18299    citas pk_id_cita 
   CONSTRAINT     S   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT pk_id_cita PRIMARY KEY (id_cita);
 :   ALTER TABLE ONLY public.citas DROP CONSTRAINT pk_id_cita;
       public            postgres    false    217            }           2606    18301    tattoos pk_id_tattoo 
   CONSTRAINT     Y   ALTER TABLE ONLY public.tattoos
    ADD CONSTRAINT pk_id_tattoo PRIMARY KEY (id_tattoo);
 >   ALTER TABLE ONLY public.tattoos DROP CONSTRAINT pk_id_tattoo;
       public            postgres    false    220                       2606    18303    usuarios pk_id_usuario 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT pk_id_usuario PRIMARY KEY (id_usuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT pk_id_usuario;
       public            postgres    false    221            �           2606    18304    tattoos fk_id_artista    FK CONSTRAINT     �   ALTER TABLE ONLY public.tattoos
    ADD CONSTRAINT fk_id_artista FOREIGN KEY (id_artista) REFERENCES public.artistas(id_artista) ON UPDATE CASCADE ON DELETE CASCADE;
 ?   ALTER TABLE ONLY public.tattoos DROP CONSTRAINT fk_id_artista;
       public          postgres    false    3193    215    220            �           2606    18309    citas fk_id_artista    FK CONSTRAINT     �   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT fk_id_artista FOREIGN KEY (id_artista) REFERENCES public.artistas(id_artista) ON UPDATE CASCADE ON DELETE CASCADE;
 =   ALTER TABLE ONLY public.citas DROP CONSTRAINT fk_id_artista;
       public          postgres    false    3193    215    217            �           2606    18314    citas fk_id_tattoo    FK CONSTRAINT     �   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT fk_id_tattoo FOREIGN KEY (id_tattoo) REFERENCES public.tattoos(id_tattoo) ON UPDATE CASCADE ON DELETE CASCADE;
 <   ALTER TABLE ONLY public.citas DROP CONSTRAINT fk_id_tattoo;
       public          postgres    false    217    3197    220            �           2606    18319    citas fk_id_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT fk_id_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE;
 =   ALTER TABLE ONLY public.citas DROP CONSTRAINT fk_id_usuario;
       public          postgres    false    3199    217    221               �  x��UMo�6��Wr��
�A{Zl6���Ek�@Oň��ҥH��q�M�>�䖫�Xߐ��n=�"Q�y�ޛ�����+:������v��9�6���m��*򡭣TT�P�m�Z�3�}���%=}^�l�yVn$��zv���t�܄�d���:Nv������E<�����߉�3��c�Ky�I������Rh3�sH�	W�!�іl�*��.���[�L��6��r@`�$gH���M�$�`��.���-q��u��2*T�$U9��PG�hsM ��g��^������ڭm��p���"{Is%t��]�����m{=Ĺ	��r�]�5��7���ُ'�"�wHv��l��*�����XT
�NZ���ɯj�`��ݨ�����'�L������vA��͊6�L���`p-�X�����;�n']�]�T�v��D1��=�"@�\����f�'�K,@�ZsZPy;ޥ��>�|�D�� ڣ� /J[ñb$j�΂�/į(Y�����|6{�e��"7s��O�z�1�o��W�>�c�G�%�V\n�iI[V��^.�Y�� ���'����
>�yj��Q�Xo�vh�E@�E7~���#��| 3"Gx����f�][��N���E���!�������$�}wO^FB{��>Q�n�G�xr?l���*�s����kQMCk�Q:�@XB��fS�6�y��l⿭@��K�lJ��!�e�IB|�x�r�A{��o����q�q�d?�4���B��zk�m�'�ݹ��I��)ƿ�qd�
}�M�ZtU	�	�S�c�%�)'N�cqo���r����Z��t�whW�V�'.�W��d8���v�i�����-卟�����l;�����pu༯�M����A?,^|{����NN���V         
   x���               x��WAW"9��+ꦾ�k��ݓ���ATt���+�C&��I��G{�þ�	�����Ap]�H'�t�W�WU����WC�����#�����J����b\�ґf���4�"�dD�����%��SL�t�n��L���t�Y���4Ԗ��p{t~ӽ��zvO��`5@�K�7a�"%!�P�4��HIn��|�0��,����N��w$-i���O,�~0�63����I��H�����VL��^�0�X�Z�
�����(&2{�ဣ�e:?��aA��8e%Z�~�s������5dL�YDF0B�W*�����Мi�1{	��X~��*H�f5�V+��8H�d��͗�d��E�2��u���$�p��_بu�q�ZN�r�}�C�5}[��Q���a4Q�i�L��e(��@>�����>�\ٴ{�[�H����i���LI�t�C�u����V��g��I�l�����ͧ�����>�ޭc�E�3z�<θ����Ty5���=A�crHG��7�d�������7i|�
�aɆ͋�If_)c�ӂ �W�Wnp:)�z`�Pb^'����Wm�	�K��G�鋊�H��,~x��F��?���/Y"eun�jUw�����̧f53�Z���Hc����4k��_d����ZZݚ�Q]��p����v�w$9�RI�XTZf�ʘi��]ڻ;�n-5��\��r4�A�(�c�(��q����:�/Ұ�ki���܊���,�M1��8v�wGR��|J.�Ȉ�|�]ƛIޥ�ΰֽ��WA�7�A�����:��|̝��L��)	 ���Hʵ%)^qx8kG�Fw��j�p+X�Z��IQ1�D��CI'
H��!?��j��7(�w�|����jw|����]��7䶧�'w��8*�~��؄�T\m�^��������^��}���I��(�OU^��Q�I	!.�x�c��/t[��"��.�ϻj��CX�8}��r�h<N�
� ��Q���wX�ag�_~!         �   x���Ok�0����
��O��]��Cܘ������h����Dwq�c��//��!I�ݭ��Po�/Ї�5j��޸&�t����k�&�;4-����-�����錶7�������ȟ�<�W��9��)ץ	�H)��I�E>}��Q�D��^'n�ި��ߌ��S��7�����1��T�����o�"ݒ��J������q�j|�2�Vqb�Kh��_^��W?U�}B��Q     