package com.even.healthcareAPI.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.even.healthcareAPI.dto.PractitionerDto;
import com.even.healthcareAPI.entity.OrganizationEntity;
import com.even.healthcareAPI.entity.OrganizationTypeEntity;
import com.even.healthcareAPI.entity.PractitionerEntity;

@Component
public class PractitionerConverter implements GenericConverter<PractitionerDto, PractitionerEntity> {
	@Autowired
	OrganizationConverter orgConverter;

	@Override
	public PractitionerEntity toEntity(PractitionerDto dto) {
		return new PractitionerEntity(dto.getId(), dto.getIdentifier(), dto.getActive(), dto.getName(), dto.getSurname(), dto.getGender(), dto.getBirthDate(),
				dto.getAdress(), dto.getPhone(), dto.getEmail(), dto.getQualification(), dto.getUsername(), dto.getPassword(), orgConverter.toEntity(dto.getOrganization()));
	}

	@Override
	public PractitionerDto toDto(PractitionerEntity entity) {
		if(entity.getOrganization() == null) {
			OrganizationEntity deletedOrg = new OrganizationEntity();
			deletedOrg.setId(-1L);
			deletedOrg.setOrganizationType(new OrganizationTypeEntity());
			entity.setOrganization(deletedOrg);
		}
		return new PractitionerDto(entity.getId(), entity.getIdentifier(), entity.getActive(), entity.getName(), entity.getSurname(), entity.getGender(), entity.getBirthDate(),
				entity.getAdress(), entity.getPhone(), entity.getEmail(), entity.getQualification(), entity.getUsername(), entity.getPassword(), orgConverter.toDto(entity.getOrganization()));
	}

}
