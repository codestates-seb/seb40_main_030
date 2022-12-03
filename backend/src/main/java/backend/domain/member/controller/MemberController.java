package backend.domain.member.controller;


import backend.domain.member.dto.MemberDto;
import backend.domain.member.dto.MemberResDto;
import backend.domain.member.entity.Member;
import backend.domain.member.mapper.MemberMapper;
import backend.domain.member.service.MemberService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import backend.global.security.utils.JwtExtractUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;

@Validated
@RequiredArgsConstructor
@RequestMapping("/members")
@RestController
public class MemberController {
    private final MemberMapper mapper;
    private final MemberService service;
    private final JwtExtractUtils jwtExtractUtils;

    @PostMapping
    public ResponseEntity<MemberDto.PostResDto> postMember(@Valid @RequestBody MemberDto.Post dto) {

        Member member = mapper.memberDtoPostToMember(dto);
        Member createdMember = service.createMember(member);
        MemberDto.PostResDto response = new MemberDto.PostResDto(createdMember);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/find")
    public ResponseEntity<MemberResDto> getMember(HttpServletRequest request) {
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        Member findMember = service.findMember(memberId);
        MemberResDto response = new MemberResDto(findMember);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/edit")
    public ResponseEntity<MemberDto.PatchResDto> patchMember (HttpServletRequest request,
                                                              @RequestBody MemberDto.Patch dto) {
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        Member member = mapper.memberDtoPatchToMember(dto);
        member.setId(memberId);
        Member modifiedMember = service.patchMember(member);
        MemberDto.PatchResDto response = new MemberDto.PatchResDto(modifiedMember);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<SingleResDto<String>> deleteMember (HttpServletRequest request) {
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        service.deleteMember(memberId);

        return new ResponseEntity<>(new SingleResDto<>("Success Delete"), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<PageInfoDto> getMembers (Pageable pageable) {
        Page<Member> page = service.findMembers(pageable);
        Page<MemberResDto> dtoPage = page.map(MemberResDto::new);

        return new ResponseEntity<>(new PageInfoDto(dtoPage), HttpStatus.OK);
    }

//    @PostMapping("/logout")                   // 현재 시큐리티 미적용 상태이므로 주석처리 해두었습니다.
//    public ResponseEntity logOut(HttpServletRequest request) {
//        System.out.println("로그아웃");
//        service.outMember(request);
//
//        return new ResponseEntity(HttpStatus.OK);
//    }
}
