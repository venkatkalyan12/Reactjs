package Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Entity.HospitalSpecialty;

@Repository
public interface HospitalSpecialtyRepository extends JpaRepository<HospitalSpecialty, Long> {
}