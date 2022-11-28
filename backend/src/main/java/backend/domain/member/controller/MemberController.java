package backend.domain.member.controller;


import backend.domain.member.dto.MemberDto;
import backend.domain.member.dto.MemberResDto;
import backend.domain.member.entity.Member;
import backend.domain.member.mapper.MemberMapper;
import backend.domain.member.service.MemberService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@Validated
@RequiredArgsConstructor
@RequestMapping("/members")
@RestController
public class MemberController {
    private final MemberMapper mapper;
    private final MemberService service;

    @PostMapping
    public ResponseEntity<MemberDto.PostResDto> postMember(@Valid @RequestBody MemberDto.Post dto) {

        Member member = mapper.memberDtoPostToMember(dto);
        Member createdMember = service.createMember(member);
        MemberDto.PostResDto response = new MemberDto.PostResDto(createdMember);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity<MemberResDto> getMember(@Positive @PathVariable("member-id") Long memberId) {

        Member findMember = service.findMember(memberId);
        MemberResDto response = new MemberResDto(findMember);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity<MemberDto.PatchResDto> patchMember (@PathVariable("member-id") Long memberId,
                                                              @RequestBody MemberDto.Patch dto) {
        Member member = mapper.memberDtoPatchToMember(dto);
        member.setId(memberId);
        Member modifiedMember = service.patchMember(member);
        MemberDto.PatchResDto response = new MemberDto.PatchResDto(modifiedMember);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity<SingleResDto<String>> deleteMember (@PathVariable("member-id") Long memberId) {
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
