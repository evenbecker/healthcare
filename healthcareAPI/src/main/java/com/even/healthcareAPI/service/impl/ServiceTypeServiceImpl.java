package com.even.healthcareAPI.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.even.healthcareAPI.converter.ServiceTypeConverter;
import com.even.healthcareAPI.dao.ServiceTypeDao;
import com.even.healthcareAPI.dto.ServiceTypeDto;
import com.even.healthcareAPI.entity.ServiceTypeEntity;
import com.even.healthcareAPI.service.ServiceTypeService;

@Service
public class ServiceTypeServiceImpl implements ServiceTypeService {
	private ServiceTypeDao serviceTypeDao;
	private ServiceTypeConverter converter;
	
	public ServiceTypeServiceImpl(ServiceTypeDao serviceTypeDao, ServiceTypeConverter converter) {
		super();
		this.serviceTypeDao = serviceTypeDao;
		this.converter = converter;
	}

	@Override
	public List<ServiceTypeDto> findAll() {
		List<ServiceTypeEntity> serviceTypeList = serviceTypeDao.findAll();
		return serviceTypeList.stream().map(serviceType -> {
			return converter.toDto(serviceType);
		}).collect(Collectors.toList());
	}

	@Override
	public Optional<ServiceTypeDto> findById(Long id) {
		Optional<ServiceTypeEntity> serviceType = serviceTypeDao.findById(id);
		if (serviceType.isPresent()) {
			return Optional.of(converter.toDto(serviceType.get()));
		}
		return Optional.empty();
	}

	@Override
	public void saveAll(List<ServiceTypeDto> list) {
		List<ServiceTypeEntity> listForSaving= list.stream().map(serviceType -> {
			return converter.toEntity(serviceType);
		}).collect(Collectors.toList());
		serviceTypeDao.saveAll(listForSaving);
	}
	
	
}
