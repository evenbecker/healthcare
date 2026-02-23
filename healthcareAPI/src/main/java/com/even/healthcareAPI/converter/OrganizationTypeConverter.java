package com.even.healthcareAPI.converter;

import org.springframework.stereotype.Component;

import com.even.healthcareAPI.dto.OrganizationTypeDto;
import com.even.healthcareAPI.entity.OrganizationTypeEntity;

@Component
public class OrganizationTypeConverter implements GenericConverter<OrganizationTypeDto, OrganizationTypeEntity> {

	@Override
	public OrganizationTypeEntity toEntity(OrganizationTypeDto dto) {
		return new OrganizationTypeEntity(dto.getId(), dto.getIdentifier(), dto.getName());
	}

	@Override
	public OrganizationTypeDto toDto(OrganizationTypeEntity entity) {
		return new OrganizationTypeDto(entity.getId(), entity.getIdentifier(), entity.getName());
	}

}
