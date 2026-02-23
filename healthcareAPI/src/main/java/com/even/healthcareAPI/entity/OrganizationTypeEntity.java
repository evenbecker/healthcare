package com.even.healthcareAPI.entity;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "organization_type")
public class OrganizationTypeEntity implements com.even.healthcareAPI.entity.Entity{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String identifier;
	private String name;
	
	public OrganizationTypeEntity() {
	}

	public OrganizationTypeEntity(Long id, String identifier, String name) {
		super();
		this.id = id;
		this.identifier = identifier;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "OrganizationTypeEntity [id=" + id + ", identifier=" + identifier + ", name=" + name + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, identifier, name);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OrganizationTypeEntity other = (OrganizationTypeEntity) obj;
		return Objects.equals(id, other.id) && Objects.equals(identifier, other.identifier)
				&& Objects.equals(name, other.name);
	}
	
	

	
}
