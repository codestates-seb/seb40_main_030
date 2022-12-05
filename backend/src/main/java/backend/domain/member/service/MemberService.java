package backend.domain.member.service;

import backend.domain.admin.repository.AdminRepository;
import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;

import backend.global.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor @Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils customAuthorityUtils;

    @Transactional
    public Member createMember(Member member) {
        verifyNotExistsMember(member);

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = customAuthorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        member.setCreatedAt(LocalDateTime.now());
        member.setModifiedAt(LocalDateTime.now());

        return memberRepository.save(member);
    }

    @Transactional
    public Member patchMember(Member member) {
        Member verifiedMember = verifyExistsMember(member.getId());
        Optional.ofNullable(member.getNickname()).ifPresent(verifiedMember::setNickname);
        Optional.ofNullable(member.getPhone()).ifPresent(verifiedMember::setPhone);
        Optional.ofNullable(member.getAddress()).ifPresent(verifiedMember::setAddress);
        Optional.ofNullable(member.getDetailAddress()).ifPresent(verifiedMember::setDetailAddress);
        Optional.ofNullable(member.getPhotoURL()).ifPresent(verifiedMember::setPhotoURL);
        verifiedMember.setModifiedAt(LocalDateTime.now());

        return memberRepository.save(verifiedMember);
    }

    @Transactional
    public void deleteMember(Long memberId) {
        Member deletingMember = verifyExistsMember(memberId);
        memberRepository.delete(deletingMember);
    }

    public Member findMember(Long memberId) {

        return verifyExistsMember(memberId);
    }

    public Page<Member> findMembers(Pageable pageable) {

        return memberRepository.findAllByOrderByCreatedAtDesc(pageable);
    }


    private void verifyNotExistsMember(Member member) {
        Optional<Member> optionalEmail = memberRepository.findByMemberEmail(member.getEmail());
        if (optionalEmail.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.EMAIL_EXIST);
        }

        Optional<Member> optionalNickname = memberRepository.findByMemberNickname(member.getNickname());
        if (optionalNickname.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.NICKNAME_EXIST);
        }
    }

    private Member verifyExistsMember(Long memberId) {

        return memberRepository.findById(memberId).orElseThrow(()->
        {throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);});

    }

    @Transactional
    public void createOauthMember(Member member) {
        String rawPassword = member.getPassword();
        String encPassword = passwordEncoder.encode(rawPassword);
        member.setPassword(encPassword);
        List<String> roles = customAuthorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);
        memberRepository.save(member);
    }

}
