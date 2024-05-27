package Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Entity.Hospital;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long> {
    Hospital findByUsername(String username);
}
