package com.even.healthcareAPI.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.even.healthcareAPI.entity.OrganizationTypeEntity;

@Repository
public interface OrganizationTypeDao extends JpaRepository<OrganizationTypeEntity, Long> {
	
}
