package Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Entity.EmergencyReport;

@Repository
public interface EmergencyReportRepository extends JpaRepository<EmergencyReport, Long> {
}


