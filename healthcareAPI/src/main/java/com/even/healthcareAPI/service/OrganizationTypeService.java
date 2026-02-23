package com.even.healthcareAPI.service;

import java.util.List;
import java.util.Optional;

import com.even.healthcareAPI.dto.OrganizationTypeDto;


public interface OrganizationTypeService {
	List<OrganizationTypeDto> findAll();
	Optional<OrganizationTypeDto> findById(Long id);
	
}
