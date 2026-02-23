package com.even.healthcareAPI.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.even.healthcareAPI.converter.OrganizationTypeConverter;
import com.even.healthcareAPI.dao.OrganizationTypeDao;
import com.even.healthcareAPI.dto.OrganizationTypeDto;
import com.even.healthcareAPI.entity.OrganizationTypeEntity;
import com.even.healthcareAPI.service.OrganizationTypeService;

@Service
public class OrganizationTypeServiceImpl implements OrganizationTypeService {
	private OrganizationTypeDao orgTypeDao;
	private OrganizationTypeConverter converter;
	

	public OrganizationTypeServiceImpl(OrganizationTypeDao orgTypeDao, OrganizationTypeConverter converter) {
		super();
		this.orgTypeDao = orgTypeDao;
		this.converter = converter;
	}

	@Override
	public List<OrganizationTypeDto> findAll() {
		List<OrganizationTypeEntity> orgTypeList = orgTypeDao.findAll();
		return orgTypeList.stream().map(orgType -> {
			return converter.toDto(orgType);
		}).collect(Collectors.toList());
	}

	@Override
	public Optional<OrganizationTypeDto> findById(Long id) {
		Optional<OrganizationTypeEntity> orgType = orgTypeDao.findById(id);
		if (orgType.isPresent()) {
			return Optional.of(converter.toDto(orgType.get()));
		}
		return Optional.empty();
	}

}
