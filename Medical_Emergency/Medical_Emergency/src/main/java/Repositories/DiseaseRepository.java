package Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Entity.Disease;

@Repository
public interface DiseaseRepository extends JpaRepository<Disease, Long> {
}