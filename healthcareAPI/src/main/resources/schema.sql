

CREATE SEQUENCE IF NOT EXISTS examination_id_seq;
DROP TABLE examination IF EXISTS;
DROP TABLE service_type IF EXISTS;
DROP TABLE organization_type IF EXISTS;
DROP TABLE organization IF EXISTS;
DROP TABLE practitioner IF EXISTS;
DROP TABLE patient IF EXISTS;
DROP TABLE examination_practitioner IF EXISTS;
CREATE TABLE examination (
    id bigint not null/* default nextval('examination_id_seq')*/,
    identifier VARCHAR(255) UNIQUE NOT NULL,
    patient_id VARCHAR(256),
    organization_id VARCHAR(256) /*default ""*/,
    status VARCHAR(256) /*default ""*/,
    service_type_id VARCHAR(256),
    priority VARCHAR(256),
	start_date date,
	end_date date,
	diagnosis VARCHAR(256),
);
/*alter sequence examination_id_seq owned by examination.id;*/

CREATE SEQUENCE IF NOT EXISTS service_type_id_seq;
CREATE TABLE service_type (
    id bigint not null/* default nextval('service_type_id_seq')*/,
    identifier VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL
);
/*alter sequence service_type_id_seq owned by service_type.id;*/
CREATE SEQUENCE IF NOT EXISTS organization_type_id_seq;
CREATE TABLE organization_type (
    id bigint not null/* default nextval('service_type_id_seq')*/,
    identifier VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL
);
CREATE SEQUENCE IF NOT EXISTS organization_id_seq;
CREATE TABLE organization (
    id bigint not null/* default nextval('service_type_id_seq')*/,
    identifier VARCHAR(255) UNIQUE NOT NULL,
    active BOOLEAN,
    name VARCHAR(255) UNIQUE NOT NULL,
    adress VARCHAR(256),
    phone VARCHAR(256),
    email VARCHAR(256),
    type_id VARCHAR(256)
);
CREATE SEQUENCE IF NOT EXISTS practitioner_id_seq;
CREATE TABLE practitioner (
    id bigint not null/* default nextval('service_type_id_seq')*/,
    identifier VARCHAR(255) UNIQUE NOT NULL,
    active BOOLEAN,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    birth_date date NOT NULL,
    adress VARCHAR(256),
    phone VARCHAR(256),
    email VARCHAR(256),
    qualification VARCHAR(256),
    username VARCHAR(255) UNIQUE,
    password VARCHAR(256),
    organization_id VARCHAR(256)
    
);
CREATE SEQUENCE IF NOT EXISTS patient_id_seq;
CREATE TABLE patient (
    id bigint not null/* default nextval('service_type_id_seq')*/,
    active BOOLEAN,
    adress VARCHAR(256),
    birth_date date NOT NULL,
    deceased BOOLEAN,   
    email VARCHAR(256),
    gender VARCHAR(255) NOT NULL,
    identifier VARCHAR(255) UNIQUE NOT NULL,
    maritial_status VARCHAR(256),
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(256),
    surname VARCHAR(255) NOT NULL,
    custodian_organization_id VARCHAR(256),
    primary_practitioner_id VARCHAR(256)
);

CREATE SEQUENCE IF NOT EXISTS examination_practitioner_id_seq;
CREATE TABLE examination_practitioner (
        id bigint not null/* default nextval('service_type_id_seq')*/,
        examination_id VARCHAR(256),
        practitioner_id VARCHAR(256),
);   
/*
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE,
    UNIQUE(user_id, car_id)
);
*/
