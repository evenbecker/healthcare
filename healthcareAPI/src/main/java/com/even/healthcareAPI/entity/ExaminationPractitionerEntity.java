package com.even.healthcareAPI.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "examination_practitioner")
public class ExaminationPractitionerEntity implements com.even.healthcareAPI.entity.Entity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "examination_id")
	private ExaminationEntity examination;
	@ManyToOne
	@JoinColumn(name = "practitioner_id")
	private PractitionerEntity practitioner;
	
	public ExaminationPractitionerEntity() {
	}

	public ExaminationPractitionerEntity(Long id, ExaminationEntity examination, PractitionerEntity practitioner) {
		super();
		this.id = id;
		this.examination = examination;
		this.practitioner = practitioner;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ExaminationEntity getExamination() {
		return examination;
	}

	public void setExamination(ExaminationEntity examination) {
		this.examination = examination;
	}

	public PractitionerEntity getPractitioner() {
		return practitioner;
	}

	public void setPractitioner(PractitionerEntity practitioner) {
		this.practitioner = practitioner;
	}

	@Override
	public String toString() {
		return "ExaminationPractitionerEntity [id=" + id + ", examination=" + examination + ", practitioner="
				+ practitioner + "]";
	}
}
