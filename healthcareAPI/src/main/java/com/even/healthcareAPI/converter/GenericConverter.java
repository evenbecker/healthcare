package com.even.healthcareAPI.converter;

import com.even.healthcareAPI.dto.Dto;
import com.even.healthcareAPI.entity.Entity;

public interface GenericConverter<D extends Dto, E extends Entity> {
	E toEntity(D dto);

	D toDto(E entity);
}
