package backend.domain.member.repository;

import backend.domain.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {

    @Query(value = "select m from Member m where m.email = :email or m.nickname = :name order by m.createdAt desc")
    Optional<Member> findMemberByEmailOrNickname(@Param("email") String email, @Param("name") String name);

    @Query(value = "select m from Member m where m.email = :email order by m.createdAt desc")
    Optional<Member> findByMemberEmail(String email);

    // 나눠서 처리를 위해 작성해주신 코드와 같은 방식으로 메소드를 추가했습니다.
    @Query(value = "select m from Member m where m.nickname = :nickname order by m.createdAt desc")
    Optional<Member> findByMemberNickname(String nickname);

    @Query(value = "select m from Member m order by m.createdAt desc")
    Page<Member>findAllByOrderByCreatedAtDesc (Pageable pageable);
}
