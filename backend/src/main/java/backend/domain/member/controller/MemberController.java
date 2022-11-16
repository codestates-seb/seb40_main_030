package backend.domain.member.controller;


import backend.domain.member.dto.MemberDto;
import backend.domain.member.entity.Member;
import backend.domain.member.mapper.MemberMapper;
import backend.domain.member.service.MemberService;
import backend.global.dto.SingleResDto;
import lombok.RequiredArgsConstructor;
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

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post dto) {


        Member member = mapper.memberDtoPostToMember(dto);
        Member createdMember = service.createMember(member);
        MemberDto.Response response = mapper.memberToMemberDtoResponse(createdMember);
        SingleResDto<MemberDto.Response> singleResDto = new SingleResDto<>(response);

        return new ResponseEntity(singleResDto, HttpStatus.CREATED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@Positive @PathVariable("member-id") Long memberId) {

        Member findMember = service.findMember(memberId);
        MemberDto.Response response = mapper.memberToMemberDtoResponse(findMember);
        SingleResDto<MemberDto.Response> singleResDto = new SingleResDto<>(response);

        return new ResponseEntity(singleResDto, HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity logOut(HttpServletRequest request) {
        System.out.println("로그아웃");
        service.outMember(request);

        return new ResponseEntity(HttpStatus.OK);
    }
}
