package com.even.healthcareAPI.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.even.healthcareAPI.dto.OrganizationDto;
import com.even.healthcareAPI.entity.OrganizationEntity;

@Component
public class OrganizationConverter implements GenericConverter<OrganizationDto, OrganizationEntity> {
	@Autowired
	private OrganizationTypeConverter orgTypeConverter;

	@Override
	public OrganizationEntity toEntity(OrganizationDto dto) {
		return new OrganizationEntity(dto.getId(), dto.getIdentifier(), dto.isActive(), dto.getName(), dto.getAdress(), dto.getPhone(), dto.getEmail(),
				orgTypeConverter.toEntity(dto.getOrganizationType()));
	}

	@Override
	public OrganizationDto toDto(OrganizationEntity entity) {
		return new OrganizationDto(entity.getId(), entity.getIdentifier(), entity.isActive(), entity.getName(), entity.getAdress(), entity.getPhone(), entity.getEmail(),
				orgTypeConverter.toDto(entity.getOrganizationType()));
	}
	
	
}
