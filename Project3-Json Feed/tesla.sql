PGDMP                         {         $   Tesla Autonomous Deaths Updated 2023    14.6    14.6     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    25041 $   Tesla Autonomous Deaths Updated 2023    DATABASE     �   CREATE DATABASE "Tesla Autonomous Deaths Updated 2023" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Canada.1252';
 6   DROP DATABASE "Tesla Autonomous Deaths Updated 2023";
                postgres    false            �            1259    25094    tesla    TABLE     _  CREATE TABLE public.tesla (
    case_no character varying(5) NOT NULL,
    year integer NOT NULL,
    country character varying NOT NULL,
    state character varying NOT NULL,
    description character varying,
    death integer,
    tesla_driver character varying,
    tesla_occupant character varying,
    other_vehichle character varying,
    cyclist_peds character varying,
    tesla_plus_cyclistped character varying,
    model character varying NOT NULL,
    autopilot_claimed character varying,
    verified_autopilot_death character varying,
    verified_autopliot_death_plusothers character varying,
    link1 character varying,
    link2 character varying,
    soruce character varying,
    note character varying,
    deaceased1 character varying,
    deaceased2 character varying,
    deaceased3 character varying,
    deaceased4 character varying
);
    DROP TABLE public.tesla;
       public         heap    postgres    false            �          0    25094    tesla 
   TABLE DATA           J  COPY public.tesla (case_no, year, country, state, description, death, tesla_driver, tesla_occupant, other_vehichle, cyclist_peds, tesla_plus_cyclistped, model, autopilot_claimed, verified_autopilot_death, verified_autopliot_death_plusothers, link1, link2, soruce, note, deaceased1, deaceased2, deaceased3, deaceased4) FROM stdin;
    public          postgres    false    209   k	       �   �  x��X�n�6��<��$J�Ѐa(2`�X[
y��H�����w)۩l7��&�
$2bX�����s)V�26!߿%�۷���D8��D�`I���5��*2��H�c��NH����$=TS�D��0��>�N� ÿ4/�4y���WO�m�O�\'-7T*�����k�kh��o.��`��Z9��P@��L��Z���=hMC��y�Z�5� �S">K��t:�v�<Ͳe6g�,���뵹bJ�O8j���5�=��m�XT�F5�Q\�������u|,!�O�?7��w2�r�%'z,����ɚ�i�y�O+�f:��D���Y��=���I	�e@fu��|	�g��9�D��Ze]c���kI�Вf٢�[�������WC�qMƋ��s���\oT�de5�!�W�5$
A�������Wł�U9HvT4FC`Ug�8:w!Λ-�eY�K6mB�����X��N
67�T�3�}�v��;�'�V��c���Y�H��d�悝,1ߡ��{D܃w
1y7���*�>*%�e[��b�A2�#د�;>_V%��9t6�+����3Q�UBJ�_�/:�������]�_o�����[b1�����p������<�g�q��p4�
�Z�L��s���
��i|�6(\F�1߶J�\T��k,9���L٬H���Jd�c�v	q��=`�� �` !Wn�}��������tV,�″_���fuvJ\�D��ۅI |�x�_���<j��n5w�{N�a���n9����x��Zy��C��G?��O��CE�2���=��H�ʡQ#sZRl��=����􍍝��Q�m�Aw3�aE+Q�(�_lV]��Y�ϼ]�g���g	)�KN~���< |������:򏅈��6d؞]��G�gh`��EX��Yf	7��P�����vU����:����}*z�v�Íx&=O��k�ۭ�K��t�`Kkh[�+p;܁b��ѵET�|���}R��/6n��F:�{c�D�C���Ʒ�����?�GQ�`�[ݾs��'�w�Xc��k�,�o����՛��-�2����[p�sC�>@���c��4=��v���@;��X�4���z�u�^��ӟq��r�a;S�+���izss���_�     