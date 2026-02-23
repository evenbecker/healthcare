package com.even.healthcareAPI.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.even.healthcareAPI.entity.ServiceTypeEntity;

@Repository
public interface ServiceTypeDao extends JpaRepository<ServiceTypeEntity, Long>  {

}
