package com.even.healthcareAPI.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.even.healthcareAPI.entity.ExaminationEntity;
import com.even.healthcareAPI.entity.ExaminationPractitionerEntity;

@Repository
public interface ExaminationPractitionerDao extends JpaRepository<ExaminationPractitionerEntity, Long> {

	List<ExaminationPractitionerEntity> findByExamination(ExaminationEntity examination);

	void deleteByExamination(ExaminationEntity examination);


}
