package com.even.healthcareAPI.service;

import java.util.List;
import java.util.Optional;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Page;

import com.even.healthcareAPI.dto.OrganizationDto;

public interface OrganizationService {
	OrganizationDto save(OrganizationDto organization) throws EntityExistsException;
	Page<OrganizationDto> findAll(Integer pageNo, Integer pageSize, String sortBy, String sortOrder, String name, String orgType);
	OrganizationDto update(OrganizationDto organization) throws RuntimeException;
	Optional<OrganizationDto> findById(Long id);
	void delete(Long id) throws RuntimeException;
	List<OrganizationDto> findAll();
	Optional<OrganizationDto> findByName(String name);
}
