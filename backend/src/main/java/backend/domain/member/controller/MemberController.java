package backend.domain.member.controller;


import backend.domain.member.dto.MemberDto;
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
    public ResponseEntity<MemberDto.Response> postMember(@Valid @RequestBody MemberDto.Post dto) {

        Member member = mapper.memberDtoPostToMember(dto);  // 식별자 값이 DB저장까지는 나오지 않아 mapper가 식별자 값을 못잡는 주의문구가 뜹니다. 사용에는 지장이 없으니 주의문구는 무시하셔도 좋습니다.
        Member createdMember = service.createMember(member);
//        MemberDto.Response response = mapper.memberToMemberDtoResponse(createdMember); // 매퍼에서 일부 값을 받지 못해 null값이 반환되어 우선 생성자를 사용한 변환방법으로 사용했습니다
        MemberDto.Response response = new MemberDto.Response(createdMember);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity<MemberDto.Response> getMember(@Positive @PathVariable("member-id") Long memberId) {

        Member findMember = service.findMember(memberId);
//        MemberDto.Response response = mapper.memberToMemberDtoResponse(findMember);  // 매퍼에서 일부 값을 받지 못해 null값이 반환되어 우선 생성자를 사용한 변환방법으로 사용했습니다
        MemberDto.Response response = new MemberDto.Response(findMember);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity<MemberDto.Response> patchMember (@PathVariable("member-id") Long memberId,
                                                                      @RequestBody MemberDto.Patch dto) {
        Member member = mapper.memberDtoPatchToMember(dto);
        member.setId(memberId);
        Member modifiedMember = service.patchMember(member);
        MemberDto.Response response = new MemberDto.Response(modifiedMember);

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

        return new ResponseEntity<>(new PageInfoDto(page), HttpStatus.OK);
    }

//    @PostMapping("/logout")                   // 현재 시큐리티 미적용 상태이므로 주석처리 해두었습니다.
//    public ResponseEntity logOut(HttpServletRequest request) {
//        System.out.println("로그아웃");
//        service.outMember(request);
//
//        return new ResponseEntity(HttpStatus.OK);
//    }
}
