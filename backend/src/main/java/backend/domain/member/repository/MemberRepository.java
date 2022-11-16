package backend.domain.member.repository;

import backend.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {

    @Query(value = "select m from Member m where m.email = :email or m.nickname = :name")
    Optional<Member> findMemberByEmailOrNickname(@Param("email") String email, @Param("name") String name);

    @Query(value = "select m from Member m where m.email = :email")
    Optional<Member> findByMemberEmail(String email);

}
