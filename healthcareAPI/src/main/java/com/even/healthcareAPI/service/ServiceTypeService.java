package com.even.healthcareAPI.service;

import java.util.List;
import java.util.Optional;

import com.even.healthcareAPI.dto.ServiceTypeDto;

public interface ServiceTypeService {
	List<ServiceTypeDto> findAll();
	Optional<ServiceTypeDto> findById(Long id);
	void saveAll(List<ServiceTypeDto> list);
}
