package com.even.healthcareAPI.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.even.healthcareAPI.dto.ExaminationPractitionerDto;
import com.even.healthcareAPI.entity.ExaminationPractitionerEntity;

@Component
public class ExaminationPractitionerConverter implements GenericConverter<ExaminationPractitionerDto, ExaminationPractitionerEntity> {
	@Autowired
	private ExaminationConverter examinationConverter;
	@Autowired
	private PractitionerConverter practitionerConverter;
	
	@Override
	public ExaminationPractitionerEntity toEntity(ExaminationPractitionerDto dto) {
		return new ExaminationPractitionerEntity(dto.getId(), examinationConverter.toEntity(dto.getExamination()), practitionerConverter.toEntity(dto.getPractitioner()));
	}
	@Override
	public ExaminationPractitionerDto toDto(ExaminationPractitionerEntity entity) {
		return new ExaminationPractitionerDto(entity.getId(), examinationConverter.toDto(entity.getExamination()), practitionerConverter.toDto(entity.getPractitioner()));
	}
	
	
	
	
}
