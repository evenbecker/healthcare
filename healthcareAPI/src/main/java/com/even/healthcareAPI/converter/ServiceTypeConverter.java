package com.even.healthcareAPI.converter;

import org.springframework.stereotype.Component;

import com.even.healthcareAPI.dto.ServiceTypeDto;
import com.even.healthcareAPI.entity.ServiceTypeEntity;

@Component
public class ServiceTypeConverter implements GenericConverter<ServiceTypeDto, ServiceTypeEntity> {

	@Override
	public ServiceTypeEntity toEntity(ServiceTypeDto dto) {
		return new ServiceTypeEntity(dto.getId(), dto.getIdentifier(), dto.getName());
	}

	@Override
	public ServiceTypeDto toDto(ServiceTypeEntity entity) {
		return new ServiceTypeDto(entity.getId(), entity.getIdentifier(), entity.getName());
	}

}
