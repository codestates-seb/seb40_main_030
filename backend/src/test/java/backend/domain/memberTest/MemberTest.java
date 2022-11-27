package backend.domain.memberTest;

import backend.domain.member.dto.MemberDto;
import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import backend.global.security.dto.LoginDto;
import backend.global.security.jwt.JwtTokenizer;
import com.google.gson.Gson;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import java.util.List;

import static backend.util.ApiDocumentUtils.getRequestPreProcessor;
import static backend.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.requestHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs
public class MemberTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @Autowired
    private JwtTokenizer jwtTokenizer;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    public PasswordEncoder passwordEncoder;

    @Test @DisplayName("Post_Member_Test")
    void postMemberTest() throws Exception {
        // given
        MemberDto.Post dto = new MemberDto.Post();
        dto.setEmail("test3@gmail.com");
        dto.setPassword("123411aa");
        dto.setNickname("테스트트");
        dto.setPhone("010-1111-2222");
        dto.setAddress("경기도 분당시 엄복동");
        dto.setPhotoURL("http://asd311114f6asd54f6aw");
        String body = gson.toJson(dto);

        // when
        ResultActions actions = mockMvc.perform(
                post("/members")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body)
        );

        // then
        actions
                .andExpect(status().isCreated())
                .andDo(document("createMember",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("계정 email"),
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("계정 닉네임"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("계정 비밀번호"),
                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("계정 전화번호"),
                                        fieldWithPath("address").type(JsonFieldType.STRING).description("계정 주소"),
                                        fieldWithPath("photoURL").type(JsonFieldType.STRING).description("계정 프로필")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("계정 식별자"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("계정 이메일"),
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("계정 닉네임")
                                )
                        )
                ));
    }


    @Test @DisplayName("Patch_Member_Test")
    void patchMemberTest() throws Exception {
        // given
        Long memberId = 1L;
        Member member = memberRepository.findById(memberId).get();
        String accessToken = jwtTokenizer.delegateAccessToken(member);
        String jwt = "Bearer " + accessToken;

        MemberDto.Patch dto = new MemberDto.Patch();
        dto.setNickname("벌렐렐레");
        dto.setPhone("010-9898-7878");
        dto.setAddress("부산시 중구 토성동");
        dto.setPhotoURL("http://123456789dd");
        String body = gson.toJson(dto);

        // when
        ResultActions actions = mockMvc.perform(
                patch("/members/{memberId}", memberId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .header("AccessToken", jwt)
                        .content(body)
        );
        // then
        actions
                .andExpect(status().isOk())
                .andDo(document("modifyMember",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("memberId").description("계정 식별자")
                        ),
                        requestHeaders(
                                List.of(
                                        headerWithName("AccessToken").description("JWT")
                                )
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("계정 닉네임"),
                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("계정 전화번호"),
                                        fieldWithPath("address").type(JsonFieldType.STRING).description("계정 주소"),
                                        fieldWithPath("photoURL").type(JsonFieldType.STRING).description("계정 프로필")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("계정 이메일"),
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("계정 닉네임"),
                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("계정 전화번호"),
                                        fieldWithPath("address").type(JsonFieldType.STRING).description("계정 주소"),
                                        fieldWithPath("photoURL").type(JsonFieldType.STRING).description("계정 프로필")
                                )
                        )
                ));
    }


    @Test @DisplayName("Delete_Member_Test")
    void deleteMemberTest() throws Exception {
        // given
        Long memberId = 1L;
        Member member = memberRepository.findById(memberId).get();
        String accessToken = jwtTokenizer.delegateAccessToken(member);
        String jwt = "Bearer " + accessToken;

        // when
        ResultActions actions = mockMvc.perform(
                delete("/members/{memberId}", memberId)
                        .header("AccessToken", jwt)
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document("removeMember",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("memberId").description("계정 식별자")
                        ),
                        requestHeaders(
                                List.of(
                                        headerWithName("AccessToken").description("JWT")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.STRING).description("요청 성공")
                                )
                        )
                ));
    }


    @Test @DisplayName("Get_Member_Test")
    void getMemberTest() throws Exception {
        // given
        Long memberId = 2L;

        // when
        ResultActions actions = mockMvc.perform(
                get("/members/{memberId}", memberId)
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document("getMember",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("memberId").description("계정 식별자")
                        ),
//                        requestHeaders(
//                                List.of(
//                                        headerWithName("AccessToken").description("JWT")
//                                )
//                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("계정 식별자"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("계정 이메일"),
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("계정 닉네임"),
                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("계정 전화번호"),
                                        fieldWithPath("address").type(JsonFieldType.STRING).description("계정 주소"),
                                        fieldWithPath("photoURL").type(JsonFieldType.STRING).description("계정 프로필"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("계정 생성 일자"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("계정 수정 일자"),

                                        fieldWithPath("payment[]").type(JsonFieldType.ARRAY).description("계정 결제내역"),
                                        fieldWithPath("payment[].id").type(JsonFieldType.NUMBER).description("결제 식별자"),
                                        fieldWithPath("payment[].totalPrice").type(JsonFieldType.NUMBER).description("총 결제 금액"),
                                        fieldWithPath("payment[].status").type(JsonFieldType.STRING).description("결제 상태"),
                                        fieldWithPath("payment[].startTime").type(JsonFieldType.STRING).description("사용 시작 시간"),
                                        fieldWithPath("payment[].endTime").type(JsonFieldType.STRING).description("사용 종료 시간"),
                                        fieldWithPath("payment[].payMethod").type(JsonFieldType.STRING).description("결제 방법"),
                                        fieldWithPath("payment[].createdAt").type(JsonFieldType.STRING).description("결제 생성 일자"),
                                        fieldWithPath("payment[].modifiedAt").type(JsonFieldType.STRING).description("결제 수정 일자")
                                )
                        )
                ));

    }

    @Test @DisplayName("Get_Members_Test")
    void getMembersTest() throws Exception {
        // given

        // when
        ResultActions actions = mockMvc.perform(
                get("/members")
                        .param("page", "1")
                        .param("size","10")
                        .param("sort", "id,desc")
        );
        // then
        actions
                .andExpect(status().isOk())
                .andDo(document("getMembers",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
//                        requestHeaders(
//                                List.of(
//                                        headerWithName("AccessToken").description("JWT")
//                                )
//                        ),
                        requestParameters(
                                parameterWithName("page").description("페이지 번호(default = 1"),
                                parameterWithName("size").description("페이징 size(default = 10)"),
                                parameterWithName("sort").description("정렬 조건(default = id, asc)")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("content[]").type(JsonFieldType.ARRAY).description("계정 목록"),
                                        fieldWithPath("content[].memberId").type(JsonFieldType.NUMBER).description("계정 식별자"),
                                        fieldWithPath("content[].email").type(JsonFieldType.STRING).description("계정 이메일"),
                                        fieldWithPath("content[].nickname").type(JsonFieldType.STRING).description("계정 닉네임"),
                                        fieldWithPath("content[].phone").type(JsonFieldType.STRING).description("계정 전화번호"),
                                        fieldWithPath("content[].address").type(JsonFieldType.STRING).description("계정 주소"),
                                        fieldWithPath("content[].photoURL").type(JsonFieldType.STRING).description("계정 프로필"),
                                        fieldWithPath("content[].createdAt").type(JsonFieldType.STRING).description("계정 생성 일자"),
                                        fieldWithPath("content[].modifiedAt").type(JsonFieldType.STRING).description("계정 수정 일자"),

                                        fieldWithPath("content[].payment[]").type(JsonFieldType.ARRAY).description("계정 결제내역"),
                                        fieldWithPath("content[].payment[].id").type(JsonFieldType.NUMBER).description("결제 식별자"),
                                        fieldWithPath("content[].payment[].totalPrice").type(JsonFieldType.NUMBER).description("총 결제 금액"),
                                        fieldWithPath("content[].payment[].status").type(JsonFieldType.STRING).description("결제 상태"),
                                        fieldWithPath("content[].payment[].startTime").type(JsonFieldType.STRING).description("사용 시작 시간"),
                                        fieldWithPath("content[].payment[].endTime").type(JsonFieldType.STRING).description("사용 종료 시간"),
                                        fieldWithPath("content[].payment[].payMethod").type(JsonFieldType.STRING).description("결제 방법"),
                                        fieldWithPath("content[].payment[].createdAt").type(JsonFieldType.STRING).description("결제 생성 일자"),
                                        fieldWithPath("content[].payment[].modifiedAt").type(JsonFieldType.STRING).description("결제 수정 일자"),

                                        fieldWithPath("totalPages").type(JsonFieldType.NUMBER).description("총 페이지 수"),
                                        fieldWithPath("totalElements").type(JsonFieldType.NUMBER).description("전체 Answer 개수"),
                                        fieldWithPath("first").type(JsonFieldType.BOOLEAN).description("첫 페이지 여부"),
                                        fieldWithPath("last").type(JsonFieldType.BOOLEAN).description("마지막 페이지 여부"),
                                        fieldWithPath("sorted").type(JsonFieldType.BOOLEAN).description("정렬 여부"),
                                        fieldWithPath("size").type(JsonFieldType.NUMBER).description("페이징 size"),
                                        fieldWithPath("pageNumber").type(JsonFieldType.NUMBER).description("페이지 번호(0부터 시작)"),
                                        fieldWithPath("numberOfElements").type(JsonFieldType.NUMBER).description("페이징된 Question 개수")
                                )
                        )
                ));

    }

    @Test
    @DisplayName("Login_Member_Test")
    void loginMemberTest() throws Exception {
        //given
        String email = "test3@gmail.com";
        String password = "123411aa";
        String encryptedPassword = passwordEncoder.encode(password);

        LoginDto loginDto = new LoginDto();
        loginDto.setEmail(email);
        loginDto.setPassword(encryptedPassword);
        String body = gson.toJson(loginDto);

        //when
        ResultActions actions = mockMvc.perform(
                post("/auth/login")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body)
        );

        //then
        actions
                .andExpect(status().isOk())
                .andDo(document("createMember",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("memberId").description("Member 식별자")
                        ),
                        requestHeaders(
                                List.of(
                                        headerWithName("AccessToken").description("JWT")
                                )
                        ),
                        requestFields(
                                List.of(

                                )
                        ),
                        responseFields(
                                List.of(

                                )
                        )
                ));
    }

}
