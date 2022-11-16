package backend.domain.member.mapper;

import backend.domain.member.dto.MemberDto;
import backend.domain.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberDtoPostToMember(MemberDto.Post dto);
    Member memberDtoPatchToMember(MemberDto.Patch dto);
    MemberDto.Response memberToMemberDtoResponse(Member member);

    List<MemberDto.Response> memberListToMemberDtoResponseList(List<Member> memberList);
}
