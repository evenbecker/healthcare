package com.even.healthcareAPI.service;

import java.util.List;
import java.util.Optional;

import com.even.healthcareAPI.dto.ExaminationPractitionerDto;

public interface ExaminationPractitionerService {
	ExaminationPractitionerDto save(ExaminationPractitionerDto examinationPractitioner);
	Optional<ExaminationPractitionerDto> findById(Long id);
	void delete(Long id);
	List<ExaminationPractitionerDto> findByExamination(Long id);
}
